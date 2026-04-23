export const kpiData = [
  { label: 'נוכחות כללית', value: '87.4%', trend: '+2.1%', positive: true, icon: 'users' },
  { label: 'מעורבות', value: '74.2%', trend: '+5.3%', positive: true, icon: 'activity' },
  { label: 'קורסים הושלמו', value: '312', trend: '-4', positive: false, icon: 'book' },
  { label: 'ממוצע ציון', value: '81.6', trend: '+1.2', positive: true, icon: 'award' },
];

export const attendanceOverTime = [
  { month: 'ספט׳', present: 89, absent: 11, late: 5 },
  { month: 'אוק׳', present: 85, absent: 15, late: 7 },
  { month: 'נוב׳', present: 91, absent: 9, late: 4 },
  { month: 'דצמ׳', present: 78, absent: 22, late: 9 },
  { month: 'ינו׳', present: 83, absent: 17, late: 6 },
  { month: 'פבר׳', present: 87, absent: 13, late: 5 },
  { month: 'מרץ', present: 90, absent: 10, late: 3 },
  { month: 'אפר׳', present: 88, absent: 12, late: 6 },
];

export const engagementData = [
  { name: 'צפייה בסרטונים', value: 78, color: '#0A59EB' },
  { name: 'השלמת מטלות', value: 64, color: '#F08700' },
  { name: 'השתתפות בפורום', value: 42, color: '#079DED' },
  { name: 'חידונים ומבחנים', value: 71, color: '#CA5369' },
  { name: 'הורדת חומרים', value: 55, color: '#000F61' },
];

export const courseData = [
  { id: 1, name: 'מבוא לניהול פרויקטים', instructor: 'דנה לוי', enrolled: 145, attendance: 91, engagement: 82, avgScore: 85.2, status: 'פעיל' },
  { id: 2, name: 'Excel מתקדם', instructor: 'יוסי כהן', enrolled: 98, attendance: 88, engagement: 76, avgScore: 79.8, status: 'פעיל' },
  { id: 3, name: 'תקשורת בין-אישית', instructor: 'מיכל גולן', enrolled: 203, attendance: 79, engagement: 68, avgScore: 77.5, status: 'פעיל' },
  { id: 4, name: 'אבטחת מידע בסיסית', instructor: 'אבי ברק', enrolled: 67, attendance: 95, engagement: 89, avgScore: 88.1, status: 'פעיל' },
  { id: 5, name: 'שירות לקוחות מצוין', instructor: 'רחל שמיר', enrolled: 178, attendance: 84, engagement: 71, avgScore: 82.3, status: 'הסתיים' },
  { id: 6, name: 'מיומנויות מנהיגות', instructor: 'גיל אברהם', enrolled: 54, attendance: 93, engagement: 85, avgScore: 86.7, status: 'פעיל' },
  { id: 7, name: 'כתיבה עסקית', instructor: 'נועה פרידמן', enrolled: 112, attendance: 72, engagement: 61, avgScore: 74.9, status: 'מושהה' },
];

export const studentData = [
  { id: 1, name: 'אלון ממן', department: 'מכירות', attended: 18, total: 20, score: 91, status: 'נוכח' },
  { id: 2, name: 'שירה ברון', department: 'פיתוח', attended: 14, total: 20, score: 78, status: 'חלקי' },
  { id: 3, name: 'ניב סגל', department: 'שיווק', attended: 20, total: 20, score: 95, status: 'נוכח' },
  { id: 4, name: 'יעל הרצוג', department: 'כספים', attended: 8, total: 20, score: 62, status: 'נעדר' },
  { id: 5, name: 'תומר כץ', department: 'פיתוח', attended: 17, total: 20, score: 84, status: 'נוכח' },
  { id: 6, name: 'אורית לב', department: 'HR', attended: 19, total: 20, score: 89, status: 'נוכח' },
  { id: 7, name: 'בן ציון', department: 'מכירות', attended: 11, total: 20, score: 71, status: 'חלקי' },
  { id: 8, name: 'דנית מור', department: 'שיווק', attended: 5, total: 20, score: 55, status: 'נעדר' },
];

export const departmentData = [
  { name: 'מכירות', attendance: 85, engagement: 72 },
  { name: 'פיתוח', attendance: 92, engagement: 88 },
  { name: 'שיווק', attendance: 80, engagement: 75 },
  { name: 'כספים', attendance: 76, engagement: 65 },
  { name: 'HR', attendance: 94, engagement: 90 },
  { name: 'תפעול', attendance: 88, engagement: 79 },
];
