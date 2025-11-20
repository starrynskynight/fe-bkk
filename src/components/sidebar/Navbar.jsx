import { useState, useRef, useEffect } from "react";
import { AlignJustify, ChevronDown, LogOut, Mail } from "lucide-react";
import user from "./data/userData.json"

export default function Navbar({ toggleSidebar, isSidebarOpen, isMobile }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 h-[70px] bg-white shadow-sm z-20 flex items-center justify-between px-6 transition-all duration-500 ease-in-out
      ${isMobile ? "left-0" : isSidebarOpen ? "left-[275px]" : "left-[64px]"}`}
    >
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 rounded-md hover:bg-gray-100"
      >
        <AlignJustify className="text-gray-700" size={22} />
      </button>

      <div
        className="relative flex items-center justify-end gap-3 w-full"
        ref={dropdownRef}
      >
        <button
          onClick={toggleDropdown}
          className="flex items-center gap-3 focus:outline-none"
        >
          <img
            src={user.image}
            alt="User"
            className="w-10 h-10 md:w-12.5 md:h-12.5 rounded-full border-none"
          />

          <div className="hidden sm:flex flex-col items-start leading-tight">
            <span className="nunito-sans font-bold text-[#000405] text-[13px]">
              {user.name}
            </span>
            <span className="text-[10px] font-semibold nunito-sans text-[#000405]/50 flex items-center gap-1">
              <Mail size={10} />
              {user.email}
            </span>
          </div>

          <ChevronDown
            size={22}
            className={`text-[#000405]/50 transition-transform duration-200 ${
              isDropdownOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 top-[75px] bg-white rounded-[10px] shadow-lg border border-gray-200 p-4 animate-fadeIn">
            <div className="flex items-center gap-3 mb-3">
              <img
                src={user.image}
                alt="User"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="font-semibold inter text-sm text-[#434343]">
                  {user.name}
                </p>
                <p className="text-xs text-[#434343]">{user.role}</p>
                <div className="flex items-center gap-1 text-xs text-[#434343] mt-1">
                  <Mail size={12} /> {user.email}
                </div>
              </div>
            </div>

            <hr className="border-[#D9D9D9]/80 my-4" />

            <button className="w-full flex items-center justify-center gap-2 py-2 text-primary-red bg-[#FFEAEB] hover:bg-red-100 rounded-lg font-semibold text-sm transition">
              Logout <LogOut size={14} />
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
