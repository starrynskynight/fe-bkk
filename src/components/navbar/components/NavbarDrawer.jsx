import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const NavbarDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <FiMenu className="text-2xl text-white" />
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
          <img src="/images/logo-bkk.png" alt="Logo BKK" className="h-6 w-auto" />
          <button onClick={() => setIsOpen(false)}>
            <FiX className="text-2xl" />
          </button>
        </div>

        <div className="flex flex-col space-y-1 p-4">
          <Link to="/" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Home</Link>
          <Link to="/lowongan" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Lowongan</Link>
          <Link to="/berita" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Berita</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Gallery</Link>
          <Link to="/mitra-kerja" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Mitra Kerja</Link>
          <Link to="/tentang" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Tentang Kami</Link>
          <Link to="/survey" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Survey Kepuasan</Link>
          <Link to="/kontak" onClick={() => setIsOpen(false)} className="px-3 py-2 text-gray-700 hover:text-yellow-500 hover:bg-gray-100 rounded-md transition-colors font-medium">Kontak</Link>
          
          <Link
            to="/login"
            onClick={() => setIsOpen(false)}
            className="mt-4 bg-yellow-400 text-white font-semibold px-4 py-2 rounded-lg hover:bg-yellow-500 transition-colors text-center"
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

export default NavbarDrawer;
