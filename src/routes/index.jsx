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
import FormSurvey from "@/feature/survey/pages/FormSurvey";
import NotFound from "@/feature/NotFound";
import AboutUsPage from "@/feature/about/pages/AboutUsPage";
import ContactPage from "@/feature/contact/pages/ContactPage";
import NewsListAdmin from "@/feature/admin/news/pages/NewsListAdmin";
import ProtectedLayout from "@/layout/ProtectedLayout";
import NewsDetailAdmin from "@/feature/admin/news/pages/NewsDetailAdmin";
import NewsAddAdmin from "@/feature/admin/news/pages/NewsAddAdmin";
import NewsEditAdmin from "@/feature/admin/news/pages/NewsEditAdmin";
import GalleryList from "@/feature/admin/gallery/pages/GalleryList";
import GalleryDetail from "@/feature/admin/gallery/pages/GalleryDetail";
import GalleryAddAdmin from "@/feature/admin/gallery/pages/GalleryAddPage";
import GalleryEditAdmin from "@/feature/admin/gallery/pages/GalleryEditPage";
import LamaranKerjaList from "@/feature/admin/lamaran/page/LamaranKerjaList";
import LamaranDetail from "@/feature/admin/lamaran/page/LamaranDetail";
import TestimonialList from "@/feature/admin/testimoni/pages/TestimonialList";
import TestimoniDetail from "@/feature/admin/testimoni/pages/TestimoniDetail";
import TestimoniCreate from "@/feature/admin/testimoni/pages/TestimoniCreate";
import TestimoniEdit from "@/feature/admin/testimoni/pages/TestimoniEdit";
import PesanMasuk from "@/feature/admin/pesan/pages/PesanMasuk";
import PesanDetail from "@/feature/admin/pesan/pages/PesanDetail";

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
        path: "survey",
        element: <FormSurvey/>
      },
      {
        path: "tentang",
        element: <AboutUsPage/>
      },
      {
        path: "kontak",
        element: <ContactPage/>
      }
    ]
  },
  {
    path: "/admin",
    element: <ProtectedLayout/>,
    children: [
      {
        path: 'berita',
        element: <NewsListAdmin />
      },
      {
        path: 'berita/:id',
        element: <NewsDetailAdmin />
      },
      {
        path: 'berita/tambah',
        element: <NewsAddAdmin />
      },
      {
        path: 'berita/:id/edit',
        element: <NewsEditAdmin />
      },
      {
        path: 'gallery',
        element: <GalleryList />
      },
      {
        path: 'gallery/detail/:id',
        element: <GalleryDetail />
      },
      {
        path: 'gallery/tambah',
        element: <GalleryAddAdmin />
      },
      {
        path: 'gallery/edit/:id',
        element: <GalleryEditAdmin />
      },
      {
        path: 'lamaran-kerja',
        element: <LamaranKerjaList />
      },
      {
        path: 'lamaran-kerja/detail/:id',
        element: <LamaranDetail />
      },
      {
        path: 'testimoni',
        element: <TestimonialList />
      },
      {
        path: 'testimoni/:id',
        element: <TestimoniDetail />
      },
      {
        path: 'testimoni/tambah',
        element: <TestimoniCreate />
      },
      {
        path: 'testimoni/edit/:id',
        element: <TestimoniEdit />
      },
      {
        path: 'pesan-masuk',
        element: <PesanMasuk />
      },
      {
        path: 'pesan/detail/:id',
        element: <PesanDetail />
      },
    ]
  },
  {
     path: "*",
     element: <NotFound/>
  },
]);
