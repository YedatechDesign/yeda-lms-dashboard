import {
  Users,
  BookOpen,
  Layers,
  GraduationCap,
  Trophy,
  UserCheck,
  Eye,
  Target,
  Lightbulb,
  TrendingUp,
  TrendingDown,
  AlertTriangle,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { MetricCard } from "../components/MetricCard";
import {
  overallMetrics,
  insights,
  learningSummary,
  examsAndExercises,
} from "../data/mockData";
import { Link } from "react-router";

const exams = examsAndExercises.filter((e) => e.type === "מבחן");
const bestExam = exams.reduce((best, e) => (e.passRate > best.passRate ? e : best), exams[0]);
const worstExam = exams.reduce((worst, e) => (e.passRate < worst.passRate ? e : worst), exams[0]);

const insightIcons = [
  { icon: AlertTriangle, color: "#EF4444", bg: "#FEF2F2" },
  { icon: UserCheck, color: "#F59E0B", bg: "#FFFBEB" },
  { icon: Eye, color: "#F59E0B", bg: "#FFFBEB" },
  { icon: TrendingUp, color: "#10B981", bg: "#ECFDF5" },
  { icon: TrendingDown, color: "#EF4444", bg: "#FEF2F2" },
  { icon: Users, color: "#6366F1", bg: "#EEF2FF" },
];

export function InsightsPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[#0B1437]">אינסייטים כלליים</h1>
        <p className="text-sm text-muted-foreground mt-1">
          תובנות, מדדים והמלצות לשיפור חוויית הלמידה
        </p>
      </div>

      {/* Overall Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="ציון ממוצע כללי"
          value={`${overallMetrics.averageScore}%`}
          icon={Target}
          color="#6366F1"
        />
        <MetricCard
          title="אחוז הצלחה כללי"
          value={`${overallMetrics.passRate}%`}
          icon={Trophy}
          color={overallMetrics.passRate >= 70 ? "#10B981" : "#EF4444"}
        />
        <MetricCard
          title="אחוז נוכחות כללי"
          value={`${overallMetrics.attendanceRate}%`}
          icon={UserCheck}
          color="#22D3EE"
        />
        <MetricCard
          title="צפייה בתכנים מוקלטים"
          value={`${overallMetrics.viewingRate}%`}
          icon={Eye}
          color="#F59E0B"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="משתמשים פעילים"
          value={overallMetrics.activeUsers}
          icon={Users}
          color="#6366F1"
        />
        <MetricCard
          title="סה״כ קורסים"
          value={overallMetrics.totalCourses}
          icon={BookOpen}
          color="#22D3EE"
        />
        <MetricCard
          title="סה״כ לומדות"
          value={overallMetrics.totalLearningUnits}
          icon={Layers}
          color="#10B981"
        />
        <MetricCard
          title="מבחנים ותרגולים"
          value={overallMetrics.totalExams + overallMetrics.totalExercises}
          icon={GraduationCap}
          color="#F59E0B"
        />
      </div>

      {/* Best and Worst Course */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="border-r-4 border-r-emerald-500">
          <CardHeader>
            <CardTitle className="text-[#0B1437] flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-emerald-600" />
              הקורס המצטיין
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7 text-emerald-600" />
              </div>
              <div>
                <h3 className="text-[#0B1437]">{bestExam.courseName}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  אחוז הצלחה:{" "}
                  <span className="text-emerald-600" style={{ fontWeight: 700 }}>
                    {bestExam.passRate}%
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  ציון ממוצע:{" "}
                  <span className="text-emerald-600" style={{ fontWeight: 700 }}>
                    {bestExam.averageScore}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-r-4 border-r-red-500">
          <CardHeader>
            <CardTitle className="text-[#0B1437] flex items-center gap-2">
              <TrendingDown className="w-5 h-5 text-red-500" />
              הקורס שדורש תשומת לב
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center">
                <AlertTriangle className="w-7 h-7 text-red-500" />
              </div>
              <div>
                <h3 className="text-[#0B1437]">{worstExam.courseName}</h3>
                <p className="text-sm text-muted-foreground mt-0.5">
                  אחוז הצלחה:{" "}
                  <span className="text-red-600" style={{ fontWeight: 700 }}>
                    {worstExam.passRate}%
                  </span>
                </p>
                <p className="text-sm text-muted-foreground">
                  ציון ממוצע:{" "}
                  <span className="text-red-600" style={{ fontWeight: 700 }}>
                    {worstExam.averageScore}
                  </span>
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Insights & Recommendations */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0B1437] flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-[#F59E0B]" />
            אינסייטים והמלצות
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {insights.map((insight, i) => {
              const iconData = insightIcons[i] || insightIcons[0];
              const IconComp = iconData.icon;

              return (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl border hover:shadow-sm transition-shadow"
                  style={{ backgroundColor: `${iconData.bg}40` }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: iconData.bg }}
                  >
                    <IconComp
                      className="w-5 h-5"
                      style={{ color: iconData.color }}
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className="text-xs px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: iconData.bg,
                          color: iconData.color,
                          fontWeight: 600,
                        }}
                      >
                        אינסייט #{i + 1}
                      </span>
                    </div>
                    <p className="text-sm leading-7 text-muted-foreground">
                      {insight}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Learning Status Summary */}
      <Card className="border-r-4 border-r-[#6366F1] bg-gradient-to-l from-[#6366F1]/5 to-transparent">
        <CardHeader>
          <CardTitle className="text-[#0B1437] flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-[#6366F1]" />
            סיכום מצב הלמידה
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-8 text-muted-foreground">{learningSummary}</p>
        </CardContent>
      </Card>

      {/* Quick Navigation */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Link to="/attendance">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#22D3EE]/10 flex items-center justify-center">
                  <UserCheck className="w-5 h-5 text-[#22D3EE]" />
                </div>
                <div>
                  <h4 className="text-sm text-[#0B1437]">צפייה בנתוני נוכחות</h4>
                  <p className="text-xs text-muted-foreground">מעקב נוכחות מפורט</p>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-[#22D3EE] transition-colors" />
            </div>
          </Card>
        </Link>
        <Link to="/exams">
          <Card className="p-4 hover:shadow-md transition-shadow cursor-pointer group">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#6366F1]/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-[#6366F1]" />
                </div>
                <div>
                  <h4 className="text-sm text-[#0B1437]">צפייה במבחנים ותרגולים</h4>
                  <p className="text-xs text-muted-foreground">ניתוח ביצועים מפורט</p>
                </div>
              </div>
              <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-[#6366F1] transition-colors" />
            </div>
          </Card>
        </Link>
      </div>
    </div>
  );
}