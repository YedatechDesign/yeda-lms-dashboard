import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';
import { attendanceOverTime } from '../data';

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload?.length) {
    return (
      <div style={{
        background: 'var(--white)',
        border: '1px solid var(--border)',
        borderRadius: 10,
        padding: '10px 14px',
        boxShadow: 'var(--shadow-blue)',
        fontSize: 13,
        direction: 'rtl',
      }}>
        <div style={{ fontWeight: 600, color: 'var(--primary-dark)', marginBottom: 6 }}>{label}</div>
        {payload.map((p: any) => (
          <div key={p.name} style={{ display: 'flex', alignItems: 'center', gap: 6, color: p.color, marginBottom: 2 }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: p.color, display: 'inline-block' }} />
            <span style={{ color: 'var(--text)' }}>{p.name}:</span>
            <strong>{p.value}%</strong>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export default function AttendanceChart() {
  return (
    <div style={card}>
      <div style={cardHeader}>
        <div>
          <div style={cardTitle}>מגמת נוכחות לאורך זמן</div>
          <div style={cardSub}>8 חודשים אחרונים · אחוזים</div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['חודשי', 'רבעוני', 'שנתי'].map((t, i) => (
            <button key={t} style={{
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              border: i === 0 ? 'none' : '1px solid var(--border)',
              background: i === 0 ? 'var(--primary)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--text-secondary)',
              fontSize: 12,
              fontFamily: 'Rubik',
              cursor: 'pointer',
              fontWeight: i === 0 ? 600 : 400,
            }}>{t}</button>
          ))}
        </div>
      </div>
      <ResponsiveContainer width="100%" height={240}>
        <AreaChart data={attendanceOverTime} margin={{ top: 8, right: 4, left: -20, bottom: 0 }}>
          <defs>
            <linearGradient id="presentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#0A59EB" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#0A59EB" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="absentGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#CA5369" stopOpacity={0.15} />
              <stop offset="95%" stopColor="#CA5369" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
          <XAxis dataKey="month" tick={{ fontSize: 12, fill: 'var(--text-secondary)', fontFamily: 'Rubik' }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: 'var(--text-secondary)', fontFamily: 'Rubik' }} axisLine={false} tickLine={false} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Legend
            iconType="circle"
            iconSize={8}
            wrapperStyle={{ fontSize: 12, fontFamily: 'Rubik', paddingTop: 8 }}
            formatter={(v) => <span style={{ color: 'var(--text)' }}>{v}</span>}
          />
          <Area type="monotone" dataKey="present" name="נוכחים" stroke="#0A59EB" strokeWidth={2.5} fill="url(#presentGrad)" dot={{ r: 3, fill: '#0A59EB' }} activeDot={{ r: 5 }} />
          <Area type="monotone" dataKey="absent" name="נעדרים" stroke="#CA5369" strokeWidth={2} fill="url(#absentGrad)" dot={false} />
          <Area type="monotone" dataKey="late" name="איחורים" stroke="#F08700" strokeWidth={2} fill="none" strokeDasharray="4 3" dot={false} />
        </AreaChart>
      </ResponsiveContainer>
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
const cardHeader: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'flex-start',
  marginBottom: 20,
};
const cardTitle: React.CSSProperties = {
  fontSize: 15,
  fontWeight: 600,
  color: 'var(--primary-dark)',
};
const cardSub: React.CSSProperties = {
  fontSize: 12,
  color: 'var(--text-secondary)',
  marginTop: 2,
};
