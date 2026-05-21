'use client';

import { useEffect, useState, useRef } from 'react';

interface MetricCardProps {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

function useCountUp(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted.current) {
          hasStarted.current = true;
          const startTime = Date.now();
          const timer = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * target));
            if (progress >= 1) clearInterval(timer);
          }, 16);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
}

export default function MetricCard({ value, label, prefix = '', suffix = '' }: MetricCardProps) {
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const { count, ref } = useCountUp(numericValue);

  const formatCount = () => {
    if (value.includes('M')) return count.toFixed(1);
    if (value.includes('.')) return count.toFixed(1);
    return count.toLocaleString();
  };

  return (
    <div
      ref={ref}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '1rem',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          fontSize: '2.5rem',
          fontWeight: 700,
          background: 'linear-gradient(to right, #60a5fa, #22d3ee)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: '0.5rem',
        }}
      >
        {prefix}{formatCount()}{suffix}
      </div>
      <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', fontWeight: 500 }}>{label}</p>
    </div>
  );
}
