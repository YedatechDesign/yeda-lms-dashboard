import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { DashboardPage } from "./pages/DashboardPage";
import { AttendancePage } from "./pages/AttendancePage";
import { ExamsPage } from "./pages/ExamsPage";
import { InsightsPage } from "./pages/InsightsPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: DashboardPage },
      { path: "attendance", Component: AttendancePage },
      { path: "exams", Component: ExamsPage },
      { path: "insights", Component: InsightsPage },
    ],
  },
]);
