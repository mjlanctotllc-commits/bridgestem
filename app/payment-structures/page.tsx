"use client";

'use client';

import Link from 'next/link';
import {
  TrendingUp,
  Repeat,
  Target,
  Layers,
  Clock,
  Award,
  CheckCircle,
  Eye,
  BarChart2,
  Flag,
  ArrowRight,
  AlertTriangle,
} from 'lucide-react';

const paymentModels = [
  {
    icon: <TrendingUp size={22} />,
    title: 'Revenue Sharing',
    description: 'Earn a defined percentage of every sale. Ongoing, transparent, automatic. The more the product sells, the more you earn.',
    highlight: 'Most Popular',
  },
  {
    icon: <Repeat size={22} />,
    title: 'Residual Compensation',
    description: 'Lifetime earnings from a product you helped build. Your contribution keeps paying long after the work is done.',
    highlight: null,
  },
  {
    icon: <Target size={22} />,
    title: 'Milestone Payouts',
    description: 'Fixed compensation unlocked at project milestones. Clear goals, clear rewards. No ambiguity.',
    highlight: null,
  },
  {
    icon: <Layers size={22} />,
    title: 'Hybrid Equity Models',
    description: 'Combine revenue share with ownership percentage for a comprehensive compensation package.',
    highlight: null,
  },
  {
    icon: <Clock size={22} />,
    title: 'Deferred Compensation',
    description: 'Agree to payout terms tied to launch and sales targets. Work now, earn when the product succeeds.',
    highlight: null,
  },
  {
    icon: <Award size={22} />,
    title: 'Ownership Percentages',
    description: 'Formalize exact ownership stakes in contributor agreements. Real equity, documented from day one.',
    highlight: null,
  },
];

const governanceItems = [
  {
    icon: <CheckCircle size={18} />,
    title: 'Contributor Replacement System',
    description: 'If a contributor exits, their role and compensation are restructured under defined terms. No gaps, no chaos.',
  },
  {
    icon: <Eye size={18} />,
    title: 'Transparent Tracking',
    description: 'All revenue and payouts visible to every team member. No hidden numbers, no surprises.',
  },
  {
    icon: <BarChart2 size={18} />,
    title: 'Project Governance',
    description: 'Clear decision-making structures defined in contributor agreements. Everyone knows who decides what.',
  },
  {
    icon: <Flag size={18} />,
    title: 'Milestone Enforcement',
    description: 'Automatic milestone tracking with alerts for deliverables. Accountability built into the platform.',
  },
];

const contractSteps = [
  { step: 1, title: 'Define Roles', description: 'Specify each contributor\'s responsibilities and deliverables.' },
  { step: 2, title: 'Set Compensation', description: 'Agree on revenue share percentages or milestone payouts.' },
  { step: 3, title: 'Sign Agreement', description: 'All parties sign the contributor agreement digitally.' },
  { step: 4, title: 'Begin Work', description: 'Work begins with full clarity on expectations and compensation.' },
];

export default function PaymentStructuresPage() {
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
            Payment Structures
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
            Transparent Compensation.{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Real Ownership.
            </span>{' '}
            No Guesswork.
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.7 }}>
            BridgeSTEM offers flexible compensation models designed to align incentives between innovators and contributors. Choose the structure that works best for your project.
          </p>
        </div>
      </section>

      {/* Payment Models */}
      <section style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {paymentModels.map((model) => (
              <div
                key={model.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: `1px solid ${model.highlight ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.1)'}`,
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                  boxShadow: model.highlight ? '0 0 30px rgba(59,130,246,0.1)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.5)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = model.highlight ? 'rgba(59,130,246,0.5)' : 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {model.highlight && (
                  <span
                    style={{
                      position: 'absolute',
                      top: '-0.75rem',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                      color: '#fff',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      padding: '0.2rem 0.75rem',
                      borderRadius: '9999px',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {model.highlight}
                  </span>
                )}
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
                  {model.icon}
                </div>
                <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1.05rem' }}>{model.title}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Flow Diagram */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              How Revenue Flows
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              Every sale generates revenue that automatically flows to all stakeholders.
            </p>
          </div>

          {/* Revenue flow visualization */}
          <div style={{ textAlign: 'center' }}>
            {/* Sale block */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                borderRadius: '1rem',
                padding: '1rem 2rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#fff', fontWeight: 700, fontSize: '1.1rem' }}>💰 Product Sale</span>
            </div>

            {/* Arrow down */}
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '0.5rem' }}>
              <div style={{ width: '2px', height: '2rem', background: 'linear-gradient(to bottom, #3B82F6, #06B6D4)' }} />
            </div>

            {/* Revenue Pool */}
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'rgba(59,130,246,0.15)',
                border: '1px solid rgba(59,130,246,0.3)',
                borderRadius: '1rem',
                padding: '0.75rem 2rem',
                marginBottom: '1.5rem',
              }}
            >
              <span style={{ color: '#60a5fa', fontWeight: 600 }}>Revenue Pool</span>
            </div>

            {/* Distribution arrows */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '3rem', flexWrap: 'wrap' }}>
              {[
                { label: 'Founder', pct: '40%', color: '#3B82F6' },
                { label: 'Contributor 1', pct: '25%', color: '#06B6D4' },
                { label: 'Contributor 2', pct: '20%', color: '#8B5CF6' },
                { label: 'Contributor 3', pct: '15%', color: '#EC4899' },
              ].map(({ label, pct, color }) => (
                <div key={label} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      background: `rgba(${color === '#3B82F6' ? '59,130,246' : color === '#06B6D4' ? '6,182,212' : color === '#8B5CF6' ? '139,92,246' : '236,72,153'},0.2)`,
                      border: `1px solid ${color}40`,
                      borderRadius: '0.75rem',
                      padding: '1rem 1.25rem',
                      marginTop: '1rem',
                    }}
                  >
                    <div style={{ color, fontWeight: 700, fontSize: '1.5rem' }}>{pct}</div>
                    <div style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Accountability & Governance */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Accountability & Governance
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              Built-in systems to ensure fairness, transparency, and project continuity.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {governanceItems.map((item) => (
              <div
                key={item.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  gap: '1rem',
                  alignItems: 'flex-start',
                }}
              >
                <div style={{ color: '#60a5fa', marginTop: '0.125rem', flexShrink: 0 }}>{item.icon}</div>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.4rem', fontSize: '0.95rem' }}>{item.title}</h3>
                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.6 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contract Workflow */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Contract Workflow
            </h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            {contractSteps.map((step, index) => (
              <div key={step.step} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ textAlign: 'center', maxWidth: '140px' }}>
                  <div
                    style={{
                      width: '3rem',
                      height: '3rem',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      fontWeight: 700,
                      margin: '0 auto 0.75rem',
                    }}
                  >
                    {step.step}
                  </div>
                  <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.25rem' }}>{step.title}</div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', lineHeight: 1.5 }}>{step.description}</div>
                </div>
                {index < contractSteps.length - 1 && (
                  <ArrowRight size={20} style={{ color: 'rgba(255,255,255,0.2)', flexShrink: 0 }} />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legal Disclaimer */}
      <section style={{ padding: '3rem 1.5rem 5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div
            style={{
              background: 'rgba(245,158,11,0.08)',
              border: '1px solid rgba(245,158,11,0.3)',
              borderRadius: '1rem',
              padding: '1.75rem',
              display: 'flex',
              gap: '1rem',
              alignItems: 'flex-start',
            }}
          >
            <AlertTriangle size={22} style={{ color: '#f59e0b', flexShrink: 0, marginTop: '0.125rem' }} />
            <div>
              <h3 style={{ color: '#f59e0b', fontWeight: 600, marginBottom: '0.75rem', fontSize: '1rem' }}>
                ⚠️ Legal Disclaimer
              </h3>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem', lineHeight: 1.7 }}>
                BridgeSTEM does not provide legal, financial, or tax advice. All payment structures, contributor agreements, and ownership arrangements described on this platform are templates and concepts only. Users should consult licensed legal and financial professionals before entering any binding agreements. BridgeSTEM is not responsible for the enforceability or validity of any agreements made between users.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
