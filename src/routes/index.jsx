import { createBrowserRouter } from "react-router-dom";
import Home from "../feature/landing/pages/Home";
import MainLayout from "../layout/MainLayout";
import JobPage from "@/feature/lowongan/pages/JobPage";
import JobDetailPage from "@/feature/lowongan/pages/JobDetailPage";
import JobApply from "@/feature/lowongan/pages/JobApply";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "lowongan",
        element: <JobPage />
      },
      {
        path: "lowongan/:id",
        element: <JobDetailPage />
      },
      {
        path: "lowongan/lamar",
        element: <JobApply />
      }
    ]
  }
]);
