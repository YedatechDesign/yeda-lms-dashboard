import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { globalStats, courses, topAttendance } from '../data';
import { Users, BookOpen, FileText, TrendingUp, Eye, Award } from 'lucide-react';

const courseTypeCount = courses.reduce((acc, c) => {
  acc[c.type] = (acc[c.type] || 0) + 1;
  return acc;
}, {} as Record<string, number>);

const typeChartData = Object.entries(courseTypeCount).map(([name, value]) => ({ name, value }));
const typeColors: Record<string, string> = { פרונטלי: '#0A59EB', היברידי: '#F08700', מוקלט: '#079DED' };

const avgAttendanceByCourse = courses
  .filter(c => c.type !== 'מוקלט')
  .slice(0, 8)
  .map(c => ({
    name: c.name.length > 14 ? c.name.slice(0, 14) + '…' : c.name,
    avg: 73 + Math.round(Math.random() * 20),
  }));

export default function Dashboard() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      {/* Page title */}
      <div>
        <h1 style={{ fontSize: 20, fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 4 }}>דשבורד כללי</h1>
        <p style={{ fontSize: 13, color: 'var(--text-secondary)' }}>סקירה כללית של פעילות הלמידה בפלטפורמה</p>
      </div>

      {/* KPI grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
        <KpiCard label="משתמשים פעילים"      value={globalStats.activeUsers.toString()} icon={<Users size={18}/>}    color="#0A59EB" />
        <KpiCard label="סה״כ קורסים"          value={globalStats.totalCourses.toString()} icon={<BookOpen size={18}/>} color="#079DED" />
        <KpiCard label="סה״כ יחידות למידה"   value={globalStats.totalLearningUnits.toString()} icon={<FileText size={18}/>} color="#F08700" />
        <KpiCard label="אחוז נוכחות כללי"    value={`${globalStats.attendanceRate}%`}   icon={<TrendingUp size={18}/>} color="#0A59EB" highlight />
        <KpiCard label="אחוז צפייה בתכנים"   value={`${globalStats.viewingRate}%`}      icon={<Eye size={18}/>}        color="#CA5369" highlight />
        <KpiCard label="אחוז הצלחה כללי"     value={`${globalStats.passRate}%`}         icon={<Award size={18}/>}      color="#16a34a" highlight />
      </div>

      {/* Bottom row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
        {/* Course type distribution */}
        <Card title="התפלגות קורסים לפי סוג" sub={`${courses.length} קורסים סה״כ`}>
          <div style={{ display: 'flex', gap: 20, alignItems: 'center', marginBottom: 16 }}>
            {Object.entries(courseTypeCount).map(([type, count]) => (
              <div key={type} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 64, height: 64,
                  borderRadius: '50%',
                  background: typeColors[type] + '18',
                  border: `3px solid ${typeColors[type]}`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 20, fontWeight: 700, color: typeColors[type],
                  margin: '0 auto 6px',
                }}>{count}</div>
                <div style={{ fontSize: 12, color: 'var(--text-secondary)', fontWeight: 500 }}>{type}</div>
              </div>
            ))}
          </div>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={typeChartData} barSize={40}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 12, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 11, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontFamily: 'Rubik', fontSize: 12, borderRadius: 8, border: '1px solid var(--border)' }} />
              <Bar dataKey="value" name="קורסים" radius={[4,4,0,0]}>
                {typeChartData.map((entry) => (
                  <Cell key={entry.name} fill={typeColors[entry.name]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Top 5 attendance */}
        <Card title="טופ 5 נוכחות" sub="משתמשים עם נוכחות גבוהה">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {topAttendance.map((u) => (
              <div key={u.rank} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{
                  width: 26, height: 26, borderRadius: '50%',
                  background: u.rank === 1 ? 'var(--accent)' : 'var(--primary-light)',
                  color: u.rank === 1 ? '#fff' : 'var(--primary)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 12, fontWeight: 700, flexShrink: 0,
                }}>{u.rank}</div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--primary-dark)' }}>{u.name}</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{u.email}</div>
                </div>
                <div style={{ textAlign: 'left', flexShrink: 0 }}>
                  <div style={{ fontSize: 13, fontWeight: 700, color: '#16a34a' }}>{u.percentage}%</div>
                  <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{u.attended}/{u.total}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, padding: '10px 14px', background: 'var(--primary-bg)', borderRadius: 10, fontSize: 12, color: 'var(--text-secondary)', borderRight: '3px solid var(--primary)' }}>
            <strong style={{ color: 'var(--primary)' }}>סיכום מצב הלמידה:</strong> מצב הלמידה הכללי בפלטפורמה מציג מגמות מעורבות עם שיעורי הצלחה טובים בקורסי טכנולוגיה לצד צורך בשיפור בנוכחות ובצפייה בתכנים מוקלטים.
          </div>
        </Card>
      </div>

      {/* Exams/exercises summary row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[
          { label: 'סה״כ מבחנים',  value: globalStats.totalExams,      color: '#0A59EB' },
          { label: 'סה״כ תרגולים', value: globalStats.totalExercises,   color: '#F08700' },
          { label: 'ציון ממוצע כללי', value: globalStats.averageScore, color: '#079DED', suffix: '' },
          { label: 'אחוז הצלחה',   value: globalStats.passRate,         color: '#CA5369', suffix: '%' },
        ].map(({ label, value, color, suffix }) => (
          <div key={label} style={{ background: 'var(--white)', borderRadius: 'var(--radius)', padding: '16px 20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)', borderTop: `3px solid ${color}` }}>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 6 }}>{label}</div>
            <div style={{ fontSize: 26, fontWeight: 700, color }}>{value}{suffix}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function KpiCard({ label, value, icon, color, highlight }: { label: string; value: string; icon: React.ReactNode; color: string; highlight?: boolean }) {
  return (
    <div style={{
      background: highlight ? color : 'var(--white)',
      borderRadius: 'var(--radius)',
      padding: '16px 20px',
      border: `1px solid ${highlight ? color : 'var(--border)'}`,
      boxShadow: 'var(--shadow-card)',
      display: 'flex', alignItems: 'center', gap: 14,
    }}>
      <div style={{
        background: highlight ? 'rgba(255,255,255,0.2)' : color + '18',
        color: highlight ? '#fff' : color,
        width: 40, height: 40, borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        flexShrink: 0,
      }}>{icon}</div>
      <div>
        <div style={{ fontSize: 11, color: highlight ? 'rgba(255,255,255,0.75)' : 'var(--text-secondary)', marginBottom: 2 }}>{label}</div>
        <div style={{ fontSize: 22, fontWeight: 700, color: highlight ? '#fff' : 'var(--primary-dark)', lineHeight: 1 }}>{value}</div>
      </div>
    </div>
  );
}

function Card({ title, sub, children }: { title: string; sub?: string; children: React.ReactNode }) {
  return (
    <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '20px 22px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' }}>
      <div style={{ marginBottom: 16 }}>
        <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)' }}>{title}</div>
        {sub && <div style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 2 }}>{sub}</div>}
      </div>
      {children}
    </div>
  );
}
