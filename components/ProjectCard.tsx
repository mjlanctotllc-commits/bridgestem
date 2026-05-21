'use client';

interface ProjectCardProps {
  category: string;
  title: string;
  description: string;
  roles: string[];
}

export default function ProjectCard({ category, title, description, roles }: ProjectCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1rem',
        padding: '1.5rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        transition: 'all 0.3s ease',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(59,130,246,0.5)';
        el.style.boxShadow = '0 0 30px rgba(59,130,246,0.15)';
        el.style.transform = 'translateY(-2px)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.boxShadow = 'none';
        el.style.transform = 'translateY(0)';
      }}
    >
      {/* Category badge */}
      <span
        style={{
          display: 'inline-block',
          padding: '0.25rem 0.75rem',
          borderRadius: '9999px',
          fontSize: '0.75rem',
          fontWeight: 600,
          background: 'rgba(59,130,246,0.2)',
          color: '#60a5fa',
          border: '1px solid rgba(59,130,246,0.3)',
          width: 'fit-content',
        }}
      >
        {category}
      </span>

      <h3 style={{ color: '#fff', fontWeight: 600, fontSize: '1rem', margin: 0 }}>{title}</h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6, margin: 0 }}>{description}</p>

      {/* Roles needed */}
      <div>
        <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '0.5rem', fontWeight: 500 }}>
          ROLES NEEDED
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {roles.map((role) => (
            <span
              key={role}
              style={{
                padding: '0.25rem 0.625rem',
                borderRadius: '0.375rem',
                fontSize: '0.75rem',
                background: 'rgba(6,182,212,0.15)',
                color: '#22d3ee',
                border: '1px solid rgba(6,182,212,0.25)',
              }}
            >
              {role}
            </span>
          ))}
        </div>
      </div>

      <button
        style={{
          marginTop: 'auto',
          background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
          color: '#fff',
          border: 'none',
          borderRadius: '0.5rem',
          padding: '0.625rem 1.25rem',
          fontWeight: 600,
          fontSize: '0.875rem',
          cursor: 'pointer',
          transition: 'opacity 0.2s',
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.85')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
      >
        Apply to Join
      </button>
    </div>
  );
}
