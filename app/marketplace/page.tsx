"use client";

'use client';

import ProjectCard from '@/components/ProjectCard';
import { Search, ArrowRight } from 'lucide-react';
import Link from 'next/link';

const categories = ['All', 'AI', 'Robotics', 'Aerospace', 'Medical Tech', 'Manufacturing', 'Software', 'Automation', 'Clean Energy', 'Biotech'];

const projects = [
  {
    category: 'AI',
    title: 'Autonomous Inventory Management AI',
    description: 'An intelligent AI system that monitors stock levels, predicts demand, and automates restocking for retail and warehouse operations.',
    roles: ['ML Engineer', 'Product Manager'],
  },
  {
    category: 'Robotics',
    title: 'Home Rehabilitation Robotics',
    description: 'Assistive robotic devices for post-surgery and elderly care home rehabilitation, reducing hospital stay duration.',
    roles: ['Mechanical Engineer', 'Software Developer'],
  },
  {
    category: 'Aerospace',
    title: 'Drone Delivery Network',
    description: 'Urban drone delivery infrastructure for last-mile logistics in dense metro areas with FAA compliance built in.',
    roles: ['Aerospace Engineer', 'Logistics Expert'],
  },
  {
    category: 'Medical Tech',
    title: 'Portable Blood Analysis Device',
    description: 'Handheld point-of-care device for complete blood panel analysis in under 5 minutes for remote and emergency use.',
    roles: ['Biomedical Engineer', 'Marketer'],
  },
  {
    category: 'Manufacturing',
    title: 'Smart Factory Automation',
    description: 'IoT-driven automation platform for small-to-medium manufacturing facilities to increase throughput and reduce waste.',
    roles: ['Industrial Engineer', 'Developer'],
  },
  {
    category: 'Software',
    title: 'B2B Sales Automation Platform',
    description: 'AI-powered outreach, lead scoring, and CRM integration platform for B2B sales teams scaling their pipeline.',
    roles: ['Full Stack Developer', 'Sales Expert'],
  },
  {
    category: 'Clean Energy',
    title: 'Residential Solar Storage',
    description: 'Modular, affordable solar battery storage solution for residential use with smart grid integration and mobile monitoring.',
    roles: ['Electrical Engineer', 'Manufacturer'],
  },
  {
    category: 'Biotech',
    title: 'Microbiome Health Platform',
    description: 'Personalized gut health optimization platform combining at-home microbiome testing with AI-driven dietary recommendations.',
    roles: ['Scientist', 'App Developer'],
  },
  {
    category: 'AI',
    title: 'AI-Powered Legal Document Review',
    description: 'Machine learning system that reviews contracts, flags risks, and suggests revisions for legal teams and SMBs.',
    roles: ['ML Engineer', 'Legal Professional'],
  },
  {
    category: 'Robotics',
    title: 'Agricultural Harvesting Robot',
    description: 'Autonomous harvest robot for small farms that uses computer vision to identify and pick ripe produce without crop damage.',
    roles: ['Robotics Engineer', 'Agronomist'],
  },
  {
    category: 'Aerospace',
    title: 'Satellite Monitoring System',
    description: 'Low-orbit satellite-based environmental monitoring system for climate research and disaster early warning systems.',
    roles: ['Systems Engineer', 'Data Scientist'],
  },
  {
    category: 'Medical Tech',
    title: 'Wearable Cardiac Monitor',
    description: 'FDA-pathway wearable device for continuous cardiac monitoring that alerts patients and physicians to anomalies in real time.',
    roles: ['Biomedical Engineer', 'iOS Developer'],
  },
];

export default function MarketplacePage() {
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
            background: 'radial-gradient(ellipse at center top, rgba(6,182,212,0.1) 0%, transparent 60%)',
            pointerEvents: 'none',
          }}
        />
        <div style={{ maxWidth: '50rem', margin: '0 auto', position: 'relative', zIndex: 1 }}>
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
            Innovation Marketplace
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
            Discover the{' '}
            <span
              style={{
                background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Next Big Thing
            </span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '2.5rem' }}>
            Browse active startup projects, join teams as a contributor, and find the roles that match your expertise. Revenue share awaits.
          </p>

          {/* Search bar */}
          <div
            style={{
              display: 'flex',
              gap: '0.75rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.15)',
              borderRadius: '0.75rem',
              padding: '0.875rem 1.25rem',
              maxWidth: '40rem',
              margin: '0 auto',
              alignItems: 'center',
            }}
          >
            <Search size={18} style={{ color: 'rgba(255,255,255,0.4)' }} />
            <input
              type="text"
              placeholder="Search projects by title, industry, or skill..."
              style={{
                background: 'none',
                border: 'none',
                outline: 'none',
                color: '#fff',
                flex: 1,
                fontSize: '0.95rem',
              }}
            />
            <button
              style={{
                background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                color: '#fff',
                border: 'none',
                borderRadius: '0.5rem',
                padding: '0.5rem 1.25rem',
                fontWeight: 600,
                fontSize: '0.875rem',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section style={{ padding: '0 1.5rem 3rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
            {categories.map((cat, index) => (
              <button
                key={cat}
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  background: index === 0 ? 'linear-gradient(to right, #3B82F6, #06B6D4)' : 'rgba(255,255,255,0.05)',
                  border: `1px solid ${index === 0 ? 'transparent' : 'rgba(255,255,255,0.1)'}`,
                  color: '#fff',
                  fontSize: '0.875rem',
                  fontWeight: index === 0 ? 600 : 400,
                  cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'rgba(59,130,246,0.1)';
                    e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (index !== 0) {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  }
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section style={{ padding: '0 1.5rem 5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>
              Showing <span style={{ color: '#fff', fontWeight: 600 }}>{projects.length}</span> active projects
            </p>
            <select
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
                color: '#fff',
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                cursor: 'pointer',
              }}
            >
              <option value="recent">Most Recent</option>
              <option value="popular">Most Popular</option>
              <option value="payout">Highest Payout</option>
            </select>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {projects.map((project) => (
              <ProjectCard
                key={project.title}
                category={project.category}
                title={project.title}
                description={project.description}
                roles={project.roles}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section
        style={{
          padding: '4rem 1.5rem',
          background: 'linear-gradient(135deg, rgba(59,130,246,0.15), rgba(6,182,212,0.1))',
          borderTop: '1px solid rgba(59,130,246,0.2)',
          borderBottom: '1px solid rgba(59,130,246,0.2)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: 700, color: '#fff', marginBottom: '0.75rem' }}>
            Ready to Become a Contributor?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', marginBottom: '2rem', lineHeight: 1.7 }}>
            Apply to join a project team today and start earning revenue share from your skills and expertise.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/for-contributors" className="btn-primary" style={{ textDecoration: 'none' }}>
              Become a Contributor <ArrowRight size={16} />
            </Link>
            <Link href="/for-innovators" className="btn-secondary" style={{ textDecoration: 'none' }}>
              Submit Your Idea
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
