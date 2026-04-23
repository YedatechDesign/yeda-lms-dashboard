import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, Tooltip } from 'recharts';
import { engagementData, departmentData } from '../data';

export default function EngagementPanel() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={card}>
        <div style={cardTitle}>מדדי מעורבות</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 16 }}>אחוז השתתפות לפי סוג פעילות</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {engagementData.map((item) => (
            <div key={item.name}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5 }}>
                <span style={{ fontSize: 12, color: 'var(--text)', fontWeight: 500 }}>{item.name}</span>
                <span style={{ fontSize: 12, fontWeight: 600, color: item.color }}>{item.value}%</span>
              </div>
              <div style={{
                height: 6,
                background: 'var(--primary-light)',
                borderRadius: 3,
                overflow: 'hidden',
              }}>
                <div style={{
                  height: '100%',
                  width: `${item.value}%`,
                  background: item.color,
                  borderRadius: 3,
                  transition: 'width 0.8s ease',
                }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={card}>
        <div style={cardTitle}>מעורבות לפי מחלקה</div>
        <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginBottom: 8 }}>נוכחות vs. מעורבות</div>
        <ResponsiveContainer width="100%" height={200}>
          <RadarChart data={departmentData} margin={{ top: 4, right: 20, bottom: 4, left: 20 }}>
            <PolarGrid stroke="var(--border)" />
            <PolarAngleAxis dataKey="name" tick={{ fontSize: 11, fill: 'var(--text-secondary)', fontFamily: 'Rubik' }} />
            <Radar name="נוכחות" dataKey="attendance" stroke="#0A59EB" fill="#0A59EB" fillOpacity={0.12} strokeWidth={2} />
            <Radar name="מעורבות" dataKey="engagement" stroke="#F08700" fill="#F08700" fillOpacity={0.1} strokeWidth={2} />
            <Tooltip
              contentStyle={{ fontFamily: 'Rubik', fontSize: 12, borderRadius: 8, border: '1px solid var(--border)' }}
              formatter={(v: any, n: any) => [`${v}%`, n]}
            />
          </RadarChart>
        </ResponsiveContainer>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', marginTop: 4 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#0A59EB', display: 'inline-block' }} />
            נוכחות
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, color: 'var(--text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#F08700', display: 'inline-block' }} />
            מעורבות
          </div>
        </div>
      </div>
    </div>
  );
}

const card: React.CSSProperties = {
  background: 'var(--white)',
  borderRadius: 'var(--radius-lg)',
  padding: '20px 24px',
  boxShadow: 'var(--shadow-card)',
  border: '1px solid var(--border)',
};
const cardTitle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--primary-dark)',
  marginBottom: 2,
};
