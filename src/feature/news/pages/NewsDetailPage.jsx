import React from "react";
import ThumbnailSection from "@/components/ThumbnailSection";
import { useParams, useNavigate } from "react-router-dom";
import newsData from "../data/dummyNews.json"
import { Calendar, Eye, User } from "lucide-react";


const NewsDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const news = newsData.find((item) => item.id === parseInt(id));
  const otherNews = newsData.filter((item) => item.id !== parseInt(id)).slice(0, 3);

  if (!news) {
    return (
      <div className="py-20 text-center text-gray-600">
        Berita tidak ditemukan 😢
      </div>
    );
  }

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Detail Berita
          </h1>
        </div>
      </ThumbnailSection>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16 flex flex-col lg:flex-row gap-10">
        <div className="flex-1">
          <div className="mb-6">
            <img
              src={news.image}
              alt={news.title}
              className="w-full rounded-lg shadow-md object-cover"
            />
          </div>

          <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
            <p>Oleh <span className="font-semibold text-gray-700">Admin</span></p>
            <p><Calendar size={16} className="inline mr-1" /> {news.date}</p>
            <p><Eye size={16} className="inline mr-1" /> Dilihat: {news.views}x</p>
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            {news.title}
          </h2>

          <p className="text-gray-700 leading-relaxed space-y-6 text-justify">
            {news.description}
          </p>

          <button
            onClick={() => navigate(-1)}
            className="mt-8 bg-yellow-400 hover:bg-yellow-500 text-[#0B1437] px-6 py-2 rounded-md font-medium transition"
          >
            Kembali
          </button>
        </div>

        <aside className="w-full lg:w-[350px]">
          <h3 className="text-lg font-semibold text-[#0B1437] mb-4 flex items-center gap-2">
            Berita Lainnya <span className="text-yellow-400 text-xl">•</span>
          </h3>

          <div className="flex flex-col gap-5">
            {otherNews.map((item) => (
              <div
                key={item.id}
                className="flex gap-3 border-b pb-3 cursor-pointer hover:bg-gray-50 transition"
                onClick={() => navigate(`/berita/${item.id}`)}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-20 h-20 rounded-md object-cover"
                />
                <div>
                  <span className="text-xs bg-yellow-400 text-white px-2 py-[2px] rounded-md">
                    {item.category}
                  </span>
                  <h4 className="font-semibold text-gray-800 text-sm mt-1 line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {item.date} • {item.views}x
                  </p>
                </div>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
};

export default NewsDetailPage;
