import { studentData } from '../data';

const statusStyle: Record<string, { bg: string; color: string; dot: string }> = {
  נוכח: { bg: 'rgba(22,163,74,0.1)', color: '#16a34a', dot: '#16a34a' },
  חלקי: { bg: 'var(--accent-light)', color: '#b45309', dot: 'var(--accent)' },
  נעדר: { bg: 'rgba(220,38,38,0.08)', color: '#dc2626', dot: '#dc2626' },
};

export default function StudentTable() {
  return (
    <div style={{
      background: 'var(--white)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-card)',
      border: '1px solid var(--border)',
      overflow: 'hidden',
    }}>
      <div style={{ padding: '20px 24px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary-dark)' }}>סטטוס לומדים</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>
            {studentData.filter(s => s.status === 'נוכח').length} נוכחים ·{' '}
            {studentData.filter(s => s.status === 'חלקי').length} חלקי ·{' '}
            {studentData.filter(s => s.status === 'נעדר').length} נעדרים
          </div>
        </div>
        <div style={{ display: 'flex', gap: 6 }}>
          {['הכל', 'נוכחים', 'נעדרים'].map((f, i) => (
            <button key={f} style={{
              padding: '5px 12px',
              borderRadius: 'var(--radius-pill)',
              border: i === 0 ? 'none' : '1px solid var(--border)',
              background: i === 0 ? 'var(--primary)' : 'transparent',
              color: i === 0 ? '#fff' : 'var(--text-secondary)',
              fontSize: 12,
              fontFamily: 'Rubik',
              cursor: 'pointer',
            }}>{f}</button>
          ))}
        </div>
      </div>
      <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
        <thead>
          <tr style={{ background: 'var(--primary-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
            <th style={th}>שם הלומד</th>
            <th style={th}>מחלקה</th>
            <th style={{ ...th, textAlign: 'center' }}>שיעורים</th>
            <th style={th}>נוכחות</th>
            <th style={{ ...th, textAlign: 'center' }}>ציון</th>
            <th style={{ ...th, textAlign: 'center' }}>סטטוס</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((s, i) => {
            const pct = Math.round((s.attended / s.total) * 100);
            const st = statusStyle[s.status];
            return (
              <tr key={s.id} style={{
                background: i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)',
                borderBottom: '1px solid var(--border)',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)')}>
                <td style={td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{
                      width: 30,
                      height: 30,
                      borderRadius: '50%',
                      background: 'var(--primary-light)',
                      color: 'var(--primary)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: 12,
                      fontWeight: 600,
                      flexShrink: 0,
                    }}>{s.name.charAt(0)}</div>
                    <span style={{ fontWeight: 500, color: 'var(--primary-dark)' }}>{s.name}</span>
                  </div>
                </td>
                <td style={{ ...td, color: 'var(--text-secondary)' }}>{s.department}</td>
                <td style={{ ...td, textAlign: 'center' }}>
                  <span style={{ color: 'var(--primary)', fontWeight: 600 }}>{s.attended}</span>
                  <span style={{ color: 'var(--text-secondary)' }}>/{s.total}</span>
                </td>
                <td style={td}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <div style={{ flex: 1, height: 5, background: 'var(--primary-light)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{
                        height: '100%',
                        width: `${pct}%`,
                        background: pct >= 80 ? '#0A59EB' : pct >= 60 ? '#F08700' : '#CA5369',
                        borderRadius: 3,
                      }} />
                    </div>
                    <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--text)', width: 32, textAlign: 'left' }}>{pct}%</span>
                  </div>
                </td>
                <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: s.score >= 80 ? '#16a34a' : s.score >= 60 ? 'var(--accent)' : '#dc2626' }}>
                  {s.score}
                </td>
                <td style={{ ...td, textAlign: 'center' }}>
                  <span style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 5,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: 11,
                    fontWeight: 600,
                    background: st.bg,
                    color: st.color,
                  }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: st.dot, display: 'inline-block' }} />
                    {s.status}
                  </span>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: '10px 16px',
  textAlign: 'right',
  fontWeight: 500,
  fontSize: 12,
  color: 'var(--text-secondary)',
};
const td: React.CSSProperties = {
  padding: '11px 16px',
  color: 'var(--text)',
};
