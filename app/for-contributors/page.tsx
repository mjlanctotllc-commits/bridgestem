"use client";

'use client';

import Link from 'next/link';
import {
  Cpu,
  Megaphone,
  FlaskConical,
  Factory,
  Calculator,
  Scale,
  Code2,
  Laptop,
  TrendingUp,
  PieChart,
  Briefcase,
  Users,
  Network,
  ArrowRight,
  Search,
} from 'lucide-react';

const contributorTypes = [
  { icon: <Cpu size={24} />, label: 'Engineers' },
  { icon: <Megaphone size={24} />, label: 'Marketers' },
  { icon: <FlaskConical size={24} />, label: 'Scientists' },
  { icon: <Factory size={24} />, label: 'Manufacturers' },
  { icon: <Calculator size={24} />, label: 'Accountants' },
  { icon: <Scale size={24} />, label: 'Legal Professionals' },
  { icon: <Code2 size={24} />, label: 'Developers' },
  { icon: <Laptop size={24} />, label: 'Freelancers' },
];

const benefits = [
  {
    icon: <TrendingUp size={20} />,
    title: 'Earn Residual Income',
    description: 'Get paid from every sale, not just once. Your contribution generates ongoing revenue long after the work is done.',
  },
  {
    icon: <PieChart size={20} />,
    title: 'Revenue Share Ownership',
    description: 'Your contribution earns you real equity in the product. Ownership that compounds as the product grows.',
  },
  {
    icon: <Briefcase size={20} />,
    title: 'Build Your Portfolio',
    description: 'Stack startup wins across industries. Demonstrate impact with real revenue numbers and successful launches.',
  },
  {
    icon: <Cpu size={20} />,
    title: 'Join Innovation Teams',
    description: 'Work on cutting-edge ideas with founders who need your expertise. Be part of something bigger than a job.',
  },
  {
    icon: <Network size={20} />,
    title: 'Network with Founders',
    description: 'Build relationships that open doors to the next opportunity. Your BridgeSTEM network grows with you.',
  },
];

const profiles = [
  {
    name: 'Alex R.',
    role: 'Full Stack Developer',
    activeProjects: 3,
    earned: '$4,200',
    skills: ['React', 'Node.js', 'AWS'],
    avatar: 'AR',
  },
  {
    name: 'Jennifer L.',
    role: 'Marketing Strategist',
    activeProjects: 2,
    earned: '$2,800',
    skills: ['Growth', 'Branding', 'SEO'],
    avatar: 'JL',
  },
  {
    name: 'David C.',
    role: 'Mechanical Engineer',
    activeProjects: 4,
    earned: '$6,100',
    skills: ['CAD', 'Manufacturing', 'R&D'],
    avatar: 'DC',
  },
];

const projects = [
  {
    title: 'AI-Powered Pest Detection System',
    category: 'AI/Robotics',
    roles: ['ML Engineer', 'Frontend Dev'],
  },
  {
    title: 'Portable Clean Energy Generator',
    category: 'Clean Energy',
    roles: ['Electrical Engineer', 'Marketer'],
  },
  {
    title: 'BioTech Diagnostic Kit',
    category: 'Medical Tech',
    roles: ['Scientist', 'Manufacturer', 'Sales'],
  },
];

const categories = ['All', 'Engineering', 'Marketing', 'Science', 'Development', 'Finance', 'Legal'];

export default function ForContributorsPage() {
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
            background: 'radial-gradient(ellipse at 80% 50%, rgba(6,182,212,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          <div>
            <div
              style={{
                display: 'inline-block',
                background: 'rgba(6,182,212,0.15)',
                border: '1px solid rgba(6,182,212,0.3)',
                borderRadius: '9999px',
                padding: '0.375rem 1rem',
                color: '#22d3ee',
                fontSize: '0.875rem',
                fontWeight: 500,
                marginBottom: '1.5rem',
              }}
            >
              For Contributors
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
              Your Skills Are Worth{' '}
              <span
                style={{
                  background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                More Than an Hourly Rate
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
              Earn ownership stakes and residual income by joining startup teams. Your expertise deserves real equity—not just a paycheck.
            </p>
            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <Link href="/marketplace" className="btn-primary" style={{ textDecoration: 'none' }}>
                Find Projects <ArrowRight size={16} />
              </Link>
              <Link href="/how-it-works" className="btn-secondary" style={{ textDecoration: 'none' }}>
                How It Works
              </Link>
            </div>
          </div>

          {/* Profile preview */}
          <div
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '1.5rem',
              padding: '2rem',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                marginBottom: '1.5rem',
                paddingBottom: '1.5rem',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
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
                  fontWeight: 700,
                }}
              >
                YN
              </div>
              <div>
                <div style={{ color: '#fff', fontWeight: 600 }}>Your Name</div>
                <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>Your Specialization</div>
              </div>
            </div>
            {[
              { label: 'Active Projects', value: '—' },
              { label: 'Total Earned', value: '$0' },
              { label: 'Revenue Streams', value: '0' },
            ].map(({ label, value }) => (
              <div
                key={label}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.875rem' }}>{label}</span>
                <span style={{ color: '#60a5fa', fontWeight: 600 }}>{value}</span>
              </div>
            ))}
            <div style={{ marginTop: '1.5rem' }}>
              <Link href="/dashboard" className="btn-primary" style={{ textDecoration: 'none', width: '100%', justifyContent: 'center' }}>
                Create Profile <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Contributor Types */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              We Need Your Expertise
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>
              BridgeSTEM connects all types of professionals with startup opportunities.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '1rem' }}>
            {contributorTypes.map((type) => (
              <div
                key={type.label}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem 1rem',
                  textAlign: 'center',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,0.5)';
                  e.currentTarget.style.background = 'rgba(6,182,212,0.08)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div style={{ color: '#22d3ee', display: 'flex', justifyContent: 'center', marginBottom: '0.75rem' }}>
                  {type.icon}
                </div>
                <div style={{ color: '#fff', fontWeight: 500, fontSize: '0.875rem' }}>{type.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Why Contributors Choose BridgeSTEM
            </h2>
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
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <div
                  style={{
                    width: '2.75rem',
                    height: '2.75rem',
                    background: 'linear-gradient(135deg, rgba(6,182,212,0.3), rgba(59,130,246,0.3))',
                    borderRadius: '0.75rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#22d3ee',
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

      {/* Contributor Profiles */}
      <section style={{ padding: '5rem 1.5rem', background: 'rgba(0,0,0,0.2)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Top Contributors on BridgeSTEM
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {profiles.map((p) => (
              <div
                key={p.name}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.75rem',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(6,182,212,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1.25rem' }}>
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
                      fontSize: '0.875rem',
                    }}
                  >
                    {p.avatar}
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: 600 }}>{p.name}</div>
                    <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem' }}>{p.role}</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1rem' }}>
                  <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.75rem' }}>
                    <div style={{ color: '#60a5fa', fontWeight: 700, fontSize: '1.125rem' }}>{p.activeProjects}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>Active Projects</div>
                  </div>
                  <div style={{ textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '0.5rem', padding: '0.75rem' }}>
                    <div style={{ color: '#22d3ee', fontWeight: 700, fontSize: '1.125rem' }}>{p.earned}</div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.7rem' }}>Total Earned</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {p.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        padding: '0.2rem 0.6rem',
                        background: 'rgba(6,182,212,0.15)',
                        border: '1px solid rgba(6,182,212,0.25)',
                        borderRadius: '0.375rem',
                        color: '#22d3ee',
                        fontSize: '0.75rem',
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role Matching / Projects */}
      <section style={{ padding: '5rem 1.5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
              Open Roles Right Now
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.6)' }}>Find projects that match your skills and interests.</p>
          </div>

          {/* Search + Filters */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                display: 'flex',
                gap: '0.75rem',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.75rem',
                padding: '0.75rem 1rem',
                marginBottom: '1rem',
                alignItems: 'center',
              }}
            >
              <Search size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
              <input
                type="text"
                placeholder="Search by skill, industry, or role..."
                style={{
                  background: 'none',
                  border: 'none',
                  outline: 'none',
                  color: '#fff',
                  flex: 1,
                  fontSize: '0.9rem',
                }}
              />
            </div>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  style={{
                    padding: '0.375rem 0.875rem',
                    borderRadius: '9999px',
                    background: cat === 'All' ? 'linear-gradient(to right, #3B82F6, #06B6D4)' : 'rgba(255,255,255,0.05)',
                    border: `1px solid ${cat === 'All' ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                    color: '#fff',
                    fontSize: '0.8rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Project listings */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {projects.map((p) => (
              <div
                key={p.title}
                style={{
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderRadius: '1rem',
                  padding: '1.5rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '1rem',
                  flexWrap: 'wrap',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span
                      style={{
                        padding: '0.2rem 0.625rem',
                        background: 'rgba(59,130,246,0.2)',
                        border: '1px solid rgba(59,130,246,0.3)',
                        borderRadius: '9999px',
                        color: '#60a5fa',
                        fontSize: '0.75rem',
                        fontWeight: 500,
                      }}
                    >
                      {p.category}
                    </span>
                    <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', margin: 0 }}>{p.title}</h3>
                  </div>
                  <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                    {p.roles.map((role) => (
                      <span
                        key={role}
                        style={{
                          padding: '0.2rem 0.5rem',
                          background: 'rgba(6,182,212,0.15)',
                          border: '1px solid rgba(6,182,212,0.25)',
                          borderRadius: '0.375rem',
                          color: '#22d3ee',
                          fontSize: '0.75rem',
                        }}
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <button
                  style={{
                    background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '0.5rem',
                    padding: '0.625rem 1.25rem',
                    fontWeight: 600,
                    fontSize: '0.875rem',
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                  }}
                >
                  Apply to Join
                </button>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link href="/marketplace" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Browse All Projects <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '5rem 1.5rem',
          background: 'rgba(6,182,212,0.05)',
          borderTop: '1px solid rgba(6,182,212,0.1)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2.25rem', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Ready to Earn Real Ownership?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', marginBottom: '2rem', lineHeight: 1.7 }}>
            Join BridgeSTEM and start building your portfolio of revenue-generating products today.
          </p>
          <Link href="/dashboard" className="btn-primary" style={{ textDecoration: 'none' }}>
            Join as a Contributor <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
