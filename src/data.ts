// ── Global KPIs ──────────────────────────────────────────────
export const globalStats = {
  averageScore: 72.4,
  passRate: 68.5,
  attendanceRate: 73.2,
  viewingRate: 61.8,
  activeUsers: 342,
  totalCourses: 20,
  totalLearningUnits: 58,
  totalExams: 15,
  totalExercises: 22,
};

// ── Courses list ─────────────────────────────────────────────
export const courses = [
  { id: 1,  name: 'ניהול פרויקטים מתקדם',     type: 'היברידי', sessions: 12 },
  { id: 2,  name: 'פיתוח מנהיגות',             type: 'פרונטלי', sessions: 8  },
  { id: 3,  name: 'Excel מתקדם',               type: 'מוקלט',   sessions: 10 },
  { id: 4,  name: 'תקשורת בין-אישית',          type: 'היברידי', sessions: 9  },
  { id: 5,  name: 'שיווק דיגיטלי',             type: 'מוקלט',   sessions: 15 },
  { id: 6,  name: 'ניהול זמן ופרודוקטיביות',   type: 'מוקלט',   sessions: 7  },
  { id: 7,  name: 'חשיבה אסטרטגית',            type: 'פרונטלי', sessions: 6  },
  { id: 8,  name: 'Python למתחילים',           type: 'היברידי', sessions: 14 },
  { id: 9,  name: 'ניהול צוותים',              type: 'פרונטלי', sessions: 10 },
  { id: 10, name: 'עיצוב גרפי בסיסי',          type: 'מוקלט',   sessions: 12 },
  { id: 11, name: 'ניהול משא ומתן',             type: 'היברידי', sessions: 8  },
  { id: 12, name: 'אבטחת מידע',                type: 'מוקלט',   sessions: 11 },
  { id: 13, name: 'ניתוח נתונים',              type: 'היברידי', sessions: 13 },
  { id: 14, name: 'כתיבה עסקית',               type: 'מוקלט',   sessions: 6  },
  { id: 15, name: 'מכירות ושירות לקוחות',       type: 'פרונטלי', sessions: 7  },
  { id: 16, name: 'בינה מלאכותית בעסקים',       type: 'היברידי', sessions: 10 },
  { id: 17, name: 'ניהול כספים אישי',           type: 'מוקלט',   sessions: 8  },
  { id: 18, name: 'חדשנות ויזמות',              type: 'פרונטלי', sessions: 9  },
  { id: 19, name: 'ניהול שינוי ארגוני',         type: 'היברידי', sessions: 11 },
  { id: 20, name: 'עבודה בסביבה רב-תרבותית',   type: 'מוקלט',   sessions: 5  },
];

// ── Session attendance ────────────────────────────────────────
export const sessionAttendance = [
  { courseId: 1,  courseName: 'ניהול פרויקטים מתקדם',  sessionName: 'מפגש 1 - מבוא לניהול פרויקטים',    registered: 42, attended: 38, absent: 4,  attendancePercent: 90.5 },
  { courseId: 1,  courseName: 'ניהול פרויקטים מתקדם',  sessionName: 'מפגש 2 - תכנון ולוחות זמנים',       registered: 42, attended: 35, absent: 7,  attendancePercent: 83.3 },
  { courseId: 1,  courseName: 'ניהול פרויקטים מתקדם',  sessionName: 'מפגש 3 - ניהול סיכונים',            registered: 42, attended: 31, absent: 11, attendancePercent: 73.8 },
  { courseId: 2,  courseName: 'פיתוח מנהיגות',          sessionName: 'מפגש 1 - מהי מנהיגות?',            registered: 35, attended: 30, absent: 5,  attendancePercent: 85.7 },
  { courseId: 2,  courseName: 'פיתוח מנהיגות',          sessionName: 'מפגש 2 - סגנונות מנהיגות',          registered: 35, attended: 28, absent: 7,  attendancePercent: 80   },
  { courseId: 2,  courseName: 'פיתוח מנהיגות',          sessionName: 'מפגש 3 - הנעת עובדים',              registered: 35, attended: 25, absent: 10, attendancePercent: 71.4 },
  { courseId: 4,  courseName: 'תקשורת בין-אישית',       sessionName: 'מפגש 1 - עקרונות התקשורת',          registered: 38, attended: 33, absent: 5,  attendancePercent: 86.8 },
  { courseId: 4,  courseName: 'תקשורת בין-אישית',       sessionName: 'מפגש 2 - הקשבה פעילה',              registered: 38, attended: 29, absent: 9,  attendancePercent: 76.3 },
  { courseId: 4,  courseName: 'תקשורת בין-אישית',       sessionName: 'מפגש 3 - ניהול קונפליקטים',         registered: 38, attended: 26, absent: 12, attendancePercent: 68.4 },
  { courseId: 7,  courseName: 'חשיבה אסטרטגית',         sessionName: 'מפגש 1 - חשיבה מערכתית',            registered: 28, attended: 24, absent: 4,  attendancePercent: 85.7 },
  { courseId: 7,  courseName: 'חשיבה אסטרטגית',         sessionName: 'מפגש 2 - ניתוח SWOT',               registered: 28, attended: 21, absent: 7,  attendancePercent: 75   },
  { courseId: 8,  courseName: 'Python למתחילים',        sessionName: 'מפגש 1 - התקנה והכרות',             registered: 45, attended: 42, absent: 3,  attendancePercent: 93.3 },
  { courseId: 8,  courseName: 'Python למתחילים',        sessionName: 'מפגש 2 - משתנים וטיפוסים',          registered: 45, attended: 39, absent: 6,  attendancePercent: 86.7 },
  { courseId: 8,  courseName: 'Python למתחילים',        sessionName: 'מפגש 3 - לולאות ותנאים',            registered: 45, attended: 35, absent: 10, attendancePercent: 77.8 },
  { courseId: 9,  courseName: 'ניהול צוותים',           sessionName: 'מפגש 1 - בניית צוות',               registered: 32, attended: 27, absent: 5,  attendancePercent: 84.4 },
  { courseId: 9,  courseName: 'ניהול צוותים',           sessionName: 'מפגש 2 - דינמיקה קבוצתית',          registered: 32, attended: 24, absent: 8,  attendancePercent: 75   },
  { courseId: 9,  courseName: 'ניהול צוותים',           sessionName: 'מפגש 3 - ניהול ביצועים',            registered: 32, attended: 22, absent: 10, attendancePercent: 68.8 },
  { courseId: 11, courseName: 'ניהול משא ומתן',          sessionName: 'מפגש 1 - עקרונות המשא ומתן',        registered: 30, attended: 26, absent: 4,  attendancePercent: 86.7 },
  { courseId: 11, courseName: 'ניהול משא ומתן',          sessionName: 'מפגש 2 - טכניקות שכנוע',            registered: 30, attended: 22, absent: 8,  attendancePercent: 73.3 },
  { courseId: 13, courseName: 'ניתוח נתונים',           sessionName: 'מפגש 1 - מבוא לניתוח נתונים',       registered: 40, attended: 36, absent: 4,  attendancePercent: 90   },
  { courseId: 13, courseName: 'ניתוח נתונים',           sessionName: 'מפגש 2 - כלים סטטיסטיים',           registered: 40, attended: 30, absent: 10, attendancePercent: 75   },
  { courseId: 13, courseName: 'ניתוח נתונים',           sessionName: 'מפגש 3 - ויזואליזציה',              registered: 40, attended: 28, absent: 12, attendancePercent: 70   },
  { courseId: 15, courseName: 'מכירות ושירות לקוחות',   sessionName: 'מפגש 1 - יסודות המכירה',            registered: 25, attended: 20, absent: 5,  attendancePercent: 80   },
  { courseId: 15, courseName: 'מכירות ושירות לקוחות',   sessionName: 'מפגש 2 - שירות מצוין',              registered: 25, attended: 18, absent: 7,  attendancePercent: 72   },
  { courseId: 16, courseName: 'בינה מלאכותית בעסקים',   sessionName: 'מפגש 1 - מהי בינה מלאכותית?',       registered: 48, attended: 45, absent: 3,  attendancePercent: 93.8 },
  { courseId: 16, courseName: 'בינה מלאכותית בעסקים',   sessionName: 'מפגש 2 - יישומים עסקיים',           registered: 48, attended: 41, absent: 7,  attendancePercent: 85.4 },
  { courseId: 16, courseName: 'בינה מלאכותית בעסקים',   sessionName: 'מפגש 3 - כלים מעשיים',              registered: 48, attended: 38, absent: 10, attendancePercent: 79.2 },
  { courseId: 18, courseName: 'חדשנות ויזמות',           sessionName: 'מפגש 1 - חשיבה יצירתית',            registered: 33, attended: 28, absent: 5,  attendancePercent: 84.8 },
  { courseId: 18, courseName: 'חדשנות ויזמות',           sessionName: 'מפגש 2 - מודל עסקי',                registered: 33, attended: 25, absent: 8,  attendancePercent: 75.8 },
  { courseId: 19, courseName: 'ניהול שינוי ארגוני',      sessionName: 'מפגש 1 - תיאוריות שינוי',           registered: 36, attended: 31, absent: 5,  attendancePercent: 86.1 },
  { courseId: 19, courseName: 'ניהול שינוי ארגוני',      sessionName: 'מפגש 2 - התנגדות לשינוי',           registered: 36, attended: 27, absent: 9,  attendancePercent: 75   },
  { courseId: 19, courseName: 'ניהול שינוי ארגוני',      sessionName: 'מפגש 3 - ניהול מעבר',               registered: 36, attended: 24, absent: 12, attendancePercent: 66.7 },
];

// ── Top 5 attendance users ────────────────────────────────────
export const topAttendance = [
  { rank: 1, name: 'דנה כהן',    email: 'dana.cohen@company.co.il',    attended: 18, total: 19, percentage: 94.7 },
  { rank: 2, name: 'יוסף לוי',   email: 'yosef.levi@company.co.il',    attended: 17, total: 19, percentage: 89.5 },
  { rank: 3, name: 'אורי שפירא', email: 'ori.shapira@company.co.il',   attended: 16, total: 19, percentage: 84.2 },
  { rank: 4, name: 'נועה בן דוד', email: 'noa.bendavid@company.co.il',  attended: 15, total: 19, percentage: 78.9 },
  { rank: 5, name: 'עמית גולדשטיין', email: 'amit.gold@company.co.il', attended: 14, total: 19, percentage: 73.7 },
];

// ── Low viewing users ─────────────────────────────────────────
export const lowViewingUsers = [
  { name: 'אריאל דהן',   email: 'ariel.dahan@company.co.il',   courseName: 'Excel מתקדם',                watched: 2,  total: 10, percentage: 20   },
  { name: 'ליאור ששון',   email: 'lior.sasson@company.co.il',   courseName: 'שיווק דיגיטלי',              watched: 3,  total: 15, percentage: 20   },
  { name: 'רחל גבאי',    email: 'rachel.gabay@company.co.il',  courseName: 'עיצוב גרפי בסיסי',           watched: 1,  total: 12, percentage: 8.3  },
  { name: 'משה ברק',     email: 'moshe.barak@company.co.il',   courseName: 'אבטחת מידע',                 watched: 2,  total: 11, percentage: 18.2 },
  { name: 'שירה כץ',     email: 'shira.katz@company.co.il',    courseName: 'ניהול זמן ופרודוקטיביות',    watched: 1,  total: 7,  percentage: 14.3 },
  { name: 'עידן מלכה',   email: 'idan.malka@company.co.il',    courseName: 'כתיבה עסקית',                watched: 1,  total: 6,  percentage: 16.7 },
  { name: 'נגה אלמוג',   email: 'noga.almog@company.co.il',    courseName: 'ניהול כספים אישי',            watched: 2,  total: 8,  percentage: 25   },
];

// ── Exams & exercises ─────────────────────────────────────────
export const examsData = [
  { id: 1,  name: 'מבחן ניהול פרויקטים מתקדם',   type: 'מבחן',  courseName: 'ניהול פרויקטים מתקדם',  totalUsers: 40, passed: 30, failed: 10, passRate: 75,   averageScore: 74 },
  { id: 2,  name: 'מבחן פיתוח מנהיגות',            type: 'מבחן',  courseName: 'פיתוח מנהיגות',         totalUsers: 33, passed: 24, failed: 9,  passRate: 72.7, averageScore: 71 },
  { id: 3,  name: 'מבחן Excel מתקדם',              type: 'מבחן',  courseName: 'Excel מתקדם',           totalUsers: 38, passed: 28, failed: 10, passRate: 73.7, averageScore: 72 },
  { id: 4,  name: 'מבחן תקשורת בין-אישית',         type: 'מבחן',  courseName: 'תקשורת בין-אישית',      totalUsers: 36, passed: 29, failed: 7,  passRate: 80.6, averageScore: 78 },
  { id: 5,  name: 'מבחן שיווק דיגיטלי',            type: 'מבחן',  courseName: 'שיווק דיגיטלי',         totalUsers: 35, passed: 22, failed: 13, passRate: 62.9, averageScore: 65 },
  { id: 6,  name: 'מבחן חשיבה אסטרטגית',           type: 'מבחן',  courseName: 'חשיבה אסטרטגית',        totalUsers: 26, passed: 18, failed: 8,  passRate: 69.2, averageScore: 68 },
  { id: 7,  name: 'מבחן Python למתחילים',          type: 'מבחן',  courseName: 'Python למתחילים',       totalUsers: 43, passed: 34, failed: 9,  passRate: 79.1, averageScore: 76 },
  { id: 8,  name: 'מבחן ניהול צוותים',              type: 'מבחן',  courseName: 'ניהול צוותים',          totalUsers: 30, passed: 21, failed: 9,  passRate: 70,   averageScore: 70 },
  { id: 9,  name: 'מבחן אבטחת מידע',               type: 'מבחן',  courseName: 'אבטחת מידע',            totalUsers: 32, passed: 20, failed: 12, passRate: 62.5, averageScore: 63 },
  { id: 10, name: 'מבחן ניתוח נתונים',             type: 'מבחן',  courseName: 'ניתוח נתונים',          totalUsers: 38, passed: 20, failed: 18, passRate: 52.6, averageScore: 58 },
  { id: 11, name: 'מבחן מכירות ושירות לקוחות',      type: 'מבחן',  courseName: 'מכירות ושירות לקוחות',  totalUsers: 23, passed: 17, failed: 6,  passRate: 73.9, averageScore: 73 },
  { id: 12, name: 'מבחן בינה מלאכותית בעסקים',      type: 'מבחן',  courseName: 'בינה מלאכותית בעסקים',  totalUsers: 46, passed: 41, failed: 5,  passRate: 89.1, averageScore: 85 },
  { id: 13, name: 'מבחן חדשנות ויזמות',             type: 'מבחן',  courseName: 'חדשנות ויזמות',         totalUsers: 31, passed: 23, failed: 8,  passRate: 74.2, averageScore: 72 },
  { id: 14, name: 'מבחן ניהול שינוי ארגוני',        type: 'מבחן',  courseName: 'ניהול שינוי ארגוני',    totalUsers: 34, passed: 22, failed: 12, passRate: 64.7, averageScore: 66 },
  { id: 15, name: 'מבחן ניהול כספים אישי',          type: 'מבחן',  courseName: 'ניהול כספים אישי',      totalUsers: 28, passed: 19, failed: 9,  passRate: 67.9, averageScore: 67 },
  { id: 16, name: 'תרגול גאנט וניהול משימות',       type: 'תרגול', courseName: 'ניהול פרויקטים מתקדם',  totalUsers: 38, passed: 32, failed: 6,  passRate: 84.2, averageScore: 80 },
  { id: 17, name: 'תרגול סגנון מנהיגות אישי',       type: 'תרגול', courseName: 'פיתוח מנהיגות',         totalUsers: 30, passed: 26, failed: 4,  passRate: 86.7, averageScore: 82 },
  { id: 18, name: 'תרגול נוסחאות מתקדמות',          type: 'תרגול', courseName: 'Excel מתקדם',           totalUsers: 36, passed: 27, failed: 9,  passRate: 75,   averageScore: 73 },
  { id: 19, name: 'תרגול פיבוט טייבלס',             type: 'תרגול', courseName: 'Excel מתקדם',           totalUsers: 34, passed: 24, failed: 10, passRate: 70.6, averageScore: 69 },
  { id: 20, name: 'תרגול שיחה מאתגרת',              type: 'תרגול', courseName: 'תקשורת בין-אישית',      totalUsers: 35, passed: 30, failed: 5,  passRate: 85.7, averageScore: 81 },
  { id: 21, name: 'תרגול קמפיין דיגיטלי',           type: 'תרגול', courseName: 'שיווק דיגיטלי',         totalUsers: 33, passed: 25, failed: 8,  passRate: 75.8, averageScore: 74 },
  { id: 22, name: 'תרגול SEO בסיסי',               type: 'תרגול', courseName: 'שיווק דיגיטלי',         totalUsers: 31, passed: 22, failed: 9,  passRate: 71,   averageScore: 70 },
  { id: 25, name: 'תרגול Python - משתנים',          type: 'תרגול', courseName: 'Python למתחילים',       totalUsers: 42, passed: 38, failed: 4,  passRate: 90.5, averageScore: 86 },
  { id: 26, name: 'תרגול Python - לולאות',          type: 'תרגול', courseName: 'Python למתחילים',       totalUsers: 40, passed: 32, failed: 8,  passRate: 80,   averageScore: 77 },
  { id: 34, name: 'תרגול prompt engineering',       type: 'תרגול', courseName: 'בינה מלאכותית בעסקים',  totalUsers: 44, passed: 40, failed: 4,  passRate: 90.9, averageScore: 87 },
];

// ── Question analysis ─────────────────────────────────────────
export const questionsData = [
  { examId: 1,  examName: 'מבחן ניהול פרויקטים מתקדם',  text: "מהו הגדרת 'נתיב קריטי' בניהול פרויקטים?",       successRate: 72 },
  { examId: 1,  examName: 'מבחן ניהול פרויקטים מתקדם',  text: 'כיצד מחשבים את משך הפרויקט הצפוי בשיטת PERT?', successRate: 35 },
  { examId: 1,  examName: 'מבחן ניהול פרויקטים מתקדם',  text: 'מהם שלושת האילוצים בניהול פרויקטים?',           successRate: 88 },
  { examId: 1,  examName: 'מבחן ניהול פרויקטים מתקדם',  text: 'מהי מטריצת סיכונים ומתי משתמשים בה?',           successRate: 55 },
  { examId: 3,  examName: 'מבחן Excel מתקדם',           text: 'מהי הנוסחה VLOOKUP ומתי משתמשים בה?',           successRate: 82 },
  { examId: 3,  examName: 'מבחן Excel מתקדם',           text: 'כיצד יוצרים מאקרו ב-VBA?',                      successRate: 32 },
  { examId: 3,  examName: 'מבחן Excel מתקדם',           text: 'מהו ההבדל בין הפנייה יחסית למוחלטת?',           successRate: 76 },
  { examId: 3,  examName: 'מבחן Excel מתקדם',           text: 'כיצד משתמשים בנוסחת INDEX-MATCH?',              successRate: 38 },
  { examId: 7,  examName: 'מבחן Python למתחילים',       text: 'מהו ההבדל בין list ל-tuple?',                   successRate: 83 },
  { examId: 7,  examName: 'מבחן Python למתחילים',       text: 'כיצד כותבים לולאת for ב-Python?',               successRate: 90 },
  { examId: 7,  examName: 'מבחן Python למתחילים',       text: 'מהי רקורסיה וכיצד מממשים אותה?',                successRate: 35 },
  { examId: 7,  examName: 'מבחן Python למתחילים',       text: 'הסבר את מושג ה-OOP ב-Python',                   successRate: 48 },
  { examId: 9,  examName: 'מבחן אבטחת מידע',            text: 'מהו הצפנת SSL/TLS?',                            successRate: 62 },
  { examId: 9,  examName: 'מבחן אבטחת מידע',            text: 'מהי מתקפת פישינג וכיצד מזהים אותה?',            successRate: 84 },
  { examId: 9,  examName: 'מבחן אבטחת מידע',            text: 'הסבר את עקרון ה-Zero Trust באבטחת מידע',        successRate: 28 },
  { examId: 10, examName: 'מבחן ניתוח נתונים',          text: 'מהו ממוצע, חציון וסטיית תקן?',                  successRate: 72 },
  { examId: 10, examName: 'מבחן ניתוח נתונים',          text: 'כיצד מבצעים רגרסיה לינארית?',                   successRate: 30 },
  { examId: 10, examName: 'מבחן ניתוח נתונים',          text: 'מהי בדיקת מובהקות סטטיסטית?',                   successRate: 25 },
  { examId: 12, examName: 'מבחן בינה מלאכותית בעסקים',  text: 'מהו ההבדל בין AI ל-Machine Learning?',         successRate: 88 },
  { examId: 12, examName: 'מבחן בינה מלאכותית בעסקים',  text: 'תן דוגמה ליישום AI בשיווק',                    successRate: 92 },
  { examId: 12, examName: 'מבחן בינה מלאכותית בעסקים',  text: 'מהם סיכוני האתיקה בשימוש ב-AI?',              successRate: 78 },
];

// ── Insights ──────────────────────────────────────────────────
export const insightsData = [
  {
    id: 1,
    type: 'warning',
    title: 'נוכחות נמוכה במפגשים פרונטליים',
    text: 'נוכחות נמוכה במפגשים פרונטליים (73.2%). מומלץ לשלוח תזכורות אוטומטיות למשתמשים 24 שעות לפני כל מפגש.',
  },
  {
    id: 2,
    type: 'warning',
    title: 'צפייה נמוכה בתכנים מוקלטים',
    text: 'אחוז הצפייה בתכנים המוקלטים עומד על 61.8% בלבד. מומלץ לבדוק האם התכנים נגישים ורלוונטיים ולשלוח תזכורות אישיות.',
  },
  {
    id: 3,
    type: 'info',
    title: 'אחוז הצלחה כללי',
    text: 'אחוז ההצלחה הכללי עומד על 68.5%. מצד אחד ניתן לראות שיפור בקורסי טכנולוגיה (Python, AI), ומצד שני קורסי ניתוח נתונים ואבטחת מידע מציגים ביצועים נמוכים.',
  },
  {
    id: 4,
    type: 'success',
    title: 'הקורס המצטיין',
    text: 'קורס "בינה מלאכותית בעסקים" מציג את הביצועים הטובים ביותר עם שיעור הצלחה של 89.1% וציון ממוצע 85. ניתן להשתמש בו כמודל לקורסים אחרים.',
  },
  {
    id: 5,
    type: 'danger',
    title: 'הקורס שדורש תשומת לב',
    text: 'קורס "ניתוח נתונים" מציג ביצועים נמוכים עם שיעור הצלחה של 52.6% בלבד. מומלץ לבחון מחדש את תוכן הקורס ולספק חומרי עזר נוספים.',
  },
  {
    id: 6,
    type: 'info',
    title: 'משתמשים שלא מקפידים לצפות בקורסים מוקלטים',
    text: 'זוהו 7 משתמשים עם אחוז צפייה נמוך מ-25%. מומלץ לשלוח מייל עידוד אישי לכל אחד מהם עם קישור ישיר לתכנים.',
  },
];
