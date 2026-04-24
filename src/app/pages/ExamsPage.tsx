import { useState } from "react";
import {
  FileCheck2,
  ClipboardList,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  AlertCircle,
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
  examsAndExercises,
  questionAnalysis,
  overallMetrics,
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

const exams = examsAndExercises.filter((e) => e.type === "מבחן");
const exercises = examsAndExercises.filter((e) => e.type === "תרגול");

const passRateChart = exams.map((e) => ({
  name: e.courseName.slice(0, 15),
  passRate: e.passRate,
  averageScore: e.averageScore,
}));

function getScoreColor(score: number) {
  if (score >= 80) return "text-emerald-600";
  if (score >= 60) return "text-amber-600";
  return "text-red-600";
}

function getDifficultyBadge(difficulty: string) {
  if (difficulty === "שאלה קלה") {
    return (
      <Badge className="bg-emerald-50 text-emerald-700 border-emerald-200" variant="outline">
        <CheckCircle2 className="w-3 h-3 ml-1" />
        {difficulty}
      </Badge>
    );
  }
  if (difficulty.includes("מאתגרת")) {
    return (
      <Badge className="bg-red-50 text-red-700 border-red-200" variant="outline">
        <AlertCircle className="w-3 h-3 ml-1" />
        {difficulty}
      </Badge>
    );
  }
  return (
    <Badge className="bg-amber-50 text-amber-700 border-amber-200" variant="outline">
      <HelpCircle className="w-3 h-3 ml-1" />
      {difficulty}
    </Badge>
  );
}

export function ExamsPage() {
  const [expandedExam, setExpandedExam] = useState<number | null>(null);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-[#0B1437]">מבחנים ותרגולים</h1>
        <p className="text-sm text-muted-foreground mt-1">
          סיכום ביצועים במבחנים, תרגולים וניתוח שאלות
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <MetricCard
          title="סה״כ מבחנים"
          value={overallMetrics.totalExams}
          icon={FileCheck2}
          color="#6366F1"
        />
        <MetricCard
          title="סה״כ תרגולים"
          value={overallMetrics.totalExercises}
          icon={ClipboardList}
          color="#22D3EE"
        />
        <MetricCard
          title="אחוז הצלחה כללי"
          value={`${overallMetrics.passRate}%`}
          icon={Award}
          color={overallMetrics.passRate >= 70 ? "#10B981" : "#EF4444"}
        />
        <MetricCard
          title="ציון ממוצע כללי"
          value={`${overallMetrics.averageScore}`}
          icon={Award}
          color="#F59E0B"
        />
      </div>

      {/* Pass Rate Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#0B1437]">שיעורי הצלחה וציון ממוצע במבחנים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[320px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={passRateChart} margin={{ right: 10, left: 10 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  angle={-25}
                  textAnchor="end"
                  height={80}
                />
                <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
                <Tooltip formatter={(value: number) => `${value}%`} />
                <Bar
                  dataKey="passRate"
                  name="אחוז הצלחה"
                  fill="#6366F1"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="averageScore"
                  name="ציון ממוצע"
                  fill="#22D3EE"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="exams" className="space-y-4">
        <TabsList className="w-full sm:w-auto">
          <TabsTrigger value="exams">מבחנים ({exams.length})</TabsTrigger>
          <TabsTrigger value="exercises">תרגולים ({exercises.length})</TabsTrigger>
          <TabsTrigger value="questions">ניתוח שאלות</TabsTrigger>
        </TabsList>

        {/* Exams Tab */}
        <TabsContent value="exams">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">שם מבחן</TableHead>
                    <TableHead className="text-right">קורס</TableHead>
                    <TableHead className="text-center">נבחנים</TableHead>
                    <TableHead className="text-center">עברו</TableHead>
                    <TableHead className="text-center">נכשלו</TableHead>
                    <TableHead className="text-center">אחוז הצלחה</TableHead>
                    <TableHead className="text-center">ציון ממוצע</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exams.map((exam) => (
                    <TableRow key={exam.id}>
                      <TableCell className="text-right" style={{ fontWeight: 500 }}>
                        {exam.name}
                      </TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">
                        {exam.courseName}
                      </TableCell>
                      <TableCell className="text-center">{exam.totalUsers}</TableCell>
                      <TableCell className="text-center">
                        <span className="text-emerald-600 inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {exam.passed}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-red-500 inline-flex items-center gap-1">
                          <XCircle className="w-3 h-3" />
                          {exam.failed}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                            exam.passRate >= 75
                              ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                              : exam.passRate >= 60
                              ? "bg-amber-50 border border-amber-200 text-amber-700"
                              : "bg-red-50 border border-red-200 text-red-700"
                          }`}
                          style={{ fontWeight: 600 }}
                        >
                          {exam.passRate}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={getScoreColor(exam.averageScore)} style={{ fontWeight: 600 }}>
                          {exam.averageScore}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Exercises Tab */}
        <TabsContent value="exercises">
          <Card>
            <CardContent className="pt-6">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="text-right">שם תרגול</TableHead>
                    <TableHead className="text-right">קורס</TableHead>
                    <TableHead className="text-center">משתתפים</TableHead>
                    <TableHead className="text-center">עברו</TableHead>
                    <TableHead className="text-center">נכשלו</TableHead>
                    <TableHead className="text-center">אחוז הצלחה</TableHead>
                    <TableHead className="text-center">ציון ממוצע</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {exercises.map((ex) => (
                    <TableRow key={ex.id}>
                      <TableCell className="text-right" style={{ fontWeight: 500 }}>
                        {ex.name}
                      </TableCell>
                      <TableCell className="text-right text-sm text-muted-foreground">
                        {ex.courseName}
                      </TableCell>
                      <TableCell className="text-center">{ex.totalUsers}</TableCell>
                      <TableCell className="text-center">
                        <span className="text-emerald-600">{ex.passed}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-red-500">{ex.failed}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                            ex.passRate >= 75
                              ? "bg-emerald-50 border border-emerald-200 text-emerald-700"
                              : ex.passRate >= 60
                              ? "bg-amber-50 border border-amber-200 text-amber-700"
                              : "bg-red-50 border border-red-200 text-red-700"
                          }`}
                          style={{ fontWeight: 600 }}
                        >
                          {ex.passRate}%
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className={getScoreColor(ex.averageScore)} style={{ fontWeight: 600 }}>
                          {ex.averageScore}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Question Analysis Tab */}
        <TabsContent value="questions">
          <div className="space-y-3">
            {exams.map((exam) => {
              const questions = questionAnalysis.filter(
                (q) => q.examId === exam.id
              );
              const isExpanded = expandedExam === exam.id;

              return (
                <Card key={exam.id}>
                  <button
                    className="w-full px-6 py-4 flex items-center justify-between text-right hover:bg-muted/30 transition-colors rounded-xl"
                    onClick={() =>
                      setExpandedExam(isExpanded ? null : exam.id)
                    }
                  >
                    <div className="flex items-center gap-3">
                      <FileCheck2 className="w-5 h-5 text-[#6366F1]" />
                      <div>
                        <h3 className="text-[#0B1437] text-sm">{exam.name}</h3>
                        <p className="text-xs text-muted-foreground">
                          {questions.length} שאלות | ציון ממוצע: {exam.averageScore} | אחוז הצלחה: {exam.passRate}%
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </button>

                  {isExpanded && (
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {questions.map((q, i) => (
                          <div
                            key={i}
                            className="p-4 rounded-xl border bg-muted/20"
                          >
                            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                              <div className="flex-1">
                                <div className="flex items-center gap-2 mb-2">
                                  <span className="w-6 h-6 rounded-full bg-[#6366F1]/10 flex items-center justify-center text-[#6366F1] text-xs" style={{ fontWeight: 700 }}>
                                    {i + 1}
                                  </span>
                                  <p className="text-sm text-[#0B1437]" style={{ fontWeight: 500 }}>
                                    {q.text}
                                  </p>
                                </div>
                              </div>
                              <div className="flex items-center gap-3 shrink-0">
                                <div className="text-center">
                                  <span
                                    className={`text-lg ${getScoreColor(q.successRate)}`}
                                    style={{ fontWeight: 700 }}
                                  >
                                    {q.successRate}%
                                  </span>
                                  <p className="text-[10px] text-muted-foreground">הצלחה</p>
                                </div>
                                {getDifficultyBadge(q.difficulty)}
                              </div>
                            </div>
                            {/* Success rate bar */}
                            <div className="mt-3 h-2 rounded-full bg-gray-100 overflow-hidden">
                              <div
                                className={`h-full rounded-full transition-all ${
                                  q.successRate >= 80
                                    ? "bg-emerald-400"
                                    : q.successRate >= 40
                                    ? "bg-amber-400"
                                    : "bg-red-400"
                                }`}
                                style={{ width: `${q.successRate}%` }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  )}
                </Card>
              );
            })}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
