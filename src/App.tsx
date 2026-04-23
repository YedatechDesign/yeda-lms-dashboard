import './App.css';
import Header from './components/Header';
import KpiCard from './components/KpiCard';
import AttendanceChart from './components/AttendanceChart';
import EngagementPanel from './components/EngagementPanel';
import CourseTable from './components/CourseTable';
import StudentTable from './components/StudentTable';
import { kpiData } from './data';

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />

      <main style={{ flex: 1, padding: '28px 32px', maxWidth: 1440, width: '100%', margin: '0 auto' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24, fontSize: 13, color: 'var(--text-secondary)' }}>
          <span>בית</span>
          <span>›</span>
          <span>דוחות</span>
          <span>›</span>
          <span style={{ color: 'var(--primary)', fontWeight: 500 }}>נוכחות ומעורבות</span>
          <span style={{ marginRight: 'auto', marginLeft: 0 }} />
          <span style={{ fontSize: 12 }}>עדכון אחרון: 23 אפריל 2026, 08:45</span>
        </div>

        {/* KPI Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: 20,
          marginBottom: 24,
        }}>
          {kpiData.map((k) => (
            <KpiCard key={k.label} {...k} />
          ))}
        </div>

        {/* Charts Row */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 340px',
          gap: 20,
          marginBottom: 24,
        }}>
          <AttendanceChart />
          <EngagementPanel />
        </div>

        {/* Course Table */}
        <div style={{ marginBottom: 24 }}>
          <CourseTable />
        </div>

        {/* Student Table */}
        <div style={{ marginBottom: 32 }}>
          <StudentTable />
        </div>
      </main>

      <footer style={{
        borderTop: '1px solid var(--border)',
        padding: '14px 32px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: 12,
        color: 'var(--text-secondary)',
        background: 'var(--white)',
      }}>
        <span>© 2026 Yeda LMS · כל הזכויות שמורות</span>
        <span>גרסה 3.2.1</span>
      </footer>
    </div>
  );
}
