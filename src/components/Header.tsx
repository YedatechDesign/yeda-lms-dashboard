import { Calendar, Download, Filter, Bell } from 'lucide-react';

export default function Header() {
  return (
    <header style={{
      background: 'var(--primary-dark)',
      color: '#fff',
      padding: '0 32px',
      height: 64,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'sticky',
      top: 0,
      zIndex: 100,
      boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
        <div style={{
          background: 'var(--primary)',
          borderRadius: 8,
          width: 36,
          height: 36,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: 16,
          letterSpacing: '-0.5px',
        }}>י</div>
        <div>
          <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: 0.2 }}>Yeda LMS</div>
          <div style={{ fontSize: 11, color: 'rgba(255,255,255,0.55)', marginTop: 1 }}>מנהל הדרכה</div>
        </div>
      </div>

      <div style={{ fontWeight: 600, fontSize: 17, letterSpacing: 0.1 }}>
        דו"ח נוכחות ומעורבות
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button style={headerBtn}>
          <Calendar size={16} />
          <span style={{ fontSize: 13 }}>אפריל 2026</span>
        </button>
        <button style={headerBtn}>
          <Filter size={16} />
          <span style={{ fontSize: 13 }}>סינון</span>
        </button>
        <button style={{
          ...headerBtn,
          background: 'var(--accent)',
          color: '#fff',
          border: 'none',
          fontWeight: 600,
        }}>
          <Download size={16} />
          <span style={{ fontSize: 13 }}>ייצוא</span>
        </button>
        <div style={{
          width: 36,
          height: 36,
          borderRadius: '50%',
          background: 'rgba(255,255,255,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          position: 'relative',
        }}>
          <Bell size={16} />
          <span style={{
            position: 'absolute',
            top: 7,
            right: 7,
            width: 8,
            height: 8,
            background: 'var(--accent)',
            borderRadius: '50%',
            border: '1.5px solid var(--primary-dark)',
          }} />
        </div>
      </div>
    </header>
  );
}

const headerBtn: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: 6,
  padding: '7px 14px',
  borderRadius: 'var(--radius-pill)',
  border: '1px solid rgba(255,255,255,0.15)',
  background: 'rgba(255,255,255,0.08)',
  color: '#fff',
  cursor: 'pointer',
  fontFamily: 'Rubik, sans-serif',
  transition: 'background 0.15s',
};
