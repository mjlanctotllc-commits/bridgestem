'use client';

import Link from 'next/link';
import {
  Users,
  Shield,
  PieChart,
  FileText,
  ShoppingBag,
  BarChart2,
  Network,
  CheckCircle,
  Lock,
  TrendingUp,
  ArrowRight,
  Zap,
  Globe,
} from 'lucide-react';
import FeatureCard from '@/components/FeatureCard';

const features = [
  {
    icon: <Users size={20} />,
    title: 'Team Matching',
    description: 'Connect with engineers, marketers, scientists, and professionals who match your project needs.',
  },
  {
    icon: <Shield size={20} />,
    title: 'Secure Collaboration',
    description: 'Work within a protected environment with encrypted communication and documented agreements.',
  },
  {
    icon: <PieChart size={20} />,
    title: 'Revenue Share Structures',
    description: 'Define contributor compensation as a percentage of real revenue—not empty promises.',
  },
  {
    icon: <FileText size={20} />,
    title: 'Contributor Agreements',
    description: 'Formalize roles, responsibilities, and compensation before work begins.',
  },
  {
    icon: <ShoppingBag size={20} />,
    title: 'Product Storefronts',
    description: 'Launch your product with a built-in sales channel and marketplace presence.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Sales Tracking',
    description: 'Real-time dashboards for monitoring revenue, milestones, and contributor payouts.',
  },
  {
    icon: <Network size={20} />,
    title: 'Startup Networking',
    description: 'Connect with other founders, contributors, and investors across STEM industries.',
  },
  {
    icon: <CheckCircle size={20} />,
    title: 'Contributor Accountability',
    description: 'Structured milestone enforcement keeps every team member on track.',
  },
  {
    icon: <Lock size={20} />,
    title: 'Innovation Protection',
    description: 'Your idea, your IP. Ownership documentation from day one.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Residual Income Opportunities',
    description: 'Build once, earn continuously. Contributors earn from every sale—indefinitely.',
  },
];

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        style={{
          position: 'relative',
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          padding: '4rem 1.5rem',
        }}
      >
        {/* Animated background shapes */}
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div
            className="animate-float"
            style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '20rem',
              height: '20rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)',
            }}
          />
          <div
            className="animate-float-delayed"
            style={{
              position: 'absolute',
              top: '30%',
              right: '5%',
              width: '25rem',
              height: '25rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(6,182,212,0.12) 0%, transparent 70%)',
            }}
          />
          <div
            className="animate-float-slow"
            style={{
              position: 'absolute',
              bottom: '10%',
              left: '30%',
              width: '15rem',
              height: '15rem',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)',
            }}
          />
          {/* Grid overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              backgroundImage:
                'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
              backgroundSize: '50px 50px',
            }}
          />
        </div>

        <div style={{ textAlign: 'center', maxWidth: '60rem', position: 'relative', zIndex: 1 }}>
          {/* Badge */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              background: 'rgba(59,130,246,0.15)',
              border: '1px solid rgba(59,130,246,0.3)',
              borderRadius: '9999px',
              padding: '0.4rem 1rem',
              color: '#60a5fa',
              fontSize: '0.875rem',
              fontWeight: 500,
              marginBottom: '2rem',
            }}
          >
            <Zap size={14} />
            The Future of Startup Collaboration
          </div>

          <h1
            style={{
              fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              letterSpacing: '-0.02em',
            }}
          >
            <span style={{ color: '#fff' }}>Where Ideas Meet</span>
            <br />
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              the Talent to Build Them
            </span>
          </h1>

          <p
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'rgba(255,255,255,0.65)',
              lineHeight: 1.7,
              marginBottom: '2.5rem',
              maxWidth: '40rem',
              margin: '0 auto 2.5rem',
            }}
          >
            Connect innovators with contributors who build on revenue share. No upfront costs. Real ownership. Thriving businesses.
          </p>

          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/for-innovators" className="btn-primary" style={{ textDecoration: 'none' }}>
              Start Your Project <ArrowRight size={16} />
            </Link>
            <Link href="/for-contributors" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Become a Contributor
            </Link>
          </div>

          {/* Trust badges */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              marginTop: '4rem',
              flexWrap: 'wrap',
            }}
          >
            {[
              { icon: <Lock size={16} />, label: 'Idea Protection' },
              { icon: <PieChart size={16} />, label: 'Revenue Share' },
              { icon: <Globe size={16} />, label: 'Real Ownership' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  color: 'rgba(255,255,255,0.5)',
                  fontSize: '0.875rem',
                }}
              >
                <span style={{ color: '#60a5fa' }}>{icon}</span>
                {label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" style={{ padding: '6rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '1rem',
              }}
            >
              Everything You Need to{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Build & Scale
              </span>
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', maxWidth: '40rem', margin: '0 auto' }}>
              BridgeSTEM provides a complete ecosystem for startup collaboration—from idea protection to revenue distribution.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {features.map((feature) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        style={{
          padding: '6rem 1.5rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center, rgba(59,130,246,0.1) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '40rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2
            style={{
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Ready to{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Transform Your Idea?
            </span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: 1.7 }}>
            Join thousands of innovators and contributors building the next generation of businesses.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
              Explore Marketplace <ArrowRight size={16} />
            </Link>
            <Link href="/how-it-works" className="btn-secondary" style={{ textDecoration: 'none' }}>
              How It Works
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
