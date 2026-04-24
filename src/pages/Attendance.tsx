import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { sessionAttendance, courses, lowViewingUsers } from '../data';

export default function Attendance() {
  const [selectedCourse, setSelectedCourse] = useState<number | 'all'>('all');
  const [activeTab, setActiveTab] = useState<'sessions' | 'recorded'>('sessions');

  const liveCourses = courses.filter(c => c.type !== 'מוקלט');
  const recordedCourses = courses.filter(c => c.type !== 'פרונטלי');

  const filteredSessions = selectedCourse === 'all'
    ? sessionAttendance
    : sessionAttendance.filter(s => s.courseId === selectedCourse);

  // avg attendance per course for chart
  const avgByCourse = liveCourses.slice(0, 8).map(c => {
    const sessions = sessionAttendance.filter(s => s.courseId === c.id);
    const avg = sessions.length
      ? Math.round(sessions.reduce((a, s) => a + s.attendancePercent, 0) / sessions.length)
      : 75;
    return { name: c.name.length > 12 ? c.name.slice(0, 12) + '…' : c.name, avg };
  });

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h1 style={pageTitle}>נוכחות</h1>
        <p style={pageSub}>מעקב נוכחות למפגשים חיים וצפייה בתכנים מוקלטים</p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 2, background: 'var(--primary-bg)', padding: 4, borderRadius: 10, width: 'fit-content' }}>
        {([['sessions', 'נוכחות למפגשים'], ['recorded', 'צפייה בתכנים מוקלטים']] as const).map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)} style={{
            padding: '7px 18px', borderRadius: 8, border: 'none', fontFamily: 'Rubik', fontSize: 13, cursor: 'pointer',
            background: activeTab === key ? 'var(--white)' : 'transparent',
            color: activeTab === key ? 'var(--primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === key ? 600 : 400,
            boxShadow: activeTab === key ? 'var(--shadow-card)' : 'none',
          }}>{label}</button>
        ))}
      </div>

      {activeTab === 'sessions' ? (
        <>
          {/* Course filter */}
          <div style={card}>
            <div style={cardHeader}>
              <div>
                <div style={cardTitle}>רשימת קורסים</div>
                <div style={cardSub}>סנן לפי קורס להצגת נתוני נוכחות מפורטים</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              <button onClick={() => setSelectedCourse('all')} style={filterBtn(selectedCourse === 'all')}>הכל</button>
              {liveCourses.map(c => (
                <button key={c.id} onClick={() => setSelectedCourse(c.id)} style={filterBtn(selectedCourse === c.id)}>
                  {c.name}
                </button>
              ))}
            </div>
          </div>

          {/* Avg attendance chart */}
          <div style={card}>
            <div style={cardTitle}>ממוצע נוכחות לפי קורס</div>
            <div style={{ ...cardSub, marginBottom: 16 }}>אחוז נוכחות ממוצע במפגשים פרונטליים והיברידיים</div>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={avgByCourse} barSize={28} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
                <YAxis domain={[50, 100]} tick={{ fontSize: 11, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ fontFamily: 'Rubik', fontSize: 12, borderRadius: 8, border: '1px solid var(--border)' }} formatter={(v: any) => [`${v}%`, 'ממוצע נוכחות']} />
                <Bar dataKey="avg" name="ממוצע" radius={[4,4,0,0]} fill="var(--primary)" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Sessions table */}
          <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid var(--border)' }}>
              <div style={cardTitle}>מעקב נוכחות מפורט</div>
              <div style={cardSub}>{filteredSessions.length} מפגשים</div>
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
                <thead>
                  <tr style={{ background: 'var(--primary-bg)' }}>
                    {['שם הקורס', 'שם מפגש', 'רשומים', 'נוכחים', 'נעדרים', 'אחוז נוכחות'].map(h => (
                      <th key={h} style={th}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filteredSessions.map((s, i) => (
                    <tr key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)', borderBottom: '1px solid var(--border)' }}>
                      <td style={{ ...td, fontWeight: 500, color: 'var(--primary-dark)' }}>{s.courseName}</td>
                      <td style={td}>{s.sessionName}</td>
                      <td style={{ ...td, textAlign: 'center' }}>{s.registered}</td>
                      <td style={{ ...td, textAlign: 'center', color: '#079DED', fontWeight: 600 }}>{s.attended}</td>
                      <td style={{ ...td, textAlign: 'center', color: '#CA5369', fontWeight: 600 }}>{s.absent}</td>
                      <td style={td}>
                        <PctBar value={s.attendancePercent} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low attendance */}
          <LowAttendanceCard />
        </>
      ) : (
        <>
          {/* Recorded content viewing */}
          <div style={card}>
            <div style={cardTitle}>צפייה בתכנים מוקלטים</div>
            <div style={{ ...cardSub, marginBottom: 16 }}>מעקב אחר אחוז הצפייה בתכנים מוקלטים לפי קורס</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {recordedCourses.slice(0, 8).map((c, i) => {
                const pct = [61, 55, 48, 72, 38, 65, 58, 44][i] ?? 60;
                return (
                  <div key={c.id}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 5, fontSize: 13 }}>
                      <span style={{ fontWeight: 500, color: 'var(--primary-dark)' }}>{c.name}</span>
                      <span style={{ color: pct < 50 ? '#CA5369' : pct < 70 ? 'var(--accent)' : '#079DED', fontWeight: 600 }}>{pct}%</span>
                    </div>
                    <div style={{ height: 6, background: 'var(--primary-light)', borderRadius: 3, overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${pct}%`, background: pct < 50 ? '#CA5369' : pct < 70 ? 'var(--accent)' : 'var(--primary)', borderRadius: 3 }} />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Low viewers table */}
          <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid var(--border)' }}>
              <div style={cardTitle}>משתמשים שלא מקפידים לצפות בקורסים מוקלטים</div>
              <div style={cardSub}>אחוז צפייה מתחת ל-30%</div>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--primary-bg)' }}>
                  {['שם', 'אימייל', 'קורס', 'שיעורים נצפו', 'אחוז צפייה', 'אינסייט'].map(h => (
                    <th key={h} style={th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {lowViewingUsers.map((u, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ ...td, fontWeight: 600, color: 'var(--primary-dark)' }}>{u.name}</td>
                    <td style={{ ...td, color: 'var(--text-secondary)', fontSize: 12 }}>{u.email}</td>
                    <td style={td}><span style={{ padding: '2px 8px', borderRadius: 20, background: 'var(--primary-light)', color: 'var(--primary)', fontSize: 11, fontWeight: 500 }}>{u.courseName}</span></td>
                    <td style={{ ...td, textAlign: 'center' }}>{u.watched}/{u.total}</td>
                    <td style={{ ...td, textAlign: 'center', color: '#CA5369', fontWeight: 700 }}>{u.percentage}%</td>
                    <td style={td}><span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>המשתמש אינו צופה בתכני הקורס באופן סדיר. מומלץ לשלוח תזכורת אישית.</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
}

function LowAttendanceCard() {
  const lowAttendance = [
    { name: 'הילה נחום',   email: 'hila@company.co.il',   percent: 42 },
    { name: 'רונן מזרחי',  email: 'ronen@company.co.il',  percent: 38 },
    { name: 'שרה חדד',    email: 'sara@company.co.il',    percent: 45 },
    { name: 'תומר אזולאי', email: 'tomer@company.co.il',  percent: 33 },
  ];
  return (
    <div style={card}>
      <div style={{ ...cardTitle, marginBottom: 4 }}>נוכחות נמוכה</div>
      <div style={{ ...cardSub, marginBottom: 14 }}>משתמשים עם נוכחות מתחת ל-50%</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
        {lowAttendance.map(u => (
          <div key={u.name} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: 'rgba(202,83,105,0.05)', borderRadius: 10, border: '1px solid rgba(202,83,105,0.15)' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(202,83,105,0.12)', color: '#CA5369', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 13, flexShrink: 0 }}>{u.name[0]}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontWeight: 600, fontSize: 13, color: 'var(--primary-dark)' }}>{u.name}</div>
              <div style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{u.email}</div>
            </div>
            <div style={{ fontSize: 15, fontWeight: 700, color: '#CA5369' }}>{u.percent}%</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function PctBar({ value }: { value: number }) {
  const color = value >= 80 ? '#0A59EB' : value >= 65 ? '#F08700' : '#CA5369';
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ flex: 1, height: 5, background: 'var(--primary-light)', borderRadius: 3, overflow: 'hidden' }}>
        <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: 3 }} />
      </div>
      <span style={{ fontSize: 12, fontWeight: 600, color, width: 38, textAlign: 'left' }}>{value}%</span>
    </div>
  );
}

const filterBtn = (active: boolean): React.CSSProperties => ({
  padding: '5px 12px', borderRadius: 20, border: active ? 'none' : '1px solid var(--border)',
  background: active ? 'var(--primary)' : 'var(--white)', color: active ? '#fff' : 'var(--text)',
  fontSize: 12, fontFamily: 'Rubik', cursor: 'pointer', fontWeight: active ? 600 : 400,
});

const pageTitle: React.CSSProperties = { fontSize: 20, fontWeight: 700, color: 'var(--primary-dark)', marginBottom: 4 };
const pageSub: React.CSSProperties = { fontSize: 13, color: 'var(--text-secondary)' };
const card: React.CSSProperties = { background: 'var(--white)', borderRadius: 'var(--radius-xl)', padding: '20px 22px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)' };
const cardHeader: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16, paddingBottom: 12, borderBottom: '1px solid var(--border)' };
const cardTitle: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)', letterSpacing: -0.2 };
const cardSub: React.CSSProperties = { fontSize: 12, color: 'var(--text-secondary)', marginTop: 3 };
const th: React.CSSProperties = { padding: '11px 16px', textAlign: 'right', fontWeight: 600, fontSize: 11, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', letterSpacing: 0.3, background: 'var(--primary-bg)' };
const td: React.CSSProperties = { padding: '12px 16px', color: 'var(--text)', fontSize: 13 };
