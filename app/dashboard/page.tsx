"use client";

import {
  Home,
  FolderOpen,
  Users,
  FileText,
  BarChart2,
  DollarSign,
  Flag,
  CheckSquare,
  MessageSquare,
  Bell,
  UserPlus,
  Settings,
  TrendingUp,
  TrendingDown,
  ChevronRight,
  Check,
  X,
} from 'lucide-react';

const navItems = [
  { icon: <Home size={18} />, label: 'Overview', active: true },
  { icon: <FolderOpen size={18} />, label: 'Projects' },
  { icon: <Users size={18} />, label: 'Team' },
  { icon: <FileText size={18} />, label: 'Contracts' },
  { icon: <BarChart2 size={18} />, label: 'Sales Analytics' },
  { icon: <DollarSign size={18} />, label: 'Revenue Tracking' },
  { icon: <Flag size={18} />, label: 'Milestones' },
  { icon: <CheckSquare size={18} />, label: 'Tasks' },
  { icon: <MessageSquare size={18} />, label: 'Messages', badge: 3 },
  { icon: <Bell size={18} />, label: 'Notifications', badge: 5 },
  { icon: <UserPlus size={18} />, label: 'Contributor Requests' },
  { icon: <Settings size={18} />, label: 'Settings' },
];

const stats = [
  {
    label: 'Active Projects',
    value: '3',
    change: '+1 this month',
    trend: 'up',
    color: '#3B82F6',
  },
  {
    label: 'Total Revenue',
    value: '$24,840',
    change: '+12.4%',
    trend: 'up',
    color: '#06B6D4',
  },
  {
    label: 'Team Members',
    value: '11',
    change: '+2 this month',
    trend: 'up',
    color: '#8B5CF6',
  },
  {
    label: 'Pending Milestones',
    value: '4',
    change: '2 due this week',
    trend: 'neutral',
    color: '#F59E0B',
  },
];

const projects = [
  {
    name: 'AI Pest Detection',
    status: 'In Development',
    statusColor: '#3B82F6',
    team: '4 members',
    revenue: '$8,200',
    progress: 65,
  },
  {
    name: 'Clean Energy Kit',
    status: 'Prototype',
    statusColor: '#F59E0B',
    team: '3 members',
    revenue: '$2,100',
    progress: 30,
  },
  {
    name: 'SaaS Analytics',
    status: 'Launched',
    statusColor: '#10B981',
    team: '6 members',
    revenue: '$14,540',
    progress: 100,
  },
];

const contributorRequests = [
  { name: 'Jordan B.', role: 'Backend Developer', project: 'AI Pest Detection', avatar: 'JB' },
  { name: 'Maya S.', role: 'UX Designer', project: 'SaaS Analytics', avatar: 'MS' },
  { name: 'Carlos V.', role: 'Data Scientist', project: 'Clean Energy Kit', avatar: 'CV' },
];

const activity = [
  { text: 'Marcus T. completed milestone: API Integration', time: '2h ago', color: '#10B981' },
  { text: 'New contributor request from Jordan B.', time: '4h ago', color: '#3B82F6' },
  { text: 'Revenue payout processed: $1,240 distributed', time: '1d ago', color: '#06B6D4' },
  { text: 'Clean Energy Kit prototype approved', time: '2d ago', color: '#8B5CF6' },
  { text: 'New contract signed: SaaS Analytics expansion', time: '3d ago', color: '#F59E0B' },
];

// Simple SVG revenue chart
function RevenueChart() {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
  const values = [8200, 11400, 14200, 18600, 21000, 24840];
  const max = Math.max(...values);
  const w = 500;
  const h = 120;
  const padding = 30;

  const points = values.map((v, i) => {
    const x = padding + (i / (values.length - 1)) * (w - padding * 2);
    const y = h - padding - ((v / max) * (h - padding * 2));
    return `${x},${y}`;
  });

  const areaPoints = [
    `${padding},${h - padding}`,
    ...points.map((p) => p),
    `${w - padding},${h - padding}`,
  ].join(' ');

  return (
    <svg viewBox={`0 0 ${w} ${h}`} style={{ width: '100%', height: '100%' }}>
      <defs>
        <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      {/* Area */}
      <polygon points={areaPoints} fill="url(#chartGrad)" />
      {/* Line */}
      <polyline
        points={points.join(' ')}
        fill="none"
        stroke="url(#lineGrad)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="100%" stopColor="#06B6D4" />
        </linearGradient>
      </defs>
      {/* Data points */}
      {points.map((p, i) => {
        const [x, y] = p.split(',').map(Number);
        return (
          <circle key={i} cx={x} cy={y} r="4" fill="#3B82F6" stroke="#0A0F1E" strokeWidth="2" />
        );
      })}
      {/* Month labels */}
      {months.map((m, i) => {
        const x = padding + (i / (months.length - 1)) * (w - padding * 2);
        return (
          <text key={m} x={x} y={h - 5} textAnchor="middle" fontSize="11" fill="rgba(255,255,255,0.4)">
            {m}
          </text>
        );
      })}
    </svg>
  );
}

export default function DashboardPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#0A0F1E' }}>
      {/* Sidebar */}
      <aside
        style={{
          width: '240px',
          flexShrink: 0,
          background: 'rgba(0,0,0,0.4)',
          borderRight: '1px solid rgba(255,255,255,0.08)',
          padding: '1.5rem 0',
          position: 'sticky',
          top: '4rem',
          height: 'calc(100vh - 4rem)',
          overflowY: 'auto',
        }}
      >
        <div style={{ padding: '0 1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'rgba(255,255,255,0.3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
            Workspace
          </div>
        </div>
        <nav style={{ padding: '0.75rem 0' }}>
          {navItems.map((item) => (
            <button
              key={item.label}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                width: '100%',
                padding: '0.625rem 1.25rem',
                background: item.active ? 'rgba(59,130,246,0.15)' : 'none',
                borderLeft: item.active ? '2px solid #3B82F6' : '2px solid transparent',
                border: 'none',
                color: item.active ? '#fff' : 'rgba(255,255,255,0.5)',
                cursor: 'pointer',
                textAlign: 'left',
                fontSize: '0.875rem',
                fontWeight: item.active ? 600 : 400,
                transition: 'all 0.15s',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.8)';
                  e.currentTarget.style.background = 'rgba(255,255,255,0.03)';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.color = 'rgba(255,255,255,0.5)';
                  e.currentTarget.style.background = 'none';
                }
              }}
            >
              <span style={{ color: item.active ? '#60a5fa' : 'inherit' }}>{item.icon}</span>
              {item.label}
              {item.badge && (
                <span
                  style={{
                    marginLeft: 'auto',
                    background: '#3B82F6',
                    color: '#fff',
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    padding: '0.1rem 0.4rem',
                    borderRadius: '9999px',
                    minWidth: '1.25rem',
                    textAlign: 'center',
                  }}
                >
                  {item.badge}
                </span>
              )}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <div style={{ flex: 1, padding: '2rem', overflowX: 'hidden' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <h1 style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>
              Welcome back, Michael 👋
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.875rem' }}>{today}</p>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
            <button
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.5rem',
                padding: '0.5rem',
                color: 'rgba(255,255,255,0.6)',
                cursor: 'pointer',
                position: 'relative',
              }}
            >
              <Bell size={18} />
              <span
                style={{
                  position: 'absolute',
                  top: '-4px',
                  right: '-4px',
                  width: '14px',
                  height: '14px',
                  background: '#EF4444',
                  borderRadius: '50%',
                  fontSize: '0.6rem',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 700,
                }}
              >
                5
              </span>
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {stats.map((stat) => (
            <div
              key={stat.label}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.25rem',
              }}
            >
              <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.8rem', marginBottom: '0.5rem' }}>{stat.label}</div>
              <div style={{ color: '#fff', fontSize: '1.75rem', fontWeight: 700, marginBottom: '0.25rem' }}>{stat.value}</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                {stat.trend === 'up' ? (
                  <TrendingUp size={12} style={{ color: '#10B981' }} />
                ) : stat.trend === 'down' ? (
                  <TrendingDown size={12} style={{ color: '#EF4444' }} />
                ) : null}
                <span style={{ color: stat.trend === 'up' ? '#10B981' : stat.trend === 'down' ? '#EF4444' : '#F59E0B', fontSize: '0.75rem' }}>
                  {stat.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '1.5rem' }}>
          {/* Left column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Revenue Chart */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <div>
                  <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '0.2rem' }}>Revenue Growth</h3>
                  <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.8rem' }}>6-month trend</p>
                </div>
                <div
                  style={{
                    background: 'rgba(16,185,129,0.15)',
                    border: '1px solid rgba(16,185,129,0.3)',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                    color: '#10B981',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.25rem',
                  }}
                >
                  <TrendingUp size={12} /> +202%
                </div>
              </div>
              <div style={{ height: '120px' }}>
                <RevenueChart />
              </div>
            </div>

            {/* Active Projects Table */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 600 }}>Active Projects</h3>
                <button style={{ background: 'none', border: 'none', color: '#60a5fa', fontSize: '0.8rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                  View All <ChevronRight size={14} />
                </button>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr>
                      {['Project', 'Status', 'Team', 'Revenue', 'Progress'].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: 'left',
                            color: 'rgba(255,255,255,0.4)',
                            fontSize: '0.75rem',
                            fontWeight: 600,
                            textTransform: 'uppercase',
                            letterSpacing: '0.05em',
                            paddingBottom: '0.75rem',
                            borderBottom: '1px solid rgba(255,255,255,0.08)',
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {projects.map((p) => (
                      <tr key={p.name}>
                        <td style={{ padding: '0.875rem 0', color: '#fff', fontWeight: 500, fontSize: '0.9rem' }}>{p.name}</td>
                        <td style={{ padding: '0.875rem 0.5rem' }}>
                          <span
                            style={{
                              padding: '0.2rem 0.6rem',
                              borderRadius: '9999px',
                              fontSize: '0.75rem',
                              background: `${p.statusColor}20`,
                              color: p.statusColor,
                              border: `1px solid ${p.statusColor}40`,
                            }}
                          >
                            {p.status}
                          </span>
                        </td>
                        <td style={{ padding: '0.875rem 0.5rem', color: 'rgba(255,255,255,0.6)', fontSize: '0.875rem' }}>{p.team}</td>
                        <td style={{ padding: '0.875rem 0.5rem', color: '#10B981', fontWeight: 600, fontSize: '0.875rem' }}>{p.revenue}</td>
                        <td style={{ padding: '0.875rem 0', minWidth: '100px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <div
                              style={{
                                flex: 1,
                                height: '6px',
                                background: 'rgba(255,255,255,0.1)',
                                borderRadius: '9999px',
                                overflow: 'hidden',
                              }}
                            >
                              <div
                                style={{
                                  height: '100%',
                                  width: `${p.progress}%`,
                                  background: 'linear-gradient(to right, #3B82F6, #06B6D4)',
                                  borderRadius: '9999px',
                                }}
                              />
                            </div>
                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', flexShrink: 0 }}>{p.progress}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recent Activity */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '1.25rem' }}>Recent Activity</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {activity.map(({ text, time, color }) => (
                  <div key={text} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div
                      style={{
                        width: '8px',
                        height: '8px',
                        borderRadius: '50%',
                        background: color,
                        marginTop: '0.35rem',
                        flexShrink: 0,
                      }}
                    />
                    <div style={{ flex: 1 }}>
                      <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.875rem', marginBottom: '0.125rem' }}>{text}</p>
                      <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.75rem' }}>{time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {/* Contributor Requests */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                <h3 style={{ color: '#fff', fontWeight: 600 }}>Contributor Requests</h3>
                <span
                  style={{
                    background: '#3B82F620',
                    border: '1px solid #3B82F640',
                    borderRadius: '9999px',
                    padding: '0.15rem 0.5rem',
                    color: '#60a5fa',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                  }}
                >
                  {contributorRequests.length} pending
                </span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {contributorRequests.map((req) => (
                  <div
                    key={req.name}
                    style={{
                      background: 'rgba(255,255,255,0.03)',
                      border: '1px solid rgba(255,255,255,0.06)',
                      borderRadius: '0.75rem',
                      padding: '1rem',
                    }}
                  >
                    <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', marginBottom: '0.875rem' }}>
                      <div
                        style={{
                          width: '2.25rem',
                          height: '2.25rem',
                          borderRadius: '50%',
                          background: 'linear-gradient(135deg, #3B82F6, #06B6D4)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#fff',
                          fontWeight: 700,
                          fontSize: '0.75rem',
                          flexShrink: 0,
                        }}
                      >
                        {req.avatar}
                      </div>
                      <div>
                        <div style={{ color: '#fff', fontWeight: 600, fontSize: '0.875rem' }}>{req.name}</div>
                        <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem' }}>{req.role}</div>
                      </div>
                    </div>
                    <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', marginBottom: '0.875rem' }}>
                      Project: <span style={{ color: '#60a5fa' }}>{req.project}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                      <button
                        style={{
                          flex: 1,
                          background: 'rgba(16,185,129,0.15)',
                          border: '1px solid rgba(16,185,129,0.3)',
                          borderRadius: '0.5rem',
                          color: '#10B981',
                          padding: '0.4rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        <Check size={12} /> Accept
                      </button>
                      <button
                        style={{
                          flex: 1,
                          background: 'rgba(239,68,68,0.1)',
                          border: '1px solid rgba(239,68,68,0.25)',
                          borderRadius: '0.5rem',
                          color: '#EF4444',
                          padding: '0.4rem',
                          fontSize: '0.75rem',
                          fontWeight: 600,
                          cursor: 'pointer',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          gap: '0.25rem',
                        }}
                      >
                        <X size={12} /> Decline
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '1rem',
                padding: '1.5rem',
              }}
            >
              <h3 style={{ color: '#fff', fontWeight: 600, marginBottom: '1.25rem' }}>This Month</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.875rem' }}>
                {[
                  { label: 'Revenue Generated', value: '$4,200', color: '#10B981' },
                  { label: 'Milestones Completed', value: '7', color: '#3B82F6' },
                  { label: 'New Team Members', value: '2', color: '#8B5CF6' },
                  { label: 'Contracts Signed', value: '3', color: '#06B6D4' },
                ].map(({ label, value, color }) => (
                  <div
                    key={label}
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      paddingBottom: '0.875rem',
                      borderBottom: '1px solid rgba(255,255,255,0.05)',
                    }}
                  >
                    <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.8rem' }}>{label}</span>
                    <span style={{ color, fontWeight: 700, fontSize: '0.9rem' }}>{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
