import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { examsData, questionsData, globalStats } from '../data';

export default function Exams() {
  const [activeTab, setActiveTab] = useState<'table' | 'chart' | 'questions'>('table');
  const [typeFilter, setTypeFilter] = useState<'הכל' | 'מבחן' | 'תרגול'>('הכל');
  const [selectedExam, setSelectedExam] = useState<number>(1);

  const filtered = typeFilter === 'הכל' ? examsData : examsData.filter(e => e.type === typeFilter);
  const examsList = examsData.filter(e => e.type === 'מבחן');
  const chartData = examsList.slice(0, 10).map(e => ({
    name: e.courseName.slice(0, 12) + (e.courseName.length > 12 ? '…' : ''),
    passRate: e.passRate,
    averageScore: e.averageScore,
  }));
  const selectedQuestions = questionsData.filter(q => q.examId === selectedExam);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div>
        <h1 style={pageTitle}>מבחנים ותרגולים</h1>
        <p style={pageSub}>סיכום ביצועים במבחנים, תרגולים וניתוח שאלות</p>
      </div>

      {/* Summary KPIs */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
        {[
          { label: 'סה״כ מבחנים',    value: globalStats.totalExams,           color: '#0A59EB' },
          { label: 'סה״כ תרגולים',   value: globalStats.totalExercises,        color: '#F08700' },
          { label: 'ציון ממוצע כללי', value: `${globalStats.averageScore}`,    color: '#079DED' },
          { label: 'אחוז הצלחה כללי', value: `${globalStats.passRate}%`,       color: '#CA5369' },
        ].map(({ label, value, color }) => (
          <div key={label} style={{ background: 'var(--white)', borderRadius: 'var(--radius-lg)', padding: '18px 20px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-card)', borderTop: `3px solid ${color}` }}>
            <div style={{ fontSize: 11, color: 'var(--text-secondary)', marginBottom: 8, fontWeight: 500 }}>{label}</div>
            <div style={{ fontSize: 28, fontWeight: 700, color, letterSpacing: -1, lineHeight: 1 }}>{value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 2, background: 'var(--primary-bg)', padding: 4, borderRadius: 10, width: 'fit-content' }}>
        {([['table', 'ניתוח ביצועים מפורט'], ['chart', 'שיעורי הצלחה במבחנים'], ['questions', 'ניתוח שאלות']] as const).map(([key, label]) => (
          <button key={key} onClick={() => setActiveTab(key)} style={{
            padding: '7px 16px', borderRadius: 8, border: 'none', fontFamily: 'Rubik', fontSize: 13, cursor: 'pointer',
            background: activeTab === key ? 'var(--white)' : 'transparent',
            color: activeTab === key ? 'var(--primary)' : 'var(--text-secondary)',
            fontWeight: activeTab === key ? 600 : 400,
            boxShadow: activeTab === key ? 'var(--shadow-card)' : 'none',
          }}>{label}</button>
        ))}
      </div>

      {activeTab === 'table' && (
        <div style={{ ...card, padding: 0, overflow: 'hidden' }}>
          <div style={{ padding: '18px 22px 14px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={cardTitle}>צפייה במבחנים ותרגולים</div>
              <div style={cardSub}>{filtered.length} פריטים</div>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {(['הכל', 'מבחן', 'תרגול'] as const).map(f => (
                <button key={f} onClick={() => setTypeFilter(f)} style={filterBtn(typeFilter === f)}>{f}</button>
              ))}
            </div>
          </div>
          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 13 }}>
              <thead>
                <tr style={{ background: 'var(--primary-bg)' }}>
                  {['שם מבחן / תרגול', 'סוג', 'קורס', 'נבחנים', 'עברו', 'נכשלו', 'אחוז הצלחה', 'ציון ממוצע'].map(h => (
                    <th key={h} style={th}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((e, i) => (
                  <tr key={e.id} style={{ background: i % 2 === 0 ? 'var(--white)' : 'rgba(246,249,255,0.5)', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ ...td, fontWeight: 500, color: 'var(--primary-dark)', maxWidth: 220 }}>{e.name}</td>
                    <td style={td}>
                      <span style={{
                        padding: '2px 8px', borderRadius: 20, fontSize: 11, fontWeight: 600,
                        background: e.type === 'מבחן' ? 'var(--primary-light)' : 'var(--accent-light)',
                        color: e.type === 'מבחן' ? 'var(--primary)' : 'var(--accent)',
                      }}>{e.type}</span>
                    </td>
                    <td style={{ ...td, color: 'var(--text-secondary)', fontSize: 12 }}>{e.courseName}</td>
                    <td style={{ ...td, textAlign: 'center' }}>{e.totalUsers}</td>
                    <td style={{ ...td, textAlign: 'center', color: '#079DED', fontWeight: 600 }}>{e.passed}</td>
                    <td style={{ ...td, textAlign: 'center', color: '#CA5369', fontWeight: 600 }}>{e.failed}</td>
                    <td style={td}><PassBar value={e.passRate} /></td>
                    <td style={{ ...td, textAlign: 'center', fontWeight: 700, color: e.averageScore >= 75 ? '#079DED' : e.averageScore >= 60 ? 'var(--accent)' : '#CA5369' }}>{e.averageScore}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {activeTab === 'chart' && (
        <div style={card}>
          <div style={{ ...cardTitle, marginBottom: 4 }}>שיעורי הצלחה וציון ממוצע במבחנים</div>
          <div style={{ ...cardSub, marginBottom: 20 }}>השוואה בין שיעור ההצלחה לציון הממוצע לפי קורס</div>
          <ResponsiveContainer width="100%" height={320}>
            <BarChart data={chartData} barSize={18} barGap={4} margin={{ top: 4, right: 4, left: -20, bottom: 60 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" vertical={false} />
              <XAxis dataKey="name" tick={{ fontSize: 11, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} angle={-35} textAnchor="end" />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11, fontFamily: 'Rubik', fill: 'var(--text-secondary)' }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={{ fontFamily: 'Rubik', fontSize: 12, borderRadius: 8, border: '1px solid var(--border)' }} formatter={(v: any, n: any) => [`${v}${n === 'passRate' ? '%' : ''}`, n === 'passRate' ? 'אחוז הצלחה' : 'ציון ממוצע']} />
              <Bar dataKey="passRate" name="passRate" radius={[4,4,0,0]} fill="#0A59EB" />
              <Bar dataKey="averageScore" name="averageScore" radius={[4,4,0,0]} fill="#22D3EE" />
            </BarChart>
          </ResponsiveContainer>
          <div style={{ display: 'flex', gap: 20, justifyContent: 'center', marginTop: 8 }}>
            {[['#0A59EB','אחוז הצלחה'],['#22D3EE','ציון ממוצע']].map(([color, label]) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: 'var(--text-secondary)' }}>
                <span style={{ width: 10, height: 10, borderRadius: 2, background: color, display: 'inline-block' }} />
                {label}
              </div>
            ))}
          </div>
        </div>
      )}

      {activeTab === 'questions' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={card}>
            <div style={{ ...cardTitle, marginBottom: 12 }}>בחר מבחן לניתוח שאלות</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
              {examsData.filter(e => e.type === 'מבחן').slice(0, 10).map(e => (
                <button key={e.examId ?? e.id} onClick={() => setSelectedExam(e.id)} style={filterBtn(selectedExam === e.id)}>{e.courseName}</button>
              ))}
            </div>
          </div>
          <div style={card}>
            <div style={{ ...cardTitle, marginBottom: 4 }}>ניתוח שאלות</div>
            <div style={{ ...cardSub, marginBottom: 16 }}>אחוז הצלחה לפי שאלה</div>
            {selectedQuestions.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '30px 0', color: 'var(--text-secondary)', fontSize: 13 }}>אין נתוני שאלות זמינים למבחן זה</div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {selectedQuestions.map((q, i) => {
                  const color = q.successRate >= 80 ? '#079DED' : q.successRate >= 40 ? '#F08700' : '#CA5369';
                  const difficulty = q.successRate >= 80 ? 'שאלה קלה' : q.successRate < 40 ? 'שאלה מאתגרת - רוב המשתמשים נכשלים' : 'רמת קושי בינונית';
                  return (
                    <div key={i} style={{ padding: '14px 16px', background: 'var(--primary-bg)', borderRadius: 10, border: `1px solid ${color}30` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, gap: 12 }}>
                        <div style={{ fontSize: 13, fontWeight: 500, color: 'var(--primary-dark)', flex: 1 }}>{q.text}</div>
                        <span style={{ padding: '2px 10px', borderRadius: 20, fontSize: 11, fontWeight: 600, background: color + '18', color, whiteSpace: 'nowrap', flexShrink: 0 }}>{difficulty}</span>
                      </div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                        <div style={{ flex: 1, height: 7, background: 'var(--border)', borderRadius: 4, overflow: 'hidden' }}>
                          <div style={{ height: '100%', width: `${q.successRate}%`, background: color, borderRadius: 4 }} />
                        </div>
                        <span style={{ fontSize: 13, fontWeight: 700, color, width: 38, textAlign: 'left' }}>{q.successRate}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function PassBar({ value }: { value: number }) {
  const color = value >= 75 ? '#079DED' : value >= 60 ? '#F08700' : '#CA5369';
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
const cardTitle: React.CSSProperties = { fontSize: 14, fontWeight: 600, color: 'var(--primary-dark)', letterSpacing: -0.2 };
const cardSub: React.CSSProperties = { fontSize: 12, color: 'var(--text-secondary)', marginTop: 3 };
const th: React.CSSProperties = { padding: '11px 16px', textAlign: 'right', fontWeight: 600, fontSize: 11, color: 'var(--text-secondary)', borderBottom: '1px solid var(--border)', letterSpacing: 0.3, background: 'var(--primary-bg)' };
const td: React.CSSProperties = { padding: '12px 16px', color: 'var(--text)', fontSize: 13 };
