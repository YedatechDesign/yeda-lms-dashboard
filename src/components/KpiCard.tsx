import { Users, Activity, BookOpen, Award, TrendingUp, TrendingDown } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  users: <Users size={20} />,
  activity: <Activity size={20} />,
  book: <BookOpen size={20} />,
  award: <Award size={20} />,
};

interface KpiCardProps {
  label: string;
  value: string;
  trend: string;
  positive: boolean;
  icon: string;
}

export default function KpiCard({ label, value, trend, positive, icon }: KpiCardProps) {
  return (
    <div style={{
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      padding: '20px 24px',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--border)',
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      transition: 'box-shadow 0.2s, transform 0.2s',
      cursor: 'default',
    }}
    onMouseEnter={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-blue)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-2px)';
    }}
    onMouseLeave={e => {
      (e.currentTarget as HTMLDivElement).style.boxShadow = 'var(--shadow-card)';
      (e.currentTarget as HTMLDivElement).style.transform = 'translateY(0)';
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500, marginBottom: 6 }}>{label}</div>
          <div style={{ fontSize: 28, fontWeight: 700, color: 'var(--primary-dark)', letterSpacing: '-0.5px' }}>{value}</div>
        </div>
        <div style={{
          background: 'var(--primary-light)',
          color: 'var(--primary)',
          borderRadius: 10,
          width: 44,
          height: 44,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          {iconMap[icon]}
        </div>
      </div>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        fontSize: 12,
        color: positive ? '#079DED' : '#CA5369',
        fontWeight: 500,
      }}>
        {positive ? <TrendingUp size={13} /> : <TrendingDown size={13} />}
        <span>{trend}</span>
        <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>לעומת החודש הקודם</span>
      </div>
    </div>
  );
}
