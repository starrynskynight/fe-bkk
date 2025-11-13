import { createBrowserRouter } from "react-router-dom";
import Home from "../feature/landing/pages/Home";
import MainLayout from "../layout/MainLayout";
import JobPage from "@/feature/lowongan/pages/JobPage";
import JobDetailPage from "@/feature/lowongan/pages/JobDetailPage";
import JobApply from "@/feature/lowongan/pages/JobApply";
import NewsList from "@/feature/news/pages/NewsList";
import NewsDetailPage from "@/feature/news/pages/NewsDetailPage";
import Gallery from "@/feature/gallery/pages/Gallery";
import PartnersPage from "@/feature/partners/pages/PartnersPage";
import AboutUsPage from "@/feature/about/pages/AboutUsPage";

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
      },
      {
        path: "berita",
        element: <NewsList />
      },
      {
        path: "berita/:id",
        element: <NewsDetailPage/>
      },
      {
        path: "gallery",
        element: <Gallery/>
      },
      {
        path: "mitra-kerja",
        element: <PartnersPage/>
      },
      {
        path: "tentang",
        element: <AboutUsPage/>
      }
    ]
  }
]);
