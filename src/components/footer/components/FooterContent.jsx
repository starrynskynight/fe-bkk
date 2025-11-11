import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { PiXLogoBold } from "react-icons/pi";

const FooterContent = () => {
  return (
    <footer className="bg-[#0E1C56] text-white py-10 px-6 md:px-16">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-10">
        <div className="flex items-center col-span-2">
          <h2 className="text-[36px] font-semibold mb-4">
            Terhubung Bersama <br />
            <span className="font-bold text-white">
              BKK SMKN 1 Purwosari
            </span>
          </h2>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Menu</h3>
          <ul className="space-y-2 text-[#EAEAEA]">
            <li>Home</li>
            <li>Lowongan</li>
            <li>Survey Kepuasan</li>
            <li>Kontak</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4">Informasi</h3>
          <ul className="space-y-2 text-[#EAEAEA] mb-4">
            <li>Berita</li>
            <li>Gallery</li>
            <li>Mitra Kerja</li>
            <li>Tentang Kami</li>
          </ul>

          
        </div>
        <div className="flex items-center gap-4 text-[#F4B400] text-xl">
            <a href="#" className="hover:text-yellow-300">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <PiXLogoBold />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <FaInstagram />
            </a>
          </div>
      </div>

      <div className="flex justify-between border-t border-[#FFC107] px-6 ">
        <div className="flex items-center gap-3 mt-4">
          <img src='/images/logo-bkk.png' alt="BKK Logo" className="w-12 h-12" />
          <p className="font-semibold">BKK SMKN 1 PURWOSARI</p>
        </div>
        <div className="text-sm text-center text-gray-300 mt-4">
          © 2025 BKK by SMKN 1 Purwosari • Dibuat oleh tim PKL GreatCode, 3PM, dan Hummatech
        </div>
      </div>
    </footer>
  );
};

export default FooterContent;
