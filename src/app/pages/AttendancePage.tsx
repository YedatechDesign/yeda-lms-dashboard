import { useState } from "react";
import {
  UserCheck,
  UserX,
  Users,
  Eye,
  AlertTriangle,
  ChevronDown,
  ChevronUp,
  Mail,
  BookOpen,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import { Badge } from "../components/ui/badge";
import { MetricCard } from "../components/MetricCard";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../components/ui/tabs";
import {
  courses,
  courseTypeBreakdown,
  overallMetrics,
  sessionAttendance,
  topAttendanceUsers,
  lowAttendanceUsers,
  lowEngagementUsers,
} from "../data/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const COLORS: Record<string, string> = {
  "היברידי": "#0A59EB",
  "מוקלט": "#079DED",
  "פרונטלי": "#F08700",
};

// Compute per-course average attendance
const courseAttendance = courses
  .filter((c) => c.type !== "מוקלט")
  .map((c) => {
    const sessions = sessionAttendance.filter((s) => s.courseId === c.id);
    const avg =
      sessions.length > 0
        ? Math.round(
            sessions.reduce((sum, s) => sum + s.attendancePercent, 0) / sessions.length
          )
        : 0;
    return { name: c.name.slice(0, 18), average: avg };
  });

function getAttendanceColor(pct: number) {
  if (pct >= 80) return "text-[#079DED]";
  if (pct >= 60) return "text-[#F08700]";
  return "text-[#CA5369]";
}

function getAttendanceBg(pct: number) {
  if (pct >= 80) return "bg-[#079DED/08] border-[#079DED/30]";
  if (pct >= 60) return "bg-amber-50 border-[#F08700/30]";
  return "bg-red-50 border-[#CA5369/30]";
}

export function AttendancePage() {
  const [expandedCourse, setExpandedCourse] = useState<number | null>(null);
  const liveCourses = courses.filter((c) => c.type !== "מוקלט");

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[#000F61]">נוכחות</h1>
        <p className="text-sm text-muted-foreground mt-1">
          מעקב נוכחות למפגשים חיים וצפייה בתכנים מוקלטים
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="סה״כ קורסים"
          value={overallMetrics.totalCourses}
          subtitle={`היברידי: ${courseTypeBreakdown["היברידי"]} | מוקלט: ${courseTypeBreakdown["מוקלט"]} | פרונטלי: ${courseTypeBreakdown["פרונטלי"]}`}
          icon={BookOpen}
          color="#0A59EB"
        />
        <MetricCard
          title="סה״כ לומדות"
          value={overallMetrics.totalLearningUnits}
          icon={Eye}
          color="#079DED"
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

      {/* Attendance by Course Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#000F61]">ממוצע נוכחות לפי קורס</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto" dir="ltr">
          <div className="min-w-[520px]">
          <div className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={courseAttendance} margin={{ right: 10, left: 10, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11, fontFamily: "'Rubik', sans-serif", fill: "#717182" }}
                  angle={-30}
                  textAnchor="end"
                  height={90}
                  interval={0}
                />
                <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} tick={{ fontSize: 11, fill: "#717182" }} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar
                  dataKey="average"
                  name="ממוצע נוכחות"
                  fill="#0A59EB"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="sessions" className="space-y-4">
        <TabsList className="w-full">
          <TabsTrigger value="sessions" className="flex-1">
            <span className="sm:hidden">מפגשים</span>
            <span className="hidden sm:inline">נוכחות למפגשים</span>
          </TabsTrigger>
          <TabsTrigger value="top" className="flex-1">
            <span className="sm:hidden">טופ 5</span>
            <span className="hidden sm:inline">טופ 5 נוכחות</span>
          </TabsTrigger>
          <TabsTrigger value="low" className="flex-1">
            <span className="sm:hidden">נמוכה</span>
            <span className="hidden sm:inline">נוכחות נמוכה</span>
          </TabsTrigger>
          <TabsTrigger value="engagement" className="flex-1">
            <span className="sm:hidden">מוקלטים</span>
            <span className="hidden sm:inline">צפייה בתכנים מוקלטים</span>
          </TabsTrigger>
        </TabsList>

        {/* Sessions Attendance Tab */}
        <TabsContent value="sessions">
          <div className="space-y-4">
            {liveCourses.map((course) => {
              const sessions = sessionAttendance.filter(
                (s) => s.courseId === course.id
              );
              const isExpanded = expandedCourse === course.id;

              return (
                <Card key={course.id}>
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-right hover:bg-muted/30 transition-colors rounded-xl"
                    onClick={() =>
                      setExpandedCourse(isExpanded ? null : course.id)
                    }
                  >
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                    )}
                    <div className="flex items-center gap-3">
                      <div className="text-right">
                        <h3 className="text-[#000F61] text-sm">{course.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {course.sessions} מפגשים |{" "}
                          <Badge
                            variant="outline"
                            className="text-[10px] py-0"
                            style={{
                              color: COLORS[course.type],
                              borderColor: COLORS[course.type],
                            }}
                          >
                            {course.type}
                          </Badge>
                        </p>
                      </div>
                      <div
                        className="w-2 h-8 rounded-full shrink-0"
                        style={{
                          backgroundColor: COLORS[course.type],
                        }}
                      />
                    </div>
                  </button>

                  {isExpanded && sessions.length > 0 && (
                    <CardContent className="pt-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-right">שם מפגש</TableHead>
                            <TableHead className="text-center">רשומים</TableHead>
                            <TableHead className="text-center">נוכחים</TableHead>
                            <TableHead className="text-center">נעדרים</TableHead>
                            <TableHead className="text-center">אחוז נוכחות</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {sessions.map((session, i) => (
                            <TableRow key={i}>
                              <TableCell className="text-right">{session.sessionName}</TableCell>
                              <TableCell className="text-center">
                                <span className="inline-flex items-center gap-1">
                                  <Users className="w-3 h-3 text-muted-foreground" />
                                  {session.registered}
                                </span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span className="inline-flex items-center gap-1 text-[#079DED]">
                                  <UserCheck className="w-3 h-3" />
                                  {session.attended}
                                </span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span className="inline-flex items-center gap-1 text-[#CA5369]">
                                  <UserX className="w-3 h-3" />
                                  {session.absent}
                                </span>
                              </TableCell>
                              <TableCell className="text-center">
                                <span
                                  className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${getAttendanceBg(session.attendancePercent)} ${getAttendanceColor(session.attendancePercent)}`}
                                  style={{ fontWeight: 600 }}
                                >
                                  {session.attendancePercent}%
                                </span>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  )}

                  {isExpanded && sessions.length === 0 && (
                    <CardContent className="pt-0">
                      <p className="text-sm text-muted-foreground text-center py-4">
                        אין נתוני נוכחות זמינים עדיין
                      </p>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>

        {/* Top 5 Attendance Tab */}
        <TabsContent value="top">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#000F61] flex items-center gap-2">
                <UserCheck className="w-5 h-5 text-[#079DED]" />
                טופ 5 משתמשים עם נוכחות גבוהה
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">דירוג</TableHead>
                    <TableHead className="text-right">שם</TableHead>
                    <TableHead className="text-right">אימייל</TableHead>
                    <TableHead className="text-center">מפגשים</TableHead>
                    <TableHead className="text-center">אחוז נוכחות</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {topAttendanceUsers.map((user, i) => (
                    <TableRow key={i}>
                      <TableCell>
                        <div className="w-7 h-7 rounded-full bg-gradient-to-bl from-[#079DED] to-[#0A59EB] flex items-center justify-center text-white text-xs">
                          {i + 1}
                        </div>
                      </TableCell>
                      <TableCell className="text-right" style={{ fontWeight: 500 }}>
                        {user.name}
                      </TableCell>
                      <TableCell className="text-right">
                        <span className="inline-flex items-center gap-1 text-muted-foreground text-sm">
                          <Mail className="w-3 h-3" />
                          {user.email}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-sm">
                          {user.attended} מתוך {user.total}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="inline-flex items-center px-3 py-1 rounded-full bg-[#079DED/08] border border-[#079DED/30] text-[#079DED] text-sm" style={{ fontWeight: 600 }}>
                          {user.percentage}%
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Low Attendance Tab */}
        <TabsContent value="low">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#000F61] flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-[#CA5369]" />
                משתמשים עם נוכחות נמוכה (מתחת ל-50%)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowAttendanceUsers.map((user, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[#CA5369/20] bg-[#CA5369/05] space-y-3"
                  >
                    {/* User info */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#CA5369] text-lg shrink-0" style={{ fontWeight: 700 }}>
                        {user.percentage}%
                      </span>
                      <div className="text-right">
                        <p style={{ fontWeight: 600 }} className="text-[#000F61] text-sm">{user.name}</p>
                        <p className="text-xs text-muted-foreground flex items-center justify-end gap-1 mt-0.5">
                          {user.email}
                          <Mail className="w-3 h-3 shrink-0" />
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {user.attended} מפגשים מתוך {user.total}
                        </p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 rounded-full bg-[#CA5369/10] overflow-hidden" dir="rtl">
                      <div
                        className="h-full rounded-full bg-[#CA5369] transition-all"
                        style={{ width: `${user.percentage}%` }}
                      />
                    </div>
                    {/* Recommendation */}
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#CA5369/30]">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-5">{user.recommendation}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Low Engagement Recorded Tab */}
        <TabsContent value="engagement">
          <Card>
            <CardHeader>
              <CardTitle className="text-[#000F61] flex items-center gap-2">
                <Eye className="w-5 h-5 text-amber-500" />
                משתמשים שלא מקפידים לצפות בקורסים מוקלטים
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {lowEngagementUsers.map((user, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl border border-[#F08700/20] bg-[#F08700/05] space-y-3"
                  >
                    {/* User info */}
                    <div className="flex items-start justify-between gap-2">
                      <span className="text-[#F08700] text-lg shrink-0" style={{ fontWeight: 700 }}>
                        {user.percentage}%
                      </span>
                      <div className="text-right">
                        <div className="flex items-center justify-end gap-2 mb-0.5 flex-wrap">
                          <Badge variant="outline" className="text-[10px] border-[#079DED] text-[#079DED]">
                            {user.courseName}
                          </Badge>
                          <span style={{ fontWeight: 600 }} className="text-[#000F61] text-sm">{user.name}</span>
                        </div>
                        <p className="text-xs text-muted-foreground flex items-center justify-end gap-1 mt-0.5">
                          {user.email}
                          <Mail className="w-3 h-3 shrink-0" />
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                          {user.watched} מתוך {user.total} שיעורים נצפו
                        </p>
                      </div>
                    </div>
                    {/* Progress bar */}
                    <div className="h-2 rounded-full bg-[#F08700/10] overflow-hidden" dir="rtl">
                      <div
                        className="h-full rounded-full bg-[#F08700] transition-all"
                        style={{ width: `${user.percentage}%` }}
                      />
                    </div>
                    {/* Insight */}
                    <div className="flex items-start gap-2 p-2.5 rounded-lg bg-white border border-[#F08700/30]">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                      <p className="text-xs text-muted-foreground leading-5">
                        <span style={{ fontWeight: 600 }}>אינסייט: </span>
                        {user.insight}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
