import { NavLink, Outlet } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Lightbulb, Download } from 'lucide-react';

const navItems = [
  { to: '/',           label: 'דשבורד',              icon: LayoutDashboard, end: true },
  { to: '/attendance', label: 'נוכחות',               icon: Users },
  { to: '/exams',      label: 'מבחנים ותרגולים',       icon: FileText },
  { to: '/insights',   label: 'אינסייטים',             icon: Lightbulb },
];

export default function Layout() {
  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Top Header */}
      <header style={{
        background: 'var(--primary-dark)',
        color: '#fff',
        padding: '0 28px',
        height: 60,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexShrink: 0,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            background: 'var(--primary)',
            borderRadius: 8,
            width: 32, height: 32,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontWeight: 700, fontSize: 14,
          }}>י</div>
          <div>
            <div style={{ fontWeight: 600, fontSize: 14 }}>Yeda LMS</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)' }}>פורטל ניהול למידה</div>
          </div>
        </div>

        <div style={{ fontWeight: 600, fontSize: 15 }}>
          דו"ח נוכחות ומעורבות
        </div>

        <button style={{
          display: 'flex', alignItems: 'center', gap: 6,
          padding: '7px 16px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--accent)',
          color: '#fff', border: 'none',
          fontFamily: 'Rubik', fontWeight: 600, fontSize: 13,
          cursor: 'pointer',
        }}>
          <Download size={14} />
          ייצוא דו"ח
        </button>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: 220,
          background: 'var(--white)',
          borderLeft: '1px solid var(--border)',
          padding: '20px 12px',
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          flexShrink: 0,
          position: 'sticky',
          top: 60,
          height: 'calc(100vh - 60px)',
          overflowY: 'auto',
        }}>
          <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', padding: '4px 12px 8px', letterSpacing: 1 }}>
            ניווט ראשי
          </div>
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink
              key={to}
              to={to}
              end={end}
              style={({ isActive }) => ({
                display: 'flex',
                alignItems: 'center',
                gap: 10,
                padding: '9px 12px',
                borderRadius: 10,
                fontSize: 13,
                fontWeight: isActive ? 600 : 400,
                color: isActive ? 'var(--primary)' : 'var(--text)',
                background: isActive ? 'var(--primary-light)' : 'transparent',
                textDecoration: 'none',
                transition: 'all 0.15s',
              })}
            >
              {({ isActive }) => (
                <>
                  <Icon size={16} color={isActive ? 'var(--primary)' : 'var(--text-secondary)'} />
                  {label}
                </>
              )}
            </NavLink>
          ))}

          <div style={{ marginTop: 'auto', paddingTop: 20, borderTop: '1px solid var(--border)', fontSize: 11, color: 'var(--text-secondary)', padding: '16px 12px 0' }}>
            <div style={{ fontWeight: 500, marginBottom: 2 }}>תקופת דיווח</div>
            <div>ינואר – אפריל 2026</div>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '24px 28px', overflowX: 'hidden' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
