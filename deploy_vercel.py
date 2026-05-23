#!/usr/bin/env python3
"""Deploy bridgestem-website to Vercel. Requires VERCEL_TOKEN env var."""

import json, os, time, sys, hashlib, mimetypes
from pathlib import Path
import urllib.request, urllib.error

VERCEL_TOKEN = os.environ.get("VERCEL_TOKEN", "")
if not VERCEL_TOKEN:
    sys.exit("Error: VERCEL_TOKEN environment variable not set")

TEAM_ID = "team_x0e5ZmqxZ4HGCCwRbzExa2An"
PROJECT_NAME = "bridgestem"
REPO_ROOT = Path(__file__).parent

HEADERS = {
    "Authorization": f"Bearer {VERCEL_TOKEN}",
    "Content-Type": "application/json",
}

SKIP = {".git", "node_modules", ".next", ".vercel", "__pycache__"}
SKIP_FILES = {"deploy_vercel.py"}

def api(method, path, body=None):
    url = f"https://api.vercel.com{path}"
    data = json.dumps(body).encode() if body else None
    req = urllib.request.Request(url, data=data, headers=HEADERS, method=method)
    try:
        with urllib.request.urlopen(req) as r:
            return json.loads(r.read())
    except urllib.error.HTTPError as e:
        err = e.read().decode()
        print(f"  API error {e.code}: {err[:300]}")
        sys.exit(1)

def sha1(data: bytes) -> str:
    return hashlib.sha1(data).hexdigest()

def collect_files():
    files = []
    for p in REPO_ROOT.rglob("*"):
        if p.is_dir():
            continue
        parts = p.relative_to(REPO_ROOT).parts
        if any(s in parts for s in SKIP):
            continue
        if p.name in SKIP_FILES:
            continue
        files.append(p)
    return files

def upload_file(path: Path):
    data = path.read_bytes()
    digest = sha1(data)
    req = urllib.request.Request(
        "https://api.vercel.com/v2/files", data=data,
        headers={**HEADERS, "Content-Length": str(len(data)), "x-vercel-digest": digest, "Content-Type": "application/octet-stream"},
        method="POST"
    )
    try:
        with urllib.request.urlopen(req) as r:
            pass
    except urllib.error.HTTPError as e:
        if e.code not in (200, 409):
            print(f"  Upload error {path.name}: {e.code}")
    return digest

def main():
    print("📦 Collecting files...")
    files = collect_files()
    print(f"  {len(files)} files found")

    print("⬆️  Uploading files...")
    file_map = []
    for p in files:
        digest = upload_file(p)
        rel = str(p.relative_to(REPO_ROOT))
        file_map.append({"file": rel, "sha": digest, "size": p.stat().st_size})

    print("🚀 Creating deployment...")
    payload = {
        "name": PROJECT_NAME,
        "files": file_map,
        "projectSettings": {"framework": "nextjs"},
        "target": "production",
    }
    resp = api("POST", f"/v13/deployments?teamId={TEAM_ID}", payload)
    dep_id = resp.get("id")
    dep_url = resp.get("url")
    print(f"  Deployment ID: {dep_id}")
    print(f"  URL: https://{dep_url}")

    print("⏳ Waiting for READY...")
    for _ in range(60):
        time.sleep(5)
        status = api("GET", f"/v13/deployments/{dep_id}?teamId={TEAM_ID}")
        state = status.get("readyState") or status.get("state")
        print(f"  State: {state}")
        if state == "READY":
            print(f"\n✅ Live at: https://{dep_url}")
            return
        if state in ("ERROR", "CANCELED"):
            print(f"\n❌ Deployment failed: {state}")
            sys.exit(1)

    print("⚠️  Timed out waiting for READY")

if __name__ == "__main__":
    main()
