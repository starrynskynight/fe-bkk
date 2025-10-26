import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Home } from "lucide-react";
import { GrGallery } from "react-icons/gr";
import { BsPersonWorkspace } from "react-icons/bs";
import { MdInfo } from "react-icons/md";



const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setOpenDropdown(false);
  }, [location]);

  const infoItems = [
    { id: 1, label: "Berita", icon: <Home/>, route: "/berita" },
    { id: 2, label: "Gallery", icon: <GrGallery />, route: "/gallery" },
    { id: 3, label: "Mitra Kerja", icon: <BsPersonWorkspace />, route: "/mitra-kerja" },
    { id: 4, label: "Tentang Kami", icon: <MdInfo />, route: "/tentang" },
  ];

  return (
    <nav className="font-[Poppins] w-full bg-[#0B1B48] sticky top-0 z-[1000] relative">
      <div className="flex items-center justify-between px-8 py-3">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/images/logo-bkk.png" alt="Logo BKK" className="h-10 w-auto" />
          <span className="text-white font-semibold text-lg">
            BKK SMKN 1 PURWOSARI
          </span>
        </div>

        {/* Menu */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <Link to="/" className="hover:text-yellow-400 transition-colors">Home</Link>
          <Link to="/lowongan" className="hover:text-yellow-400 transition-colors">Lowongan</Link>

          {/* Dropdown Informasi */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={() => setOpenDropdown(true)}
            onMouseLeave={() => setOpenDropdown(false)}
          >
            <div className="flex items-center gap-1 hover:text-yellow-400 transition-colors">
              <span>Informasi</span>
              <ChevronDown size={16} />
            </div>

            <AnimatePresence>
              {openDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="fixed left-0 top-[70px] w-screen bg-white shadow-lg rounded-b-lg z-50 overflow-hidden"
                  >
                  <div className="flex items-center justify-between px-16 py-10 font-[Poppins] max-w-[1440px] mx-auto">
                    {/* Ilustrasi kiri */}
                    <div className="flex-shrink-0">
                      <img
                        src="/images/gambar-kiri.png"
                        alt="Illustration Left"
                        className="h-[160px] object-contain"
                      />
                    </div>

                    {/* Menu tengah */}
                    <div className="flex justify-center flex-1 gap-16">
                      {infoItems.map((item) => (
                        <Link
                          key={item.id}
                          to={item.route}
                          className="flex flex-col items-center justify-center gap-2 px-6 py-3 rounded-lg hover:bg-[#FFF7E6] transition-colors duration-200 cursor-pointer"
                        >
                          <div className="text-2xl text-[#0B1B48] group-hover:text-primary-red transition-colors duration-200">
  {item.icon}
</div>

                          <span className="text-[15px] font-medium text-[#0B1B48]">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </div>

                    {/* Ilustrasi kanan */}
                    <div className="flex-shrink-0">
                      <img
                        src="/images/gambar-kanan.png"
                        alt="Illustration Right"
                        className="h-[160px] object-contain"
                      />
                    </div>
                  </div>
                </motion.div>

              )}
            </AnimatePresence>
          </div>

          <Link to="/survey" className="hover:text-yellow-400 transition-colors">
            Survey Kepuasan
          </Link>
          <Link to="/kontak" className="hover:text-yellow-400 transition-colors">
            Kontak
          </Link>
        </div>

        {/* Tombol Login */}
        <div>
          <Link
            to="/login"
            className="bg-yellow-400 text-[#0B1B48] font-semibold px-5 py-2 rounded-lg hover:bg-yellow-500 transition-colors"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
