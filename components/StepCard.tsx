'use client';

import { ReactNode } from 'react';

interface StepCardProps {
  number: number;
  icon: ReactNode;
  title: string;
  description: string;
  isLast?: boolean;
  align?: 'left' | 'right';
}

export default function StepCard({ number, icon, title, description, isLast, align = 'left' }: StepCardProps) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1.5rem',
        alignItems: 'flex-start',
        flexDirection: align === 'right' ? 'row-reverse' : 'row',
        textAlign: align === 'right' ? 'right' : 'left',
        position: 'relative',
      }}
    >
      {/* Timeline connector */}
      {!isLast && (
        <div
          style={{
            position: 'absolute',
            left: align === 'right' ? 'auto' : '1.25rem',
            right: align === 'right' ? '1.25rem' : 'auto',
            top: '3rem',
            bottom: '-2rem',
            width: '2px',
            background: 'linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(6,182,212,0.1))',
          }}
        />
      )}

      {/* Number + Icon */}
      <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }}>
        <div
          style={{
            width: '2.5rem',
            height: '2.5rem',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 700,
            color: '#fff',
            fontSize: '0.875rem',
            marginBottom: '0.5rem',
          }}
        >
          {number}
        </div>
        <div style={{ color: '#60a5fa', display: 'flex', justifyContent: align === 'right' ? 'flex-end' : 'flex-start' }}>
          {icon}
        </div>
      </div>

      {/* Content */}
      <div
        style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '1rem',
          padding: '1.5rem',
          flex: 1,
          marginBottom: '2rem',
          transition: 'all 0.3s ease',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
          e.currentTarget.style.boxShadow = '0 0 20px rgba(59,130,246,0.1)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
          e.currentTarget.style.boxShadow = 'none';
        }}
      >
        <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.6 }}>{description}</p>
      </div>
    </div>
  );
}
