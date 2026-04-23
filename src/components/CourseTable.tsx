import { useState } from 'react';
import { courseData } from '../data';
import { ChevronUp, ChevronDown } from 'lucide-react';

type SortKey = 'attendance' | 'engagement' | 'avgScore' | 'enrolled';

export default function CourseTable() {
  const [sort, setSort] = useState<SortKey>('attendance');
  const [asc, setAsc] = useState(false);

  const sorted = [...courseData].sort((a, b) =>
    asc ? a[sort] - b[sort] : b[sort] - a[sort]
  );

  const handleSort = (key: SortKey) => {
    if (sort === key) setAsc(!asc);
    else { setSort(key); setAsc(false); }
  };

  const statusColor: Record<string, { bg: string; color: string }> = {
    פעיל: { bg: 'rgba(7, 157, 237, 0.1)', color: '#079DED' },
    הסתיים: { bg: 'var(--primary-light)', color: 'var(--primary)' },
    מושהה: { bg: 'var(--accent-light)', color: 'var(--accent)' },
  };

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
          <div style={{ fontSize: 15, fontWeight: 600, color: 'var(--primary-dark)' }}>פירוט קורסים</div>
          <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{courseData.length} קורסים פעילים</div>
        </div>
        <input
          type="text"
          placeholder="חיפוש קורס..."
          style={{
            padding: '7px 12px',
            borderRadius: 'var(--radius-pill)',
            border: '1px solid var(--border)',
            fontSize: 13,
            fontFamily: 'Rubik',
            color: 'var(--text)',
            outline: 'none',
            background: 'var(--primary-bg)',
            width: 180,
          }}
        />
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
          <thead>
            <tr style={{ background: 'var(--primary-bg)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
              <th style={th}>שם הקורס</th>
              <th style={th}>מדריך</th>
              <SortTh label="נרשמים" k="enrolled" cur={sort} asc={asc} onSort={handleSort} />
              <SortTh label="נוכחות %" k="attendance" cur={sort} asc={asc} onSort={handleSort} />
              <SortTh label="מעורבות %" k="engagement" cur={sort} asc={asc} onSort={handleSort} />
              <SortTh label="ציון ממוצע" k="avgScore" cur={sort} asc={asc} onSort={handleSort} />
              <th style={th}>סטטוס</th>
            </tr>
          </thead>
          <tbody>
            {sorted.map((c, i) => (
              <tr key={c.id} style={{
                background: i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)',
                borderBottom: '1px solid var(--border)',
                transition: 'background 0.15s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = 'var(--primary-light)')}
              onMouseLeave={e => (e.currentTarget.style.background = i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)')}>
                <td style={{ ...td, fontWeight: 500, color: 'var(--primary-dark)' }}>{c.name}</td>
                <td style={{ ...td, color: 'var(--text-secondary)' }}>{c.instructor}</td>
                <td style={{ ...td, textAlign: 'center' }}>{c.enrolled}</td>
                <td style={td}><PercentBar value={c.attendance} color="#0A59EB" /></td>
                <td style={td}><PercentBar value={c.engagement} color="#F08700" /></td>
                <td style={{ ...td, textAlign: 'center', fontWeight: 600, color: c.avgScore >= 80 ? '#079DED' : c.avgScore >= 70 ? 'var(--accent)' : '#CA5369' }}>
                  {c.avgScore}
                </td>
                <td style={td}>
                  <span style={{
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-pill)',
                    fontSize: 11,
                    fontWeight: 600,
                    background: statusColor[c.status]?.bg,
                    color: statusColor[c.status]?.color,
                    whiteSpace: 'nowrap',
                  }}>{c.status}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

function SortTh({ label, k, cur, asc, onSort }: { label: string; k: SortKey; cur: SortKey; asc: boolean; onSort: (k: SortKey) => void }) {
  const active = cur === k;
  return (
    <th style={{ ...th, cursor: 'pointer', color: active ? 'var(--primary)' : 'var(--text-secondary)' }} onClick={() => onSort(k)}>
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 3 }}>
        {label}
        {active ? (asc ? <ChevronUp size={12} /> : <ChevronDown size={12} />) : <ChevronDown size={12} style={{ opacity: 0.3 }} />}
      </span>
    </th>
  );
}

function PercentBar({ value, color }: { value: number; color: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 5, background: 'var(--primary-light)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: 3 }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color, width: 32, textAlign: 'left' }}>{value}%</span>
    </div>
  );
}

const th: React.CSSProperties = {
  padding: '10px 16px',
  textAlign: 'right',
  fontWeight: 500,
  fontSize: 12,
  color: 'var(--text-secondary)',
  whiteSpace: 'nowrap',
};
const td: React.CSSProperties = {
  padding: '12px 16px',
  color: 'var(--text)',
};
