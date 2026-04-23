import { insightsData, globalStats } from '../data';
import { AlertTriangle, Info, CheckCircle, XCircle, TrendingUp, TrendingDown } from 'lucide-react';

const typeConfig = {
  warning: { bg: 'rgba(240,135,0,0.08)', border: '#F08700', icon: <AlertTriangle size={18} color="#F08700" />, label: 'אזהרה' },
  info:    { bg: 'rgba(10,89,235,0.06)', border: '#0A59EB', icon: <Info size={18} color="#0A59EB" />,           label: 'מידע'  },
  success: { bg: 'rgba(22,163,74,0.08)', border: '#16a34a', icon: <CheckCircle size={18} color="#16a34a" />,    label: 'חיובי' },
  danger:  { bg: 'rgba(220,38,38,0.07)', border: '#dc2626', icon: <XCircle size={18} color="#dc2626" />,        label: 'דורש טיפול' },
};

export default function Insights() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 4 }}>אינסייטים כלליים</h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>תובנות, מדדים והמלצות לשיפור חוויית הלמידה</p>
      </div>

      {/* Metrics summary */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
        <MetricCard label="אחוז נוכחות כללי" value={`${globalStats.attendanceRate}%`} trend="-1.8%" positive={false} />
        <MetricCard label="אחוז צפייה בתכנים" value={`${globalStats.viewingRate}%`} trend="+3.2%" positive />
        <MetricCard label="אחוז הצלחה כללי" value={`${globalStats.passRate}%`} trend="+0.5%" positive />
      </div>

      {/* Insights cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {insightsData.map((insight, i) => {
          const cfg = typeConfig[insight.type as keyof typeof typeConfig];
          return (
            <div key={insight.id} style={{
              background: cfg.bg,
              borderRadius: 'var(--radius-lg)',
              padding: '18px 20px',
              border: `1px solid ${cfg.border}30`,
              borderRight: `4px solid ${cfg.border}`,
              display: 'flex',
              gap: 14,
              alignItems: 'flex-start',
            }}>
              <div style={{ flexShrink: 0, marginTop: 1 }}>{cfg.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
                  <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--primary-dark)' }}>אינסייט #{i + 1} — {insight.title}</span>
                  <span style={{
                    padding: '1px 8px', borderRadius: 20, fontSize: 10, fontWeight: 600,
                    background: cfg.border + '18', color: cfg.border,
                  }}>{cfg.label}</span>
                </div>
                <p style={{ fontSize: 13, color: 'var(--text)', lineHeight: 1.6, margin: 0 }}>{insight.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Action items */}
      <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px 22px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)', marginBottom: 16 }}>המלצות לפעולה מיידית</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {[
            { action: 'שלח תזכורות אוטומטיות ל-4 משתמשים עם נוכחות נמוכה מ-50%', priority: 'גבוה', color: '#dc2626' },
            { action: 'שלח מייל עידוד ל-7 משתמשים שלא צופים בתכנים מוקלטים', priority: 'גבוה', color: '#dc2626' },
            { action: 'בחן מחדש תוכן קורס "ניתוח נתונים" - שיעור הצלחה 52.6%', priority: 'בינוני', color: '#F08700' },
            { action: 'שתף את מתודולוגיית קורס AI כמודל לקורסים אחרים', priority: 'נמוך', color: '#16a34a' },
          ].map(({ action, priority, color }) => (
            <div key={action} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'var(--primary-bg)', borderRadius: 10 }}>
              <span style={{ padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, background: color + '18', color, flexShrink: 0, whiteSpace: 'nowrap' }}>{priority}</span>
              <span style={{ fontSize: 13, color: 'var(--text)' }}>{action}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MetricCard({ label, value, trend, positive }: { label: string; value: string; trend: string; positive: boolean }) {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '16px 20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 6 }}>{label}</div>
      <div style={{ fontSize: 26, fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 4 }}>{value}</div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: positive ? '#16a34a' : '#dc2626', fontWeight: 500 }}>
        {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        {trend} לעומת החודש הקודם
      </div>
    </div>
  );
}
