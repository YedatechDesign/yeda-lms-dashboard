import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Attendance from './pages/Attendance';
import Exams from './pages/Exams';
import Insights from './pages/Insights';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'attendance', element: <Attendance /> },
      { path: 'exams', element: <Exams /> },
      { path: 'insights', element: <Insights /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
