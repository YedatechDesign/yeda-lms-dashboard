import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { LayoutDashboard, Users, FileText, Lightbulb, Download } from 'lucide-react';

const pageLabels: Record<string, string> = {
  '/': 'דשבורד כללי',
  '/attendance': 'נוכחות',
  '/exams': 'מבחנים ותרגולים',
  '/insights': 'אינסייטים',
};

const navItems = [
  { to: '/',           label: 'דשבורד',              icon: LayoutDashboard, end: true },
  { to: '/attendance', label: 'נוכחות',               icon: Users },
  { to: '/exams',      label: 'מבחנים ותרגולים',       icon: FileText },
  { to: '/insights',   label: 'אינסייטים',             icon: Lightbulb },
];

export default function Layout() {
  const location = useLocation();
  const pageLabel = pageLabels[location.pathname] ?? 'דו"ח';

  const handleExport = () => {
    const original = document.title;
    document.title = `Yeda LMS – ${pageLabel} – ${new Date().toLocaleDateString('he-IL')}`;
    window.print();
    document.title = original;
  };

  return (
    <div style={{ display: 'flex', minHeight: '100vh', flexDirection: 'column' }}>
      {/* Top Header */}
      <header style={{
        background: 'var(--gradient-primary)',
        color: '#fff',
        padding: '0 28px',
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        flexShrink: 0,
        boxShadow: '0 2px 20px rgba(0,15,97,0.25)',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <div style={{
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(8px)',
            borderRadius: 10,
            width: 38, height: 38,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            border: '1px solid rgba(255,255,255,0.25)',
          }}>
            <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: -0.5, color: '#fff', fontFamily: 'Rubik' }}>y</span>
          </div>
          <div>
            <div style={{ fontWeight: 700, fontSize: 15, letterSpacing: -0.3, lineHeight: 1.2 }}>yeda</div>
            <div style={{ fontSize: 10, color: 'rgba(255,255,255,0.55)', fontWeight: 400, letterSpacing: 0.3 }}>פורטל ניהול למידה</div>
          </div>
        </div>

        {/* Center title */}
        <div style={{ fontWeight: 600, fontSize: 15, letterSpacing: -0.2, color: 'rgba(255,255,255,0.92)' }}>
          דו״ח נוכחות ומעורבות
        </div>

        {/* Export button */}
        <button onClick={handleExport} style={{
          display: 'flex', alignItems: 'center', gap: 7,
          padding: '8px 20px',
          borderRadius: 'var(--radius-pill)',
          background: 'var(--gradient-accent)',
          color: '#fff', border: 'none',
          fontFamily: 'Rubik', fontWeight: 600, fontSize: 13,
          cursor: 'pointer',
          boxShadow: '0 2px 12px rgba(240,135,0,0.4)',
          letterSpacing: 0.1,
        }}>
          <Download size={14} />
          ייצוא דו״ח
        </button>
      </header>

      <div style={{ display: 'flex', flex: 1 }}>
        {/* Sidebar */}
        <aside style={{
          width: 224,
          background: 'var(--white)',
          borderLeft: '1px solid var(--border)',
          display: 'flex',
          flexDirection: 'column',
          flexShrink: 0,
          position: 'sticky',
          top: 64,
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
        }}>
          {/* Sidebar header accent */}
          <div style={{
            background: 'var(--gradient-primary)',
            padding: '16px 16px 14px',
            marginBottom: 8,
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'rgba(255,255,255,0.55)', letterSpacing: 1.2, textTransform: 'uppercase', marginBottom: 2 }}>ניווט ראשי</div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.8)', fontWeight: 500 }}>מנהל: מנהל מערכת</div>
          </div>

          <div style={{ padding: '4px 10px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {navItems.map(({ to, label, icon: Icon, end }) => (
              <NavLink
                key={to}
                to={to}
                end={end}
                style={({ isActive }) => ({
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  padding: '10px 12px',
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? 'var(--primary)' : 'var(--text)',
                  background: isActive ? 'var(--primary-light)' : 'transparent',
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                  borderRight: isActive ? '3px solid var(--primary)' : '3px solid transparent',
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
          </div>

          <div style={{ marginTop: 'auto', borderTop: '1px solid var(--border)', padding: '14px 16px' }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: 'var(--text-secondary)', marginBottom: 4, letterSpacing: 0.5 }}>תקופת דיווח</div>
            <div style={{ fontSize: 12, fontWeight: 500, color: 'var(--primary-dark)' }}>ינואר – אפריל 2026</div>
          </div>
        </aside>

        {/* Main content */}
        <main style={{ flex: 1, padding: '24px 28px', overflowX: 'hidden', background: 'var(--primary-bg)' }}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
