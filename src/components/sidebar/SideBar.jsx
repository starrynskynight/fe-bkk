import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import SideBarItem from "./SideBarItem";
import { NAV_ITEMS } from "./helper/menuItems";

export default function Sidebar({ isSidebarOpen, toggleSidebar, isMobile }) {
  return (
    <>
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-30"
          onClick={toggleSidebar}
        ></div>
      )}

      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 z-40 flex flex-col transition-all duration-500
        overflow-visible
        ${
          isMobile
            ? isSidebarOpen
              ? "translate-x-0 w-[275px]"
              : "-translate-x-full w-[275px]"
            : isSidebarOpen
            ? "w-[275px]"
            : "w-[64px]"
        }`}
      >
        <div className="relative flex items-center justify-center py-8">
          <div className="flex items-center justify-center gap-2">
            <img
              src="/images/logo-bkk.png"
              alt="Mi Jurnal"
              className={`transition-all duration-300 ${
                (isSidebarOpen && !isMobile) || isMobile ? "block" : "hidden"
              } w-[40px]`}
            />
            <span className={`transition-all duration-300 ${
                (isSidebarOpen && !isMobile) || isMobile ? "block" : "hidden"
              } text-[#FFC107] font-bold uppercase text-sm`}>BKK SMKN 1 Purwosari</span>

            <img
              src="/images/logo-bkk.png"
              alt="Mi Jurnal"
              className={`transition-all duration-300 ${
                !isSidebarOpen && !isMobile ? "block" : "hidden"
              } w-10`}
            />
          </div>

          {!isMobile && (
            <button
              onClick={toggleSidebar}
              className="absolute -right-3 top-8 -translate-y-1/2 w-7.5 h-7.5 flex items-center justify-center rounded-full 
              bg-[#FFC107] text-white shadow-md hover:scale-105 transition-transform"
            >
              {isSidebarOpen ? (
                <FaArrowLeft size={12} />
              ) : (
                <FaArrowRight size={12} />
              )}
            </button>
          )}
        </div>

        <nav
          className={`mt-4 flex-1 overflow-y-auto transition-all duration-500
          ${isSidebarOpen ? "px-5" : "px-2"}
          overflow-visible relative`}
        >
          {NAV_ITEMS.map((group, idx) => (
            <div key={idx} className="mb-4 relative overflow-visible">
              <p
                className={`nunito-sans font-semibold text-[#000405] tracking-[0.02em] mb-2 transition-all duration-500 
                truncate whitespace-nowrap select-none
                ${
                  isSidebarOpen
                    ? "text-xs md:text-sm max-w-[140px] opacity-100"
                    : "text-[10px] max-w-[40px] opacity-80"
                }`}
              >
                {group.section}
              </p>

              <div className="flex flex-col gap-1 overflow-visible">
                {group.items.map((item, index) => (
                  <SideBarItem
                    key={index}
                    to={item.to}
                    icon={item.icon}
                    label={item.label}
                    isSidebarOpen={isSidebarOpen}
                    children={item.children}
                  />
                ))}
              </div>
            </div>
          ))}
        </nav>
      </aside>
    </>
  );
}
