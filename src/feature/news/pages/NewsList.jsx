import React, { useState } from "react";
import ThumbnailSection from "@/components/ThumbnailSection";
import BigNewsCard from "../components/BigNewsCard";
import SmallNewsCard from "../components/SmallNewsCard";
import  newsData  from "../data/dummyNews.json";
import NewsCard from "@/feature/landing/components/NewsCard";
import Pagination from "@/components/Pagination";
import { FiSearch } from "react-icons/fi";

const ITEMS_PER_PAGE = 4;
const NewsList = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Semua Jurusan");
  const jurusan = [
    "Teknik Informatika",
    "Sistem Informasi",
    "Manajemen",
    "Akuntansi",
    "Desain Komunikasi Visual",
    "Farmasi",
  ];

  const sortedNews = [...newsData].sort((a, b) => b.views - a.views);
  const popularNews = sortedNews.slice(0, 5); 
  const mainNews = popularNews[0]; 
  const otherNews = popularNews.slice(1); 
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(newsData.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const selectedNews = newsData.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center gap-2 shadow-lg w-full max-w-5xl mx-auto relative">
          <div className="flex flex-1 items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Cari berita..."
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md transition flex items-center justify-center">
              <FiSearch size={20} />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
            >
              <span>{selected}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-10">
                {jurusan.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-100 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </ThumbnailSection>

      <div className="max-w-7xl mx-auto p-4 py-16">
        <div className="flex flex-col gap-1 mt-12">
          <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
            Berita Populer
          </h2>
          <div className="flex items-center mb-6">
            <div className="w-32 h-1 bg-yellow-400"></div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
          <BigNewsCard {...mainNews} />
          <div className="grid grid-cols-2 gap-8">
            {otherNews.map((item) => (
              <SmallNewsCard key={item.id} {...item} />
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-12">
          <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
            Semua Berita
          </h2>
          <div className="flex items-center mb-6">
            <div className="w-32 h-1 bg-yellow-400"></div>
            <div className="flex-1 h-[1px] bg-gray-300"></div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {selectedNews.map((item) => (
            <NewsCard key={item.id} {...item} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) setCurrentPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default NewsList;
