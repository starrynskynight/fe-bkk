import NavbarDesktop from "./components/NavbarDekstop";
import NavbarDrawer from "./components/NavbarDrawer";
import Button from "../common/Button";
import { MENU_ITEMS } from "./helper/NavItems";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setOpenDropdown(false);
  }, [location]);

  return (
    <nav className="w-full bg-white sticky top-0 z-[1000] relative">
      <div className="flex items-center justify-between w-full p-4">
        <div className="flex items-center">
          <img src="/images/logo.png" alt="Mi Jurnal" className="h-8 w-auto" />
        </div>

        <div className="flex justify-center flex-1">
          <NavbarDesktop
            openDropdown={openDropdown}
            setOpenDropdown={setOpenDropdown}
          />
        </div>

        <div className="flex items-center">
          <div className="hidden md:block">
          <Button
            to="/login"
            className="px-7 py-1.5 border text-[15px] font-semibold border-primary-red text-primary-red rounded-lg hover:bg-primary-red hover:text-white"
          >
            Masuk
          </Button>
          </div>

          <div className="md:hidden ml-3">
            <NavbarDrawer />
          </div>
        </div>
      </div>

      <AnimatePresence>
        {openDropdown && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed left-0 right-0 bottom-0 top-30 bg-black/30 z-40"
              onClick={() => setOpenDropdown(false)}
            />

            <motion.div
              initial={{ opacity: 0, maxHeight: 0 }}
              animate={{ opacity: 1, maxHeight: 600 }} 
              exit={{ opacity: 0, maxHeight: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="absolute left-0 top-full w-full bg-white shadow-lg rounded-b-lg z-50 md:block overflow-hidden"
            >
              <div className="flex mx-auto gap-10 items-start pt-6">
                <div className="flex-shrink-0 self-end">
                  <img
                    src="/images/illustration.png"
                    alt="Illustration"
                    className="max-h-70 object-contain"
                  />
                </div>

                <div className="flex flex-col p-8 min-h-[300px] gap-2 flex-1">
                  <div className="grid grid-cols-3 gap-6">
                    {MENU_ITEMS.find((i) => i.id === "aplikasi").submenu
                      .filter((item) => !item.isButton)
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={item.route}
                          className="hover:bg-[#FFEAEB] p-4 rounded-lg cursor-pointer"
                        >
                          <img
                            src={item.image}
                            alt={item.label}
                            className="h-8 w-auto object-contain mb-4"
                          />
                          <p className="inter text-black">{item.description}</p>
                        </Link>
                      ))}
                  </div>

                  <div className="mt-auto flex justify-end">
                    {MENU_ITEMS.find((i) => i.id === "aplikasi").submenu
                      .filter((item) => item.isButton)
                      .map((item) => (
                        <Link
                          key={item.id}
                          to={item.route}
                          className="px-5 py-2 text-xs border border-primary-red text-primary-red rounded-lg hover:bg-primary-red hover:text-white transition-colors flex items-center gap-2"
                        >
                          <span>{item.label}</span>
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
