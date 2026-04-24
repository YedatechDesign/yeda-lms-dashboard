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
  text: string;
  successRate: number;
  difficulty: string;
}

export interface OverallMetrics {
  activeUsers: number;
  totalCourses: number;
  totalLearningUnits: number;
  totalExams: number;
  totalExercises: number;
  averageScore: number;
  passRate: number;
  attendanceRate: number;
  viewingRate: number;
}

// ==================== DATA ====================

export const overallMetrics: OverallMetrics = {
  activeUsers: 120,
  totalCourses: 8,
  totalLearningUnits: 32,
  totalExams: 6,
  totalExercises: 10,
  averageScore: 74,
  passRate: 71,
  attendanceRate: 76,
  viewingRate: 63,
};

export const courseTypeBreakdown: Record<string, number> = {
  "היברידי": 4,
  "מוקלט": 2,
  "פרונטלי": 2,
};

export const courses: Course[] = [
  { id: 1, name: "קורס לדוגמה א׳", type: "היברידי", sessions: 8 },
  { id: 2, name: "קורס לדוגמה ב׳", type: "פרונטלי", sessions: 6 },
  { id: 3, name: "קורס לדוגמה ג׳", type: "היברידי", sessions: 10 },
  { id: 4, name: "קורס לדוגמה ד׳", type: "מוקלט", sessions: 12 },
  { id: 5, name: "קורס לדוגמה ה׳", type: "פרונטלי", sessions: 5 },
  { id: 6, name: "קורס לדוגמה ו׳", type: "היברידי", sessions: 9 },
  { id: 7, name: "קורס לדוגמה ז׳", type: "מוקלט", sessions: 7 },
  { id: 8, name: "קורס לדוגמה ח׳", type: "היברידי", sessions: 11 },
];

export const sessionAttendance: SessionAttendance[] = [
  { courseId: 1, courseName: "קורס לדוגמה א׳", sessionName: "מפגש 1 - מבוא לנושא", registered: 30, attended: 26, absent: 4, attendancePercent: 86.7 },
  { courseId: 1, courseName: "קורס לדוגמה א׳", sessionName: "מפגש 2 - יסודות", registered: 30, attended: 24, absent: 6, attendancePercent: 80.0 },
  { courseId: 1, courseName: "קורס לדוגמה א׳", sessionName: "מפגש 3 - תרגול מעשי", registered: 30, attended: 22, absent: 8, attendancePercent: 73.3 },
  { courseId: 2, courseName: "קורס לדוגמה ב׳", sessionName: "מפגש 1 - פתיחה", registered: 25, attended: 22, absent: 3, attendancePercent: 88.0 },
  { courseId: 2, courseName: "קורס לדוגמה ב׳", sessionName: "מפגש 2 - עומק", registered: 25, attended: 19, absent: 6, attendancePercent: 76.0 },
  { courseId: 3, courseName: "קורס לדוגמה ג׳", sessionName: "מפגש 1 - הקדמה", registered: 40, attended: 35, absent: 5, attendancePercent: 87.5 },
  { courseId: 3, courseName: "קורס לדוגמה ג׳", sessionName: "מפגש 2 - פיתוח מיומנויות", registered: 40, attended: 32, absent: 8, attendancePercent: 80.0 },
  { courseId: 5, courseName: "קורס לדוגמה ה׳", sessionName: "מפגש 1 - סקירה", registered: 20, attended: 14, absent: 6, attendancePercent: 70.0 },
  { courseId: 5, courseName: "קורס לדוגמה ה׳", sessionName: "מפגש 2 - יישום", registered: 20, attended: 12, absent: 8, attendancePercent: 60.0 },
  { courseId: 6, courseName: "קורס לדוגמה ו׳", sessionName: "מפגש 1 - בסיס", registered: 35, attended: 30, absent: 5, attendancePercent: 85.7 },
];

export const topAttendanceUsers: UserAttendance[] = [
  { name: "ישראל ישראלי", email: "israel@example.com", attended: 18, total: 19, percentage: 94.7 },
  { name: "שרה כהן", email: "sarah@example.com", attended: 17, total: 19, percentage: 89.5 },
  { name: "דוד לוי", email: "david@example.com", attended: 16, total: 19, percentage: 84.2 },
  { name: "רחל מזרחי", email: "rachel@example.com", attended: 15, total: 19, percentage: 78.9 },
  { name: "יוסף אברהם", email: "yosef@example.com", attended: 14, total: 19, percentage: 73.7 },
];

export const lowAttendanceUsers: UserAttendance[] = [
  { name: "משתמש א׳", email: "user1@example.com", attended: 4, total: 19, percentage: 21.1, recommendation: "מומלץ ליצור קשר עם הלומד ולברר את הסיבה להיעדרויות החוזרות." },
  { name: "משתמש ב׳", email: "user2@example.com", attended: 5, total: 19, percentage: 26.3, recommendation: "מומלץ לשלוח תזכורת ולהציע תמיכה אישית." },
  { name: "משתמש ג׳", email: "user3@example.com", attended: 6, total: 19, percentage: 31.6, recommendation: "מומלץ לבדוק אם יש קשיים טכניים או מניעות אחרות." },
  { name: "משתמש ד׳", email: "user4@example.com", attended: 7, total: 19, percentage: 36.8, recommendation: "מומלץ לשלוח חומרים משלימים למפגשים שהוחמצו." },
];

export const lowEngagementUsers: LowEngagementUser[] = [
  { name: "משתמש ה׳", email: "user5@example.com", courseName: "קורס לדוגמה ד׳", watched: 2, total: 12, percentage: 16.7, insight: "הלומד לא צפה ברוב התכנים המוקלטים. מומלץ לשלוח תזכורת ולהדגיש את חשיבות הצפייה." },
  { name: "משתמש ו׳", email: "user6@example.com", courseName: "קורס לדוגמה ז׳", watched: 3, total: 7, percentage: 42.9, insight: "הלומד צפה בפחות ממחצית התכנים. מומלץ לבדוק אם יש בעיות גישה לפלטפורמה." },
  { name: "משתמש ז׳", email: "user7@example.com", courseName: "קורס לדוגמה ד׳", watched: 1, total: 12, percentage: 8.3, insight: "כמעט אפס צפייה בתכנים. נדרשת התערבות מיידית." },
];

export const examsAndExercises: ExamExercise[] = [
  { id: 1, name: "מבחן א׳ - יחידה 1", type: "מבחן", courseName: "קורס לדוגמה א׳", totalUsers: 28, passed: 21, failed: 7, passRate: 75, averageScore: 78 },
  { id: 2, name: "מבחן ב׳ - יחידה 2", type: "מבחן", courseName: "קורס לדוגמה ב׳", totalUsers: 23, passed: 15, failed: 8, passRate: 65, averageScore: 69 },
  { id: 3, name: "מבחן ג׳ - יחידה 1", type: "מבחן", courseName: "קורס לדוגמה ג׳", totalUsers: 38, passed: 32, failed: 6, passRate: 84, averageScore: 82 },
  { id: 4, name: "מבחן ד׳ - סיכום", type: "מבחן", courseName: "קורס לדוגמה ו׳", totalUsers: 33, passed: 20, failed: 13, passRate: 60, averageScore: 64 },
  { id: 5, name: "תרגול א׳", type: "תרגול", courseName: "קורס לדוגמה א׳", totalUsers: 28, passed: 24, failed: 4, passRate: 86, averageScore: 84 },
  { id: 6, name: "תרגול ב׳", type: "תרגול", courseName: "קורס לדוגמה ג׳", totalUsers: 38, passed: 30, failed: 8, passRate: 79, averageScore: 77 },
  { id: 7, name: "תרגול ג׳", type: "תרגול", courseName: "קורס לדוגמה ב׳", totalUsers: 23, passed: 16, failed: 7, passRate: 70, averageScore: 72 },
];

export const questionAnalysis: QuestionAnalysis[] = [
  { examId: 1, text: "שאלה לדוגמה א׳ - מושג בסיסי?", successRate: 82, difficulty: "שאלה קלה" },
  { examId: 1, text: "שאלה לדוגמה ב׳ - יישום מעשי?", successRate: 55, difficulty: "רמת קושי בינונית" },
  { examId: 1, text: "שאלה לדוגמה ג׳ - ניתוח מורכב?", successRate: 38, difficulty: "שאלה מאתגרת - רוב המשתמשים נכשלים" },
  { examId: 2, text: "שאלה לדוגמה ד׳ - הגדרה?", successRate: 78, difficulty: "שאלה קלה" },
  { examId: 2, text: "שאלה לדוגמה ה׳ - חישוב?", successRate: 42, difficulty: "רמת קושי בינונית" },
  { examId: 3, text: "שאלה לדוגמה ו׳ - השוואה?", successRate: 88, difficulty: "שאלה קלה" },
  { examId: 3, text: "שאלה לדוגמה ז׳ - הסבר?", successRate: 61, difficulty: "רמת קושי בינונית" },
  { examId: 4, text: "שאלה לדוגמה ח׳ - ניתוח מקרה?", successRate: 45, difficulty: "רמת קושי בינונית" },
  { examId: 4, text: "שאלה לדוגמה ט׳ - אתגר?", successRate: 29, difficulty: "שאלה מאתגרת - רוב המשתמשים נכשלים" },
];

export const learningSummary =
  "דשבורד זה הוא תבנית גנרית לניהול ומעקב למידה. ניתן להתאים את הנתונים, הצבעים והמינוח לפי סוג הארגון. " +
  "למוסדות לימוד — שמרו על המינוח הנוכחי. לארגונים וחברות — שנו ל׳הכשרות׳, ׳עובדים׳ ו׳תרגילים׳ עם צבע ראשי כתום.";

export const insights: string[] = [
  "אחוז ההצלחה הכללי עומד על 71% — מומלץ לבחון את רמת הקושי של המבחנים.",
  "נוכחות ממוצעת של 76% — ישנם לומדים עם היעדרויות חוזרות הדורשים מעקב.",
  "63% מהתכנים המוקלטים נצפו — מומלץ לשלוח תזכורות לצפייה בתכנים.",
  "3 שאלות מזוהות כמאתגרות מאוד — שקול הוספת חומר הכנה ממוקד.",
];
