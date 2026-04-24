// ==================== TYPES ====================

export interface Course {
  id: number;
  name: string;
  type: "היברידי" | "מוקלט" | "פרונטלי";
  sessions: number;
}

export interface SessionAttendance {
  courseId: number;
  courseName: string;
  sessionName: string;
  registered: number;
  attended: number;
  absent: number;
  attendancePercent: number;
}

export interface UserAttendance {
  name: string;
  email: string;
  attended: number;
  total: number;
  percentage: number;
  recommendation?: string;
}

export interface LowEngagementUser {
  name: string;
  email: string;
  courseName: string;
  watched: number;
  total: number;
  percentage: number;
  insight: string;
}

export interface ExamExercise {
  id: number;
  name: string;
  type: "מבחן" | "תרגול";
  courseName: string;
  totalUsers: number;
  passed: number;
  failed: number;
  passRate: number;
  averageScore: number;
}

export interface QuestionAnalysis {
  examId: number;
  examName: string;
  text: string;
  successRate: number;
  difficulty: string;
}

export interface OverallMetrics {
  averageScore: number;
  passRate: number;
  attendanceRate: number;
  viewingRate: number;
  activeUsers: number;
  totalCourses: number;
  totalLearningUnits: number;
  totalExams: number;
  totalExercises: number;
}

// ==================== COURSES ====================

export const courses: Course[] = [
  { id: 1, name: "ניהול פרויקטים מתקדם", type: "היברידי", sessions: 12 },
  { id: 2, name: "פיתוח מנהיגות", type: "פרונטלי", sessions: 8 },
  { id: 3, name: "Excel מתקדם", type: "מוקלט", sessions: 10 },
  { id: 4, name: "תקשורת בין-אישית", type: "היברידי", sessions: 9 },
  { id: 5, name: "שיווק דיגיטלי", type: "מוקלט", sessions: 15 },
  { id: 6, name: "ניהול זמן ופרודוקטיביות", type: "מוקלט", sessions: 7 },
  { id: 7, name: "חשיבה אסטרטגית", type: "פרונטלי", sessions: 6 },
  { id: 8, name: "Python למתחילים", type: "היברידי", sessions: 14 },
  { id: 9, name: "ניהול צוותים", type: "פרונטלי", sessions: 10 },
  { id: 10, name: "עיצוב גרפי בסיסי", type: "מוקלט", sessions: 12 },
  { id: 11, name: "ניהול משא ומתן", type: "היברידי", sessions: 8 },
  { id: 12, name: "אבטחת מידע", type: "מוקלט", sessions: 11 },
  { id: 13, name: "ניתוח נתונים", type: "היברידי", sessions: 13 },
  { id: 14, name: "כתיבה עסקית", type: "מוקלט", sessions: 6 },
  { id: 15, name: "מכירות ושירות לקוחות", type: "פרונטלי", sessions: 7 },
  { id: 16, name: "בינה מלאכותית בעסקים", type: "היברידי", sessions: 10 },
  { id: 17, name: "ניהול כספים אישי", type: "מוקלט", sessions: 8 },
  { id: 18, name: "חדשנות ויזמות", type: "פרונטלי", sessions: 9 },
  { id: 19, name: "ניהול שינוי ארגוני", type: "היברידי", sessions: 11 },
  { id: 20, name: "עבודה בסביבה רב-תרבותית", type: "מוקלט", sessions: 5 },
];

export const courseTypeBreakdown = {
  "היברידי": courses.filter(c => c.type === "היברידי").length,
  "מוקלט": courses.filter(c => c.type === "מוקלט").length,
  "פרונטלי": courses.filter(c => c.type === "פרונטלי").length,
};

// ==================== SESSION ATTENDANCE ====================

export const sessionAttendance: SessionAttendance[] = [
  // ניהול פרויקטים מתקדם (היברידי) - 12 sessions
  { courseId: 1, courseName: "ניהול פרויקטים מתקדם", sessionName: "מפגש 1 - מבוא לניהול פרויקטים", registered: 42, attended: 38, absent: 4, attendancePercent: 90.5 },
  { courseId: 1, courseName: "ניהול פרויקטים מתקדם", sessionName: "מפגש 2 - תכנון ולוחות זמנים", registered: 42, attended: 35, absent: 7, attendancePercent: 83.3 },
  { courseId: 1, courseName: "ניהול פרויקטים מתקדם", sessionName: "מפגש 3 - ניהול סיכונים", registered: 42, attended: 31, absent: 11, attendancePercent: 73.8 },
  // פיתוח מנהיגות (פרונטלי) - 8 sessions
  { courseId: 2, courseName: "פיתוח מנהיגות", sessionName: "מפגש 1 - מהי מנהיגות?", registered: 35, attended: 30, absent: 5, attendancePercent: 85.7 },
  { courseId: 2, courseName: "פיתוח מנהיגות", sessionName: "מפגש 2 - סגנונות מנהיגות", registered: 35, attended: 28, absent: 7, attendancePercent: 80.0 },
  { courseId: 2, courseName: "פיתוח מנהיגות", sessionName: "מפגש 3 - הנעת עובדים", registered: 35, attended: 25, absent: 10, attendancePercent: 71.4 },
  // תקשורת בין-אישית (היברידי) - 9 sessions
  { courseId: 4, courseName: "תקשורת בין-אישית", sessionName: "מפגש 1 - עקרונות התקשורת", registered: 38, attended: 33, absent: 5, attendancePercent: 86.8 },
  { courseId: 4, courseName: "תקשורת בין-אישית", sessionName: "מפגש 2 - הקשבה פעילה", registered: 38, attended: 29, absent: 9, attendancePercent: 76.3 },
  { courseId: 4, courseName: "תקשורת בין-אישית", sessionName: "מפגש 3 - ניהול קונפליקטים", registered: 38, attended: 26, absent: 12, attendancePercent: 68.4 },
  // חשיבה אסטרטגית (פרונטלי) - 6 sessions
  { courseId: 7, courseName: "חשיבה אסטרטגית", sessionName: "מפגש 1 - חשיבה מערכתית", registered: 28, attended: 24, absent: 4, attendancePercent: 85.7 },
  { courseId: 7, courseName: "חשיבה אסטרטגית", sessionName: "מפגש 2 - ניתוח SWOT", registered: 28, attended: 21, absent: 7, attendancePercent: 75.0 },
  // Python למתחילים (היברידי) - 14 sessions
  { courseId: 8, courseName: "Python למתחילים", sessionName: "מפגש 1 - התקנה והכרות", registered: 45, attended: 42, absent: 3, attendancePercent: 93.3 },
  { courseId: 8, courseName: "Python למתחילים", sessionName: "מפגש 2 - משתנים וטיפוסים", registered: 45, attended: 39, absent: 6, attendancePercent: 86.7 },
  { courseId: 8, courseName: "Python למתחילים", sessionName: "מפגש 3 - לולאות ותנאים", registered: 45, attended: 35, absent: 10, attendancePercent: 77.8 },
  // ניהול צוותים (פרונטלי) - 10 sessions
  { courseId: 9, courseName: "ניהול צוותים", sessionName: "מפגש 1 - בניית צוות", registered: 32, attended: 27, absent: 5, attendancePercent: 84.4 },
  { courseId: 9, courseName: "ניהול צוותים", sessionName: "מפגש 2 - דינמיקה קבוצתית", registered: 32, attended: 24, absent: 8, attendancePercent: 75.0 },
  { courseId: 9, courseName: "ניהול צוותים", sessionName: "מפגש 3 - ניהול ביצועים", registered: 32, attended: 22, absent: 10, attendancePercent: 68.8 },
  // ניהול משא ומתן (היברידי) - 8 sessions
  { courseId: 11, courseName: "ניהול משא ומתן", sessionName: "מפגש 1 - עקרונות המשא ומתן", registered: 30, attended: 26, absent: 4, attendancePercent: 86.7 },
  { courseId: 11, courseName: "ניהול משא ומתן", sessionName: "מפגש 2 - טכניקות שכנוע", registered: 30, attended: 22, absent: 8, attendancePercent: 73.3 },
  // ניתוח נתונים (היברידי) - 13 sessions
  { courseId: 13, courseName: "ניתוח נתונים", sessionName: "מפגש 1 - מבוא לניתוח נתונים", registered: 40, attended: 36, absent: 4, attendancePercent: 90.0 },
  { courseId: 13, courseName: "ניתוח נתונים", sessionName: "מפגש 2 - כלים סטטיסטיים", registered: 40, attended: 30, absent: 10, attendancePercent: 75.0 },
  { courseId: 13, courseName: "ניתוח נתונים", sessionName: "מפגש 3 - ויזואליזציה", registered: 40, attended: 28, absent: 12, attendancePercent: 70.0 },
  // מכירות ושירות לקוחות (פרונטלי) - 7 sessions
  { courseId: 15, courseName: "מכירות ושירות לקוחות", sessionName: "מפגש 1 - יסודות המכירה", registered: 25, attended: 20, absent: 5, attendancePercent: 80.0 },
  { courseId: 15, courseName: "מכירות ושירות לקוחות", sessionName: "מפגש 2 - שירות מצוין", registered: 25, attended: 18, absent: 7, attendancePercent: 72.0 },
  // בינה מלאכותית בעסקים (היברידי) - 10 sessions
  { courseId: 16, courseName: "בינה מלאכותית בעסקים", sessionName: "מפגש 1 - מהי בינה מלאכותית?", registered: 48, attended: 45, absent: 3, attendancePercent: 93.8 },
  { courseId: 16, courseName: "בינה מלאכותית בעסקים", sessionName: "מפגש 2 - יישומים עסקיים", registered: 48, attended: 41, absent: 7, attendancePercent: 85.4 },
  { courseId: 16, courseName: "בינה מלאכותית בעסקים", sessionName: "מפגש 3 - כלים מעשיים", registered: 48, attended: 38, absent: 10, attendancePercent: 79.2 },
  // חדשנות ויזמות (פרונטלי) - 9 sessions
  { courseId: 18, courseName: "חדשנות ויזמות", sessionName: "מפגש 1 - חשיבה יצירתית", registered: 33, attended: 28, absent: 5, attendancePercent: 84.8 },
  { courseId: 18, courseName: "חדשנות ויזמות", sessionName: "מפגש 2 - מודל עסקי", registered: 33, attended: 25, absent: 8, attendancePercent: 75.8 },
  // ניהול שינוי ארגוני (היברידי) - 11 sessions
  { courseId: 19, courseName: "ניהול שינוי ארגוני", sessionName: "מפגש 1 - תיאוריות שינוי", registered: 36, attended: 31, absent: 5, attendancePercent: 86.1 },
  { courseId: 19, courseName: "ניהול שינוי ארגוני", sessionName: "מפגש 2 - התנגדות לשינוי", registered: 36, attended: 27, absent: 9, attendancePercent: 75.0 },
  { courseId: 19, courseName: "ניהול שינוי ארגוני", sessionName: "מפגש 3 - ניהול מעבר", registered: 36, attended: 24, absent: 12, attendancePercent: 66.7 },
];

// ==================== TOP ATTENDANCE USERS ====================

export const topAttendanceUsers: UserAttendance[] = [
  { name: "דנה כהן", email: "dana.cohen@company.co.il", attended: 18, total: 19, percentage: 94.7 },
  { name: "יוסף לוי", email: "yosef.levi@company.co.il", attended: 17, total: 19, percentage: 89.5 },
  { name: "מיכל אברהם", email: "michal.avraham@company.co.il", attended: 17, total: 19, percentage: 89.5 },
  { name: "אורי שפירא", email: "ori.shapira@company.co.il", attended: 16, total: 19, percentage: 84.2 },
  { name: "נועה בן דוד", email: "noa.bendavid@company.co.il", attended: 16, total: 19, percentage: 84.2 },
];

// ==================== LOW ATTENDANCE USERS ====================

const lowAttendanceRecommendation = "מומלץ לשלוח הודעת תזכורת / מייל תזכורת לגבי מפגשים קרובים בקורס";

export const lowAttendanceUsers: UserAttendance[] = [
  { name: "רונן מזרחי", email: "ronen.mizrachi@company.co.il", attended: 3, total: 19, percentage: 15.8, recommendation: lowAttendanceRecommendation },
  { name: "שרה חדד", email: "sara.hadad@company.co.il", attended: 5, total: 19, percentage: 26.3, recommendation: lowAttendanceRecommendation },
  { name: "אלון ביטון", email: "alon.biton@company.co.il", attended: 4, total: 19, percentage: 21.1, recommendation: lowAttendanceRecommendation },
  { name: "הילה נחום", email: "hila.nachum@company.co.il", attended: 6, total: 19, percentage: 31.6, recommendation: lowAttendanceRecommendation },
  { name: "עמית גולדשטיין", email: "amit.goldstein@company.co.il", attended: 7, total: 19, percentage: 36.8, recommendation: lowAttendanceRecommendation },
  { name: "יעל פרץ", email: "yael.peretz@company.co.il", attended: 5, total: 19, percentage: 26.3, recommendation: lowAttendanceRecommendation },
  { name: "תומר אזולאי", email: "tomer.azulay@company.co.il", attended: 8, total: 19, percentage: 42.1, recommendation: lowAttendanceRecommendation },
];

// ==================== LOW ENGAGEMENT - RECORDED COURSES ====================

const lowEngagementInsight = "המשתמש אינו צופה בתכני הקורס באופן סדיר. מומלץ לשלוח תזכורת אישית או מייל עידוד להמשך למידה.";

export const lowEngagementUsers: LowEngagementUser[] = [
  { name: "אריאל דהן", email: "ariel.dahan@company.co.il", courseName: "Excel מתקדם", watched: 2, total: 10, percentage: 20.0, insight: lowEngagementInsight },
  { name: "ליאור ששון", email: "lior.sasson@company.co.il", courseName: "שיווק דיגיטלי", watched: 3, total: 15, percentage: 20.0, insight: lowEngagementInsight },
  { name: "רחל גבאי", email: "rachel.gabay@company.co.il", courseName: "עיצוב גרפי בסיסי", watched: 1, total: 12, percentage: 8.3, insight: lowEngagementInsight },
  { name: "משה ברק", email: "moshe.barak@company.co.il", courseName: "אבטחת מידע", watched: 2, total: 11, percentage: 18.2, insight: lowEngagementInsight },
  { name: "שירה כץ", email: "shira.katz@company.co.il", courseName: "ניהול זמן ופרודוקטיביות", watched: 1, total: 7, percentage: 14.3, insight: lowEngagementInsight },
  { name: "עידן מלכה", email: "idan.malka@company.co.il", courseName: "כתיבה עסקית", watched: 1, total: 6, percentage: 16.7, insight: lowEngagementInsight },
  { name: "נגה אלמוג", email: "noga.almog@company.co.il", courseName: "ניהול כספים אישי", watched: 2, total: 8, percentage: 25.0, insight: lowEngagementInsight },
];

// ==================== EXAMS & EXERCISES ====================

export const examsAndExercises: ExamExercise[] = [
  // Exams (15)
  { id: 1, name: "מבחן ניהול פרויקטים מתקדם", type: "מבחן", courseName: "ניהול פרויקטים מתקדם", totalUsers: 40, passed: 30, failed: 10, passRate: 75.0, averageScore: 74 },
  { id: 2, name: "מבחן פיתוח מנהיגות", type: "מבחן", courseName: "פיתוח מנהיגות", totalUsers: 33, passed: 24, failed: 9, passRate: 72.7, averageScore: 71 },
  { id: 3, name: "מבחן Excel מתקדם", type: "מבחן", courseName: "Excel מתקדם", totalUsers: 38, passed: 28, failed: 10, passRate: 73.7, averageScore: 72 },
  { id: 4, name: "מבחן תקשורת בין-אישית", type: "מבחן", courseName: "תקשורת בין-אישית", totalUsers: 36, passed: 29, failed: 7, passRate: 80.6, averageScore: 78 },
  { id: 5, name: "מבחן שיווק דיגיטלי", type: "מבחן", courseName: "שיווק דיגיטלי", totalUsers: 35, passed: 22, failed: 13, passRate: 62.9, averageScore: 65 },
  { id: 6, name: "מבחן חשיבה אסטרטגית", type: "מבחן", courseName: "חשיבה אסטרטגית", totalUsers: 26, passed: 18, failed: 8, passRate: 69.2, averageScore: 68 },
  { id: 7, name: "מבחן Python למתחילים", type: "מבחן", courseName: "Python למתחילים", totalUsers: 43, passed: 34, failed: 9, passRate: 79.1, averageScore: 76 },
  { id: 8, name: "מבחן ניהול צוותים", type: "מבחן", courseName: "ניהול צוותים", totalUsers: 30, passed: 21, failed: 9, passRate: 70.0, averageScore: 70 },
  { id: 9, name: "מבחן אבטחת מידע", type: "מבחן", courseName: "אבטחת מידע", totalUsers: 32, passed: 20, failed: 12, passRate: 62.5, averageScore: 63 },
  { id: 10, name: "מבחן ניתוח נתונים", type: "מבחן", courseName: "ניתוח נתונים", totalUsers: 38, passed: 20, failed: 18, passRate: 52.6, averageScore: 58 },
  { id: 11, name: "מבחן מכירות ושירות לקוחות", type: "מבחן", courseName: "מכירות ושירות לקוחות", totalUsers: 23, passed: 17, failed: 6, passRate: 73.9, averageScore: 73 },
  { id: 12, name: "מבחן בינה מלאכותית בעסקים", type: "מבחן", courseName: "בינה מלאכותית בעסקים", totalUsers: 46, passed: 41, failed: 5, passRate: 89.1, averageScore: 85 },
  { id: 13, name: "מבחן חדשנות ויזמות", type: "מבחן", courseName: "חדשנות ויזמות", totalUsers: 31, passed: 23, failed: 8, passRate: 74.2, averageScore: 72 },
  { id: 14, name: "מבחן ניהול שינוי ארגוני", type: "מבחן", courseName: "ניהול שינוי ארגוני", totalUsers: 34, passed: 22, failed: 12, passRate: 64.7, averageScore: 66 },
  { id: 15, name: "מבחן ניהול כספים אישי", type: "מבחן", courseName: "ניהול כספים אישי", totalUsers: 28, passed: 19, failed: 9, passRate: 67.9, averageScore: 67 },
  // Exercises (22)
  { id: 16, name: "תרגול גאנט וניהול משימות", type: "תרגול", courseName: "ניהול פרויקטים מתקדם", totalUsers: 38, passed: 32, failed: 6, passRate: 84.2, averageScore: 80 },
  { id: 17, name: "תרגול סגנון מנהיגות אישי", type: "תרגול", courseName: "פיתוח מנהיגות", totalUsers: 30, passed: 26, failed: 4, passRate: 86.7, averageScore: 82 },
  { id: 18, name: "תרגול נוסחאות מתקדמות", type: "תרגול", courseName: "Excel מתקדם", totalUsers: 36, passed: 27, failed: 9, passRate: 75.0, averageScore: 73 },
  { id: 19, name: "תרגול פיבוט טייבלס", type: "תרגול", courseName: "Excel מתקדם", totalUsers: 34, passed: 24, failed: 10, passRate: 70.6, averageScore: 69 },
  { id: 20, name: "תרגול שיחה מאתגרת", type: "תרגול", courseName: "תקשורת בין-אישית", totalUsers: 35, passed: 30, failed: 5, passRate: 85.7, averageScore: 81 },
  { id: 21, name: "תרגול קמפיין דיגיטלי", type: "תרגול", courseName: "שיווק דיגיטלי", totalUsers: 33, passed: 25, failed: 8, passRate: 75.8, averageScore: 74 },
  { id: 22, name: "תרגול SEO בסיסי", type: "תרגול", courseName: "שיווק דיגיטלי", totalUsers: 31, passed: 22, failed: 9, passRate: 71.0, averageScore: 70 },
  { id: 23, name: "תרגול תכנון שבועי", type: "תרגול", courseName: "ניהול זמן ופרודוקטיביות", totalUsers: 25, passed: 21, failed: 4, passRate: 84.0, averageScore: 79 },
  { id: 24, name: "תרגול ניתוח מקרה עסקי", type: "תרגול", courseName: "חשיבה אסטרטגית", totalUsers: 24, passed: 18, failed: 6, passRate: 75.0, averageScore: 73 },
  { id: 25, name: "תרגול Python - משתנים", type: "תרגול", courseName: "Python למתחילים", totalUsers: 42, passed: 38, failed: 4, passRate: 90.5, averageScore: 86 },
  { id: 26, name: "תרגול Python - לולאות", type: "תרגול", courseName: "Python למתחילים", totalUsers: 40, passed: 32, failed: 8, passRate: 80.0, averageScore: 77 },
  { id: 27, name: "תרגול Python - פונקציות", type: "תרגול", courseName: "Python למתחילים", totalUsers: 38, passed: 28, failed: 10, passRate: 73.7, averageScore: 72 },
  { id: 28, name: "תרגול ניהול ישיבת צוות", type: "תרגול", courseName: "ניהול צוותים", totalUsers: 28, passed: 23, failed: 5, passRate: 82.1, averageScore: 78 },
  { id: 29, name: "תרגול עיצוב לוגו", type: "תרגול", courseName: "עיצוב גרפי בסיסי", totalUsers: 30, passed: 24, failed: 6, passRate: 80.0, averageScore: 76 },
  { id: 30, name: "תרגול זיהוי איומים", type: "תרגול", courseName: "אבטחת מידע", totalUsers: 29, passed: 20, failed: 9, passRate: 69.0, averageScore: 68 },
  { id: 31, name: "תרגול ניתוח גרפים", type: "תרגול", courseName: "ניתוח נתונים", totalUsers: 36, passed: 24, failed: 12, passRate: 66.7, averageScore: 65 },
  { id: 32, name: "תרגול דוח BI", type: "תרגול", courseName: "ניתוח נתונים", totalUsers: 34, passed: 21, failed: 13, passRate: 61.8, averageScore: 62 },
  { id: 33, name: "תרגול מכירה טלפונית", type: "תרגול", courseName: "מכירות ושירות לקוחות", totalUsers: 22, passed: 18, failed: 4, passRate: 81.8, averageScore: 77 },
  { id: 34, name: "תרגול prompt engineering", type: "תרגול", courseName: "בינה מלאכותית בעסקים", totalUsers: 44, passed: 40, failed: 4, passRate: 90.9, averageScore: 87 },
  { id: 35, name: "תרגול חשיבה יצירתית", type: "תרגול", courseName: "חדשנות ויזמות", totalUsers: 29, passed: 24, failed: 5, passRate: 82.8, averageScore: 79 },
  { id: 36, name: "תרגול תוכנית שינוי", type: "תרגול", courseName: "ניהול שינוי ארגוני", totalUsers: 32, passed: 23, failed: 9, passRate: 71.9, averageScore: 70 },
  { id: 37, name: "תרגול תקציב אישי", type: "תרגול", courseName: "ניהול כספים אישי", totalUsers: 26, passed: 21, failed: 5, passRate: 80.8, averageScore: 76 },
];

// ==================== QUESTION ANALYSIS ====================

function getDifficulty(rate: number): string {
  if (rate > 80) return "שאלה קלה";
  if (rate < 40) return "שאלה מאתגרת - רוב המשתמשים נכשלים";
  return "רמת קושי בינונית";
}

export const questionAnalysis: QuestionAnalysis[] = [
  // מבחן ניהול פרויקטים מתקדם
  { examId: 1, examName: "מבחן ניהול פרויקטים מתקדם", text: "מהו הגדרת 'נתיב קריטי' בניהול פרויקטים?", successRate: 72, difficulty: getDifficulty(72) },
  { examId: 1, examName: "מבחן ניהול פרויקטים מתקדם", text: "כיצד מחשבים את משך הפרויקט הצפוי בשיטת PERT?", successRate: 35, difficulty: getDifficulty(35) },
  { examId: 1, examName: "מבחן ניהול פרויקטים מתקדם", text: "מהם שלושת האילוצים בניהול פרויקטים?", successRate: 88, difficulty: getDifficulty(88) },
  { examId: 1, examName: "מבחן ניהול פרויקטים מתקדם", text: "מהי מטריצת סיכונים ומתי משתמשים בה?", successRate: 55, difficulty: getDifficulty(55) },
  // מבחן פיתוח מנהיגות
  { examId: 2, examName: "מבחן פיתוח מנהיגות", text: "מהו ההבדל בין מנהיגות טרנספורמטיבית לטרנזקציונלית?", successRate: 58, difficulty: getDifficulty(58) },
  { examId: 2, examName: "מבחן פיתוח מנהיגות", text: "תאר שלושה סגנונות מנהיגות לפי גולמן", successRate: 45, difficulty: getDifficulty(45) },
  { examId: 2, examName: "מבחן פיתוח מנהיגות", text: "מהי אינטליגנציה רגשית?", successRate: 85, difficulty: getDifficulty(85) },
  // מבחן Excel מתקדם
  { examId: 3, examName: "מבחן Excel מתקדם", text: "מהי הנוסחה VLOOKUP ומתי משתמשים בה?", successRate: 82, difficulty: getDifficulty(82) },
  { examId: 3, examName: "מבחן Excel מתקדם", text: "כיצד יוצרים מאקרו ב-VBA?", successRate: 32, difficulty: getDifficulty(32) },
  { examId: 3, examName: "מבחן Excel מתקדם", text: "מהו ההבדל בין הפנייה יחסית למוחלטת?", successRate: 76, difficulty: getDifficulty(76) },
  { examId: 3, examName: "מבחן Excel מתקדם", text: "כיצד משתמשים בנוסחת INDEX-MATCH?", successRate: 38, difficulty: getDifficulty(38) },
  // מבחן תקשורת בין-אישית
  { examId: 4, examName: "מבחן תקשורת בין-אישית", text: "מהם עקרונות ההקשבה הפעילה?", successRate: 91, difficulty: getDifficulty(91) },
  { examId: 4, examName: "מבחן תקשורת בין-אישית", text: "כיצד מנהלים קונפליקט באופן בונה?", successRate: 63, difficulty: getDifficulty(63) },
  { examId: 4, examName: "מבחן תקשורת בין-אישית", text: "מהו מודל התקשורת הלא-אלימה?", successRate: 70, difficulty: getDifficulty(70) },
  // מבחן שיווק דיגיטלי
  { examId: 5, examName: "מבחן שיווק דיגיטלי", text: "מהו CTR וכיצד מחשבים אותו?", successRate: 75, difficulty: getDifficulty(75) },
  { examId: 5, examName: "מבחן שיווק דיגיטלי", text: "הסבר את מודל AIDA בשיווק", successRate: 52, difficulty: getDifficulty(52) },
  { examId: 5, examName: "מבחן שיווק דיגיטלי", text: "מהי אסטרטגיית remarketing?", successRate: 38, difficulty: getDifficulty(38) },
  // מבחן חשיבה אסטרטגית
  { examId: 6, examName: "מבחן חשיבה אסטרטגית", text: "מהם ארבעת הרכיבים של ניתוח SWOT?", successRate: 89, difficulty: getDifficulty(89) },
  { examId: 6, examName: "מבחן חשיבה אסטרטגית", text: "כיצד מבצעים ניתוח תחרותי לפי פורטר?", successRate: 42, difficulty: getDifficulty(42) },
  { examId: 6, examName: "מבחן חשיבה אסטרטגית", text: "מהי אסטרטגיית אוקיינוס כחול?", successRate: 55, difficulty: getDifficulty(55) },
  // מבחן Python למתחילים
  { examId: 7, examName: "מבחן Python למתחילים", text: "מהו ההבדל בין list ל-tuple?", successRate: 83, difficulty: getDifficulty(83) },
  { examId: 7, examName: "מבחן Python למתחילים", text: "כיצד כותבים לולאת for ב-Python?", successRate: 90, difficulty: getDifficulty(90) },
  { examId: 7, examName: "מבחן Python למתחילים", text: "מהי רקורסיה וכיצד מממשים אותה?", successRate: 35, difficulty: getDifficulty(35) },
  { examId: 7, examName: "מבחן Python למתחילים", text: "הסבר את מושג ה-OOP ב-Python", successRate: 48, difficulty: getDifficulty(48) },
  // מבחן ניהול צוותים
  { examId: 8, examName: "מבחן ניהול צוותים", text: "מהם שלבי ההתפתחות של צוות לפי טאקמן?", successRate: 68, difficulty: getDifficulty(68) },
  { examId: 8, examName: "מבחן ניהול צוותים", text: "כיצד מנהלים ישיבת צוות אפקטיבית?", successRate: 82, difficulty: getDifficulty(82) },
  { examId: 8, examName: "מבחן ניהול צוותים", text: "מהי דינמיקה קבוצתית?", successRate: 75, difficulty: getDifficulty(75) },
  // מבחן אבטחת מידע
  { examId: 9, examName: "מבחן אבטחת מידע", text: "מהו הצפנת SSL/TLS?", successRate: 62, difficulty: getDifficulty(62) },
  { examId: 9, examName: "מבחן אבטחת מידע", text: "מהי מתקפת פישינג וכיצד מזהים אותה?", successRate: 84, difficulty: getDifficulty(84) },
  { examId: 9, examName: "מבחן אבטחת מידע", text: "הסבר את עקרון ה-Zero Trust באבטחת מידע", successRate: 28, difficulty: getDifficulty(28) },
  // מבחן ניתוח נתונים
  { examId: 10, examName: "מבחן ניתוח נתונים", text: "מהו ממוצע, חציון וסטיית תקן?", successRate: 72, difficulty: getDifficulty(72) },
  { examId: 10, examName: "מבחן ניתוח נתונים", text: "כיצד מבצעים רגרסיה לינארית?", successRate: 30, difficulty: getDifficulty(30) },
  { examId: 10, examName: "מבחן ניתוח נתונים", text: "מהם סוגי הגרפים המרכזיים ומתי להשתמש בכל אחד?", successRate: 65, difficulty: getDifficulty(65) },
  { examId: 10, examName: "מבחן ניתוח נתונים", text: "מהי בדיקת מובהקות סטטיסטית?", successRate: 25, difficulty: getDifficulty(25) },
  // מבחן מכירות ושירות לקוחות
  { examId: 11, examName: "מבחן מכירות ושירות לקוחות", text: "מהם שלבי תהליך המכירה?", successRate: 86, difficulty: getDifficulty(86) },
  { examId: 11, examName: "מבחן מכירות ושירות לקוחות", text: "כיצד מטפלים בהתנגדות של לקוח?", successRate: 58, difficulty: getDifficulty(58) },
  { examId: 11, examName: "מבחן מכירות ושירות לקוחות", text: "מהו NPS וכיצד מחשבים אותו?", successRate: 65, difficulty: getDifficulty(65) },
  // מבחן בינה מלאכותית בעסקים
  { examId: 12, examName: "מבחן בינה מלאכותית בעסקים", text: "מהו ההבדל בין AI ל-Machine Learning?", successRate: 88, difficulty: getDifficulty(88) },
  { examId: 12, examName: "מבחן בינה מלאכותית בעסקים", text: "תן דוגמה ליישום AI בשיווק", successRate: 92, difficulty: getDifficulty(92) },
  { examId: 12, examName: "מבחן בינה מלאכותית בעסקים", text: "מהם סיכוני האתיקה בשימוש ב-AI?", successRate: 78, difficulty: getDifficulty(78) },
  // מבחן חדשנות ויזמות
  { examId: 13, examName: "מבחן חדשנות ויזמות", text: "מהו מודל עסקי Canvas?", successRate: 70, difficulty: getDifficulty(70) },
  { examId: 13, examName: "מבחן חדשנות ויזמות", text: "הסבר את מושג ה-MVP", successRate: 82, difficulty: getDifficulty(82) },
  { examId: 13, examName: "מבחן חדשנות ויזמות", text: "כיצד מבצעים ולידציה לרעיון עסקי?", successRate: 55, difficulty: getDifficulty(55) },
  // מבחן ניהול שינוי ארגוני
  { examId: 14, examName: "מבחן ניהול שינוי ארגוני", text: "מהם 8 השלבים של קוטר לניהול שינוי?", successRate: 40, difficulty: getDifficulty(40) },
  { examId: 14, examName: "מבחן ניהול שינוי ארגוני", text: "כיצד מתמודדים עם התנגדות לשינוי?", successRate: 68, difficulty: getDifficulty(68) },
  { examId: 14, examName: "מבחן ניהול שינוי ארגוני", text: "מהו מודל ADKAR?", successRate: 33, difficulty: getDifficulty(33) },
  // מבחן ניהול כספים אישי
  { examId: 15, examName: "מבחן ניהול כספים אישי", text: "מהו תקציב אישי וכיצד בונים אותו?", successRate: 87, difficulty: getDifficulty(87) },
  { examId: 15, examName: "מבחן ניהול כספים אישי", text: "מהי ריבית דריבית?", successRate: 72, difficulty: getDifficulty(72) },
  { examId: 15, examName: "מבחן ניהול כספים אישי", text: "הסבר את מושג ה-ROI", successRate: 65, difficulty: getDifficulty(65) },
];

// ==================== OVERALL METRICS ====================

export const overallMetrics: OverallMetrics = {
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

// ==================== INSIGHTS & RECOMMENDATIONS ====================

export const insights: string[] = [
  "אחוז ההצלחה הכללי עומד על 68.5%, מתחת ליעד של 70%. מומלץ לבחון מחדש את רמת הקושי של המבחנים ולהוסיף חומרי עזר ותרגולים נוספים.",
  "נוכחות נמוכה במפגשים פרונטליים (73.2%). מומלץ לשלוח תזכורות אוטומטיות למשתמשים 24 שעות לפני כל מפגש.",
  "אחוז הצפייה בתכנים המוקלטים עומד על 61.8% בלבד. מומלץ לבדוק האם התכנים נגישים מספיק ולשלוח עידודים אישיים למשתמשים שלא צופים.",
  "הקורס 'בינה מלאכותית בעסקים' מציג את שיעור ההצלחה הגבוה ביותר (89.1%). מומלץ ללמוד מהמודל שלו וליישם גישה דומה בקורסים אחרים.",
  "הקורס 'ניתוח נתונים' מציג את שיעור ההצלחה הנמוך ביותר (52.6%). מומלץ להוסיף שיעורי תגבור, תרגול נוסף וחומרי עזר מותאמים.",
  "7 משתמשים עם נוכחות מתחת ל-50%. מומלץ ליצור קשר ישיר עם משתמשים אלה ולבדוק אם ישנם חסמים טכניים או לוגיסטיים.",
];

// ==================== LEARNING STATUS SUMMARY ====================

export const learningSummary = "מצב הלמידה הכללי בפלטפורמה מציג מגמות מעורבות. מצד אחד, ישנם קורסים עם שיעורי הצלחה גבוהים כגון 'בינה מלאכותית בעסקים' ו-'Python למתחילים', ומשתמשים מסורים שנוכחים כמעט בכל המפגשים. מצד שני, ישנם אתגרים משמעותיים בנוכחות במפגשים חיים ובצפייה בתכנים מוקלטים, כאשר חלק מהמשתמשים מציגים מעורבות נמוכה מאוד. מומלץ להתמקד בשיפור חוויית הלמידה, שליחת תזכורות אוטומטיות, והוספת חומרי עזר לקורסים עם שיעורי הצלחה נמוכים. בנוסף, יש לתת תשומת לב מיוחדת למשתמשים עם נוכחות נמוכה ולעודד אותם לחזור למסלול הלמידה.";
