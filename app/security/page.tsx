"use client";

'use client';

import {
  Lock,
  FileText,
  Eye,
  Shield,
  CheckCircle,
  RefreshCw,
  Fingerprint,
  Clock,
  Key,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: <Lock size={24} />,
    title: 'Idea Protection',
    description: 'Document your concept on submission. Timestamped, logged, and protected from the moment you enter it. Your innovation is recorded before any collaboration begins.',
  },
  {
    icon: <FileText size={24} />,
    title: 'Contributor Agreements',
    description: 'Every team member signs defined terms before accessing your project. No one sees your full concept without committing to the agreed terms.',
  },
  {
    icon: <Eye size={24} />,
    title: 'Ownership Transparency',
    description: 'All ownership percentages are documented and visible to all stakeholders. No hidden deals, no surprises, no disputes about who owns what.',
  },
  {
    icon: <Shield size={24} />,
    title: 'Secure Collaboration',
    description: 'Encrypted project workspaces and communication channels keep your ideas, files, and conversations private and secure.',
  },
  {
    icon: <CheckCircle size={24} />,
    title: 'Accountability System',
    description: 'Milestone-based tracking with consequences for non-delivery. Every team member is held accountable to their commitments.',
  },
  {
    icon: <RefreshCw size={24} />,
    title: 'Role Replacement Protocols',
    description: 'Pre-defined procedures for replacing contributors without disrupting projects. If someone exits, your project continues seamlessly.',
  },
];

const trustIndicators = [
  { icon: <Key size={18} />, label: '256-bit Encryption' },
  { icon: <FileText size={18} />, label: 'Documented Agreements' },
  { icon: <Clock size={18} />, label: 'IP Timestamping' },
  { icon: <Eye size={18} />, label: 'Audit Trails' },
  { icon: <Fingerprint size={18} />, label: 'Multi-party Verification' },
];

export default function SecurityPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: '6rem 1.5rem 4rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center top, rgba(16,185,129,0.08) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />

        {/* Animated security rings */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '3rem' }}>
          {[3, 2, 1].map((ring) => (
            <div
              key={ring}
              style={{
                position: ring === 1 ? 'relative' : 'absolute',
                top: ring === 1 ? 'auto' : '50%',
                left: ring === 1 ? 'auto' : '50%',
                transform: ring === 1 ? 'none' : 'translate(-50%, -50%)',
                width: ring === 1 ? '4rem' : `${ring * 3}rem`,
                height: ring === 1 ? '4rem' : `${ring * 3}rem`,
                borderRadius: '50%',
                border: `1px solid rgba(59,130,246,${0.4 - ring * 0.1})`,
                background: ring === 1 ? 'linear-gradient(135deg, #3B82F6, #06B6D4)' : 'transparent',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                animation: ring !== 1 ? 'pulse-glow 3s ease-in-out infinite' : 'none',
                animationDelay: `${ring * 0.5}s`,
              }}
            >
              {ring === 1 && <Shield size={22} style={{ color: '#fff' }} />}
            </div>
          ))}
        </div>

        <div style={{ maxWidth: '50rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div
            style={{
              display: 'inline-block',
              background: 'rgba(16,185,129,0.15)',
              border: '1px solid rgba(16,185,129,0.3)',
              borderRadius: '9999px',
              padding: '0.375rem 1rem',
              color: '#34d399',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '1.5rem',
            }}
          >
            Security & Ownership
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              color: '#fff',
              marginBottom: '1.5rem',
            }}
          >
            Your Idea Is Protected{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              From Day One
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            BridgeSTEM is built from the ground up to protect your intellectual property, ensure accountability, and provide complete transparency across every collaboration.
          </p>
        </div>
      </section>

      {/* Trust Indicators */}
      <section style={{ padding: '2rem 1.5rem 4rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            {trustIndicators.map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '9999px',
                  padding: '0.5rem 1rem',
                  color: 'rgba(255,255,255,0.7)',
                  fontSize: '0.8rem',
                  fontWeight: 500,
                }}
              >
                <span style={{ color: '#60a5fa' }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section style={{ padding: '3rem 1.5rem 5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Built-In Protection at Every Layer
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
            {securityFeatures.map((feature) => (
              <div
                key={feature.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  display: 'flex',
                  gap: '1.25rem',
                  alignItems: 'flex-start',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(16,185,129,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    background: 'linear-gradient(135deg, rgba(16,185,129,0.3), rgba(59,130,246,0.3))',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#34d399',
                    flexShrink: 0,
                  }}
                >
                  {feature.icon}
                </div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>{feature.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Protection Works */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Your Protection Timeline
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { time: 'Day 0', event: 'Idea Submission', detail: 'Your concept is timestamped and logged. IP record established.', color: '#3B82F6' },
              { time: 'Day 1', event: 'Team Formation', detail: 'NDAs and contributor agreements sent to all prospective team members.', color: '#8B5CF6' },
              { time: 'Day 2', event: 'Agreements Signed', detail: 'All agreements executed. Each member\'s role, rights, and compensation locked in.', color: '#06B6D4' },
              { time: 'Ongoing', event: 'Active Monitoring', detail: 'Milestone tracking, communication logging, and revenue attribution running continuously.', color: '#10B981' },
            ].map(({ time, event, detail, color }) => (
              <div
                key={time}
                style={{
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.25rem 1.5rem',
                }}
              >
                <div
                  style={{
                    background: `${color}20`,
                    border: `1px solid ${color}40`,
                    borderRadius: '0.5rem',
                    padding: '0.4rem 0.75rem',
                    color,
                    fontWeight: 600,
                    fontSize: '0.8rem',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                  }}
                >
                  {time}
                </div>
                <div>
                  <div style={{ color: '#fff', fontWeight: 600, marginBottom: '0.2rem' }}>{event}</div>
                  <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem' }}>{detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security notice */}
      <section style={{ padding: '2rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(59,130,246,0.08)',
              border: '1px solid rgba(59,130,246,0.2)',
              borderRadius: '1rem',
              padding: '1.75rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <AlertCircle size={20} style={{ color: '#60a5fa', flexShrink: 0, marginTop: '0.125rem' }} />
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              While BridgeSTEM provides documentation and agreement tools to help protect your intellectual property, we are not a legal services provider. For comprehensive IP protection, patent filing, and legally binding agreements, consult a licensed attorney. Our platform complements—but does not replace—formal legal protection.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.3)', textAlign: 'center' }}>
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Protect Your Idea Today
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Submit your concept and get the protection, team, and tools to make it a reality.
          </p>
          <Link href="/for-innovators" className="btn-primary" style={{ textDecoration: 'none' }}>
            Get Started <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
