"use client";

import Link from 'next/link';

export default function Footer() {
  return (
    <footer
      style={{
        background: 'rgba(0, 0, 0, 0.4)',
        borderTop: '1px solid rgba(255,255,255,0.08)',
        padding: '4rem 1.5rem 2rem',
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
          {/* Brand */}
          <div>
            <span
              style={{
                fontSize: '1.5rem',
                fontWeight: 700,
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                display: 'block',
                marginBottom: '1rem',
              }}
            >
              BridgeSTEM
            </span>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem', lineHeight: 1.7 }}>
              BridgeSTEM empowers professionals, freelancers, and idea creators to collaborate, secure fair contributor structures, and develop products with reduced upfront costs—rewarding contributors with real ownership while transforming innovative ideas into thriving businesses.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Platform</h4>
            {['How It Works', 'Features', 'Marketplace', 'Dashboard'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.5rem', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* For Users */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>For Users</h4>
            {['For Innovators', 'For Contributors', 'Payment Structures', 'Security'].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.5rem', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 style={{ color: '#fff', fontWeight: 600, marginBottom: '1rem', fontSize: '0.9rem' }}>Legal</h4>
            {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
              <Link
                key={item}
                href="#"
                style={{ display: 'block', color: 'rgba(255,255,255,0.5)', textDecoration: 'none', marginBottom: '0.5rem', fontSize: '0.875rem', transition: 'color 0.2s' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#60a5fa')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
              >
                {item}
              </Link>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>
            © {new Date().getFullYear()} BridgeSTEM. All rights reserved.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', maxWidth: '400px', textAlign: 'right' }}>
            BridgeSTEM does not provide legal, financial, or tax advice. Consult licensed professionals before entering agreements.
          </p>
        </div>
      </div>
    </footer>
  );
}
