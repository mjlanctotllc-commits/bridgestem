'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '/#features' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'For Innovators', href: '/for-innovators' },
  { label: 'For Contributors', href: '/for-contributors' },
  { label: 'Payment Structures', href: '/payment-structures' },
  { label: 'Security', href: '/security' },
  { label: 'Marketplace', href: '/marketplace' },
  { label: 'Dashboard', href: '/dashboard' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close menu on scroll
  useEffect(() => {
    if (!mobileOpen) return;
    const handleScroll = () => setMobileOpen(false);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mobileOpen]);

  return (
    <nav
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        background: 'rgba(10, 15, 30, 0.85)',
        backdropFilter: 'blur(16px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '4rem' }}>
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none' }}>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              BridgeSTEM
            </span>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', flexWrap: 'wrap' }}
               className="hidden-mobile">
            {navLinks.slice(0, 6).map((link) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.375rem',
                  fontSize: '0.875rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/marketplace"
              style={{
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                padding: '0.4rem 0.75rem',
                borderRadius: '0.375rem',
                fontSize: '0.875rem',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              Marketplace
            </Link>
            <Link
              href="/dashboard"
              style={{
                background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                color: '#fff',
                textDecoration: 'none',
                padding: '0.5rem 1.25rem',
                borderRadius: '0.5rem',
                fontSize: '0.875rem',
                fontWeight: 600,
                marginLeft: '0.5rem',
                transition: 'opacity 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              Dashboard
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ color: '#fff', background: 'none', border: 'none', cursor: 'pointer', display: 'none' }}
            className="mobile-menu-btn"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Menu — fixed overlay so it doesn't push/scroll with page */}
      {mobileOpen && (
        <div
          style={{
            position: 'fixed',
            top: '4rem',
            left: 0,
            right: 0,
            zIndex: 49,
            background: 'rgba(10, 15, 30, 0.97)',
            backdropFilter: 'blur(16px)',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            padding: '0.5rem 1.5rem 1.25rem',
          }}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                color: 'rgba(255,255,255,0.8)',
                textDecoration: 'none',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                fontSize: '0.9rem',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
