'use client';

import StepCard from '@/components/StepCard';
import Link from 'next/link';
import {
  Lightbulb,
  Users,
  ClipboardList,
  PieChart,
  Code,
  Rocket,
  BarChart2,
  TrendingUp,
  ArrowRight,
} from 'lucide-react';

const steps = [
  {
    icon: <Lightbulb size={20} />,
    title: 'Submit an Idea',
    description: 'Describe your concept, target market, and what skills you need. Your idea is documented and timestamped immediately.',
  },
  {
    icon: <Users size={20} />,
    title: 'Build a Team',
    description: 'BridgeSTEM matches you with qualified contributors from our network based on your project requirements.',
  },
  {
    icon: <ClipboardList size={20} />,
    title: 'Assign Roles',
    description: 'Define each contributor\'s responsibilities, time commitment, and deliverables. Everyone knows their role from day one.',
  },
  {
    icon: <PieChart size={20} />,
    title: 'Create Revenue Structure',
    description: 'Set up transparent revenue share percentages visible to all team members. No hidden deals, no surprises.',
  },
  {
    icon: <Code size={20} />,
    title: 'Develop Prototype',
    description: 'Collaborate securely with milestone tracking and progress visibility. Stay on track with built-in accountability tools.',
  },
  {
    icon: <Rocket size={20} />,
    title: 'Launch Product',
    description: 'Publish to the BridgeSTEM marketplace and your own storefront. Reach customers from day one.',
  },
  {
    icon: <BarChart2 size={20} />,
    title: 'Track Sales',
    description: 'Monitor revenue in real time with detailed analytics and contributor payout breakdowns. Transparency for everyone.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: 'Scale the Company',
    description: 'Reinvest, recruit, and grow with BridgeSTEM\'s scaling tools and network. Your success is just the beginning.',
  },
];

export default function HowItWorksPage() {
  return (
    <div>
      {/* Hero */}
      <section
        style={{
          padding: '6rem 1.5rem 3rem',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'radial-gradient(ellipse at center top, rgba(59,130,246,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '50rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            The Process
          </div>
          <h1
            style={{
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              marginBottom: '1.5rem',
              color: '#fff',
            }}
          >
            From Idea to{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Thriving Business
            </span>
          </h1>
          <p
            style={{
              color: 'rgba(255,255,255,0.65)',
              fontSize: '1.125rem',
              lineHeight: 1.7,
            }}
          >
            BridgeSTEM guides you through every step—from initial concept to a scaled, revenue-generating business. Here&apos;s exactly how it works.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section style={{ padding: '3rem 1.5rem 6rem' }}>
        <div style={{ maxWidth: '48rem', margin: '0 auto' }}>
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              number={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              isLast={index === steps.length - 1}
              align={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'rgba(0,0,0,0.3)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2
            style={{
              fontSize: '2.25rem',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '1rem',
            }}
          >
            Ready to Start Your Journey?
          </h2>
          <p
            style={{
              color: 'rgba(255,255,255,0.6)',
              fontSize: '1.05rem',
              marginBottom: '2rem',
              lineHeight: 1.7,
            }}
          >
            Join BridgeSTEM today and take the first step from concept to company.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/for-innovators" className="btn-primary" style={{ textDecoration: 'none' }}>
              I Have an Idea <ArrowRight size={16} />
            </Link>
            <Link href="/for-contributors" className="btn-secondary" style={{ textDecoration: 'none' }}>
              I Want to Contribute
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
