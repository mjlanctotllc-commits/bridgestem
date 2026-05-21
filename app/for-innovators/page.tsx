"use client";

'use client';

import Link from 'next/link';
import {
  Shield,
  DollarSign,
  Users,
  Zap,
  BookOpen,
  TrendingUp,
  ArrowRight,
  UserPlus,
  Lightbulb,
  Rocket,
  Star,
} from 'lucide-react';
import MetricCard from '@/components/MetricCard';

const benefits = [
  {
    icon: <Shield size={22} />,
    title: 'Ownership Protection',
    description: 'Your IP stays yours. Contributor agreements define rights before work begins. Document your idea from day one.',
  },
  {
    icon: <DollarSign size={22} />,
    title: 'Reduced Upfront Costs',
    description: 'Pay contributors from revenue, not from your pocket. Launch without breaking the bank or seeking outside investment.',
  },
  {
    icon: <Users size={22} />,
    title: 'Specialized Contributors',
    description: 'Find engineers, marketers, scientists—exactly who your project needs. No more settling for generalists.',
  },
  {
    icon: <Zap size={22} />,
    title: 'Faster Development',
    description: 'Assembled teams move faster than solo founders. Multiple specialists working in parallel accelerates your timeline.',
  },
  {
    icon: <BookOpen size={22} />,
    title: 'Startup Guidance',
    description: 'Step-by-step process from idea to scalable business. BridgeSTEM guides you through each milestone.',
  },
  {
    icon: <TrendingUp size={22} />,
    title: 'Residual Income',
    description: 'Launch once, earn forever as your product generates revenue. Build assets, not just income.',
  },
];

const metrics = [
  { value: '500', label: 'Active Projects', prefix: '', suffix: '+' },
  { value: '2400', label: 'Contributors', prefix: '', suffix: '+' },
  { value: '1.2', label: 'Revenue Distributed', prefix: '$', suffix: 'M+' },
  { value: '87', label: 'Project Completion Rate', prefix: '', suffix: '%' },
];

const testimonials = [
  {
    name: 'Sarah K.',
    role: 'Biotech Founder',
    quote:
      'BridgeSTEM helped me find a manufacturing partner and a marketer for my medical device startup. We launched in 8 months.',
    avatar: 'SK',
  },
  {
    name: 'Marcus T.',
    role: 'Aerospace Engineer turned Founder',
    quote:
      "I had the idea, BridgeSTEM built my team on revenue share. No investors, no debt. My product is generating consistent revenue.",
    avatar: 'MT',
  },
  {
    name: 'Priya M.',
    role: 'Software Innovator',
    quote:
      'The contributor agreement system gave me peace of mind. Everyone knew their role and their cut from day one.',
    avatar: 'PM',
  },
];

const onboardingSteps = [
  { icon: <UserPlus size={20} />, label: 'Create Account' },
  { icon: <Lightbulb size={20} />, label: 'Submit Idea' },
  { icon: <Users size={20} />, label: 'Match Team' },
  { icon: <Rocket size={20} />, label: 'Launch' },
];

export default function ForInnovatorsPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: '6rem 1.5rem 4rem',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at 20% 50%, rgba(59,130,246,0.12) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(59,130,246,0.15)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '9999px',
                padding: '0.375rem 1rem',
                color: '#60a5fa',
                fontSize: '0.875rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              For Innovators
            </div>
            <h1
              style={{
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 800,
                lineHeight: 1.1,
                color: '#fff',
                marginBottom: '1.5rem',
              }}
            >
              Turn Your Idea Into a Business{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                Without Going It Alone
              </span>
            </h1>
            <p
              style={{
                color: 'rgba(255,255,255,0.65)',
                fontSize: '1.1rem',
                lineHeight: 1.7,
                marginBottom: '2rem',
              }}
            >
              Reduce upfront costs, find specialized talent on revenue share, and protect your IP while building a real business. BridgeSTEM turns visionaries into founders.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
                Start Your Project <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary" style={{ textDecoration: 'none' }}>
                How It Works
              </Link>
            </div>
          </div>

          {/* Stats preview card */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
              padding: '2rem',
              backdropFilter: 'blur(10px)',
            }}
          >
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { label: 'Avg. time to launch', value: '6 months' },
                { label: 'Avg. team size', value: '4.2 members' },
                { label: 'Revenue share range', value: '15–40%' },
                { label: 'Upfront cost', value: '$0' },
              ].map(({ label, value }) => (
                <div
                  key={label}
                  style={{
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '0.75rem',
                    padding: '1rem',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.5rem',
                      fontWeight: 700,
                      background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    {value}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginTop: '0.25rem' }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2
              style={{
                fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)',
                fontWeight: 700,
                color: '#fff',
                marginBottom: '0.75rem',
              }}
            >
              Why Innovators Choose BridgeSTEM
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem' }}>
              Everything you need to go from concept to company.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {benefits.map((b) => (
              <div
                key={b.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
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
                    background: 'linear-gradient(135deg, rgba(59,130,246,0.3), rgba(6,182,212,0.3))',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#60a5fa',
                    marginBottom: '1rem',
                  }}
                >
                  {b.icon}
                </div>
                <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>{b.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>{b.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              BridgeSTEM by the Numbers
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {metrics.map((m) => (
              <MetricCard key={m.label} value={m.value} label={m.label} prefix={m.prefix} suffix={m.suffix} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Innovators Love BridgeSTEM
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Real stories from real founders.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {testimonials.map((t) => (
              <div
                key={t.name}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                }}
              >
                <div style={{ display: 'flex', gap: '0.25rem', marginBottom: '1rem' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} style={{ color: '#fbbf24', fill: '#fbbf24' }} />
                  ))}
                </div>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  &quot;{t.quote}&quot;
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div
                    style={{
                      width: '2.5rem',
                      height: '2.5rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: '0.75rem',
                    }}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{t.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem' }}>{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding walkthrough */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '3rem' }}>
            Get Started in 4 Simple Steps
          </h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
            {onboardingSteps.map((step, index) => (
              <div key={step.label} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '0.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                    }}
                  >
                    {step.icon}
                  </div>
                  <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.8rem', fontWeight: 500 }}>{step.label}</span>
                </div>
                {index < onboardingSteps.length - 1 && (
                  <ArrowRight size={20} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Link href="/dashboard" className="btn-primary" style={{ textDecoration: 'none' }}>
              Get Started Today <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
