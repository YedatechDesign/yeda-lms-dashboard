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
  if (score >= 80) return "text-[#079DED]";
  if (score >= 60) return "text-[#F08700]";
  return "text-[#CA5369]";
}

function getDifficultyBadge(difficulty: string) {
  if (difficulty === "שאלה קלה") {
    return (
      <Badge className="bg-[#079DED/08] text-[#079DED] border-[#079DED/30]" variant="outline">
        <CheckCircle2 className="w-3 h-3 ml-1" />
        {difficulty}
      </Badge>
    );
  }
  if (difficulty.includes("מאתגרת")) {
    return (
      <Badge className="bg-red-50 text-[#CA5369] border-[#CA5369/30]" variant="outline">
        <AlertCircle className="w-3 h-3 ml-1" />
        {difficulty}
      </Badge>
    );
  }
  return (
    <Badge className="bg-amber-50 text-[#F08700] border-[#F08700/30]" variant="outline">
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
        <h1 className="text-[#000F61]">מבחנים ותרגולים</h1>
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
          color="#0A59EB"
        />
        <MetricCard
          title="סה״כ תרגולים"
          value={overallMetrics.totalExercises}
          icon={ClipboardList}
          color="#079DED"
        />
        <MetricCard
          title="אחוז הצלחה כללי"
          value={`${overallMetrics.passRate}%`}
          icon={Award}
          color={overallMetrics.passRate >= 70 ? "#079DED" : "#CA5369"}
        />
        <MetricCard
          title="ציון ממוצע כללי"
          value={`${overallMetrics.averageScore}`}
          icon={Award}
          color="#F08700"
        />
      </div>

      {/* Pass Rate Chart */}
      <Card>
        <CardHeader>
          <CardTitle className="text-[#000F61]">שיעורי הצלחה וציון ממוצע במבחנים</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[360px]" dir="ltr">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={passRateChart} margin={{ right: 10, left: 10, bottom: 20 }}>
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
                  dataKey="passRate"
                  name="אחוז הצלחה"
                  fill="#0A59EB"
                  radius={[4, 4, 0, 0]}
                />
                <Bar
                  dataKey="averageScore"
                  name="ציון ממוצע"
                  fill="#079DED"
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
                        <span className="text-[#079DED] inline-flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" />
                          {exam.passed}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-[#CA5369] inline-flex items-center gap-1">
                          <XCircle className="w-3 h-3" />
                          {exam.failed}
                        </span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                            exam.passRate >= 75
                              ? "bg-[#079DED/08] border border-[#079DED/30] text-[#079DED]"
                              : exam.passRate >= 60
                              ? "bg-amber-50 border border-[#F08700/30] text-[#F08700]"
                              : "bg-red-50 border border-[#CA5369/30] text-[#CA5369]"
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
                        <span className="text-[#079DED]">{ex.passed}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span className="text-[#CA5369]">{ex.failed}</span>
                      </TableCell>
                      <TableCell className="text-center">
                        <span
                          className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs ${
                            ex.passRate >= 75
                              ? "bg-[#079DED/08] border border-[#079DED/30] text-[#079DED]"
                              : ex.passRate >= 60
                              ? "bg-amber-50 border border-[#F08700/30] text-[#F08700]"
                              : "bg-red-50 border border-[#CA5369/30] text-[#CA5369]"
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
                      <FileCheck2 className="w-5 h-5 text-[#0A59EB]" />
                      <div>
                        <h3 className="text-[#000F61] text-sm">{exam.name}</h3>
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
                                  <span className="w-6 h-6 rounded-full bg-[#0A59EB]/10 flex items-center justify-center text-[#0A59EB] text-xs" style={{ fontWeight: 700 }}>
                                    {i + 1}
                                  </span>
                                  <p className="text-sm text-[#000F61]" style={{ fontWeight: 500 }}>
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
                                    ? "bg-[#F08700]"
                                    : "bg-[#CA5369]"
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
