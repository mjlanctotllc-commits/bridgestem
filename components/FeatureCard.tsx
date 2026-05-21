'use client';

import { ReactNode } from 'react';

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.05)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1rem',
        padding: '1.5rem',
        transition: 'all 0.3s ease',
        cursor: 'default',
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(59,130,246,0.5)';
        el.style.boxShadow = '0 0 30px rgba(59,130,246,0.15)';
        el.style.transform = 'scale(1.02)';
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget;
        el.style.borderColor = 'rgba(255,255,255,0.1)';
        el.style.boxShadow = 'none';
        el.style.transform = 'scale(1)';
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
          marginBottom: '1rem',
          color: '#60a5fa',
        }}
      >
        {icon}
      </div>
      <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem', fontSize: '1rem' }}>
        {title}
      </h3>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem', lineHeight: 1.6 }}>
        {description}
      </p>
    </div>
  );
}
