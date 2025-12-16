import { useState, useEffect } from "react";
import Navbar from "../components/sidebar/Navbar";
import Sidebar from "../components/sidebar/SideBar";
import { Outlet } from "react-router-dom";

export default function ProtectedLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };
    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        isMobile={isMobile}
      />

      <Navbar
        toggleSidebar={toggleSidebar}
        isSidebarOpen={isSidebarOpen}
        isMobile={isMobile}
      />

      <main
        className={`pt-[70px] transition-all duration-300 ${
          isMobile ? "ml-0" : isSidebarOpen ? "ml-[275px]" : "ml-[64px]"
        }`}
      >
        
        <div className="p-8 bg-[#F6F6F6] min-h-screen">
          <Outlet />
        </div>
      </main>
    </>
  );
}
