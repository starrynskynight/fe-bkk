import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown, FiChevronUp } from "react-icons/fi";
import { MENU_ITEMS } from "../helper/NavItems";
import Button from "../../common/Button";
import { motion, AnimatePresence } from "framer-motion";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="md:hidden">
      <button onClick={() => setIsOpen(true)}>
        <FiMenu className="text-2xl" />
      </button>

      <div
        className={`fixed inset-0 bg-black/40 transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <img src="/images/logo.png" alt="Mi Jurnal" className="h-6 w-auto" />
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col space-y-2 p-4">
          {MENU_ITEMS.map((item) => (
            <div key={item.id}>
              {!item.hasDropdown ? (
                <NavLink
                  to={item.route}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center space-x-3 px-3 py-2 rounded-md transition-colors ${
                      isActive
                        ? "text-primary-red bg-primary-red/10 border-l-4 border-primary-red font-medium"
                        : "text-gray-700 hover:text-primary-red"
                    }`
                  }
                >
                  <item.icon className="text-lg" />
                  <span>{item.label}</span>
                </NavLink>
              ) : (
                <div>
                  <button
                    onClick={() => toggleDropdown(item.id)}
                    className="flex items-center justify-between w-full px-3 py-2 rounded-md text-gray-700 hover:text-primary-red"
                  >
                    <div className="flex items-center space-x-3">
                      <item.icon className="text-lg" />
                      <span>{item.label}</span>
                    </div>
                    {openDropdown === item.id ? (
                      <FiChevronUp className="text-lg" />
                    ) : (
                      <FiChevronDown className="text-lg" />
                    )}
                  </button>

                  {openDropdown === item.id && (
                    <AnimatePresence>
                      {openDropdown === item.id && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="ml-4 mt-2 flex flex-col gap-2 border-l border-gray-200 overflow-hidden"
                        >
                          {item.submenu.map((sub) => (
                            <NavLink
                              key={sub.id}
                              to={sub.route}
                              end
                              onClick={() => setIsOpen(false)}
                              className={({ isActive }) =>
                                `flex items-center gap-2 px-3 py-2 ml-2 rounded-md transition-colors text-sm ${
                                  isActive
                                    ? "text-primary-red bg-primary-red/10 border-l-4 border-primary-red font-medium"
                                    : "text-gray-600 hover:text-primary-red"
                                }`
                              }
                            >
                              <sub.icon className="text-lg" />
                              <span>{sub.label}</span>
                            </NavLink>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              )}
            </div>
          ))}
          <Button className="mt-4 border border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white">
            Masuk
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDrawer;
