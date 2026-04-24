import {
  Users,
  BookOpen,
  GraduationCap,
  Trophy,
  UserCheck,
  Eye,
  Target,
  Layers,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { MetricCard } from "../components/MetricCard";
import {
  courses,
  courseTypeBreakdown,
  overallMetrics,
  insights,
  learningSummary,
  examsAndExercises,
} from "../data/mockData";
import {
  PieChart,
  Pie,
  Cell,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = {
  "היברידי": "#0A59EB",
  "מוקלט": "#079DED",
  "פרונטלי": "#F08700",
};

const pieData = Object.entries(courseTypeBreakdown).map(([name, value]) => ({
  name,
  value,
}));

const topExams = examsAndExercises
  .filter((e) => e.type === "מבחן")
  .sort((a, b) => b.passRate - a.passRate)
  .slice(0, 8)
  .map((e) => ({
    name: e.courseName.replace("מבחן ", "").slice(0, 15),
    passRate: e.passRate,
    averageScore: e.averageScore,
  }));

export function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Page Title */}
      <div>
        <h1 className="text-[#000F61]">דשבורד כללי</h1>
        <p className="text-muted-foreground text-sm mt-1">סקירה כללית של פעילות הלמידה בפלטפורמה</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="משתמשים פעילים"
          value={overallMetrics.activeUsers}
          icon={Users}
          color="#0A59EB"
        />
        <MetricCard
          title="קורסים"
          value={overallMetrics.totalCourses}
          icon={BookOpen}
          color="#079DED"
        />
        <MetricCard
          title="לומדות"
          value={overallMetrics.totalLearningUnits}
          icon={Layers}
          color="#079DED"
        />
        <MetricCard
          title="מבחנים ותרגולים"
          value={overallMetrics.totalExams + overallMetrics.totalExercises}
          icon={GraduationCap}
          color="#F08700"
        />
      </div>

      {/* Performance KPIs */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="ציון ממוצע כללי"
          value={`${overallMetrics.averageScore}%`}
          icon={Target}
          color="#0A59EB"
        />
        <MetricCard
          title="אחוז הצלחה כללי"
          value={`${overallMetrics.passRate}%`}
          icon={Trophy}
          color={overallMetrics.passRate >= 70 ? "#079DED" : "#CA5369"}
        />
        <MetricCard
          title="אחוז נוכחות כללי"
          value={`${overallMetrics.attendanceRate}%`}
          icon={UserCheck}
          color="#079DED"
        />
        <MetricCard
          title="צפייה בתכנים מוקלטים"
          value={`${overallMetrics.viewingRate}%`}
          icon={Eye}
          color="#F08700"
        />
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Course Type Distribution */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle className="text-[#000F61]">התפלגות קורסים לפי סוג</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                    label={({ name, value }) => `${name} (${value})`}
                  >
                    {pieData.map((entry) => (
                      <Cell
                        key={entry.name}
                        fill={COLORS[entry.name as keyof typeof COLORS]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex justify-center gap-4 mt-2">
              {pieData.map((entry) => (
                <div key={entry.name} className="flex items-center gap-1.5">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: COLORS[entry.name as keyof typeof COLORS] }}
                  />
                  <span className="text-xs text-muted-foreground">{entry.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Exam Pass Rates */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-[#000F61]">שיעורי הצלחה במבחנים</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]" dir="ltr">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={topExams} layout="vertical" margin={{ right: 150, left: 10, top: 5, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                  <XAxis type="number" domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                  <YAxis
                    dataKey="name"
                    type="category"
                    orientation="right"
                    width={145}
                    tick={{ fontSize: 11, fontFamily: "'Heebo', sans-serif", fill: "#717182" }}
                  />
                  <Tooltip
                    formatter={(value: number) => `${value}%`}
                    labelStyle={{ fontFamily: "'Heebo', sans-serif" }}
                  />
                  <Bar dataKey="passRate" name="אחוז הצלחה" fill="#0A59EB" radius={[0, 4, 4, 0]} />
                  <Bar dataKey="averageScore" name="ציון ממוצע" fill="#079DED" radius={[0, 4, 4, 0]} />
                  <Legend />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Course List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#000F61]">רשימת קורסים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {courses.map((course) => (
              <div
                key={course.id}
                className="p-4 rounded-xl border bg-white hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="text-sm text-[#000F61] leading-tight">{course.name}</h4>
                  <Badge
                    className="mr-2 shrink-0 text-[10px]"
                    style={{
                      backgroundColor: `${COLORS[course.type]}20`,
                      color: COLORS[course.type],
                      borderColor: COLORS[course.type],
                    }}
                    variant="outline"
                  >
                    {course.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">
                  {course.sessions} שיעורים / מפגשים
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Quick Insights */}
      <Card className="border-r-4 border-r-[#22D3EE]">
        <CardHeader>
          <CardTitle className="text-[#000F61]">סיכום מצב הלמידה</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-7 text-muted-foreground">{learningSummary}</p>
        </CardContent>
      </Card>

      {/* Insights Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {insights.slice(0, 4).map((insight, i) => (
          <Card key={i} className="p-4">
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#6366F1]/10 flex items-center justify-center shrink-0 mt-0.5">
                <span className="text-[#6366F1] text-sm" style={{ fontWeight: 700 }}>{i + 1}</span>
              </div>
              <p className="text-sm leading-6 text-muted-foreground">{insight}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
