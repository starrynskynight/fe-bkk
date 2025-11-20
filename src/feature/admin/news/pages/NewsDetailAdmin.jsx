import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import news from "../data/newsData.json";
import { FaCalendar} from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";
import HtmlText from "../../../../utils/HtmlText";
import Button from "../../../../components/common/Button";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";

const NewsDetailAdmin = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const berita = news.find((item) => item.id === parseInt(id));

  if (!berita) return <p>Berita tidak ditemukan.</p>;

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Detail Berita" }]} /> 

      <div className="bg-white px-25 py-17 rounded-[10px]">
        <img
          src={berita.image}
          alt={berita.title}
          className="w-full rounded-[10px] mb-6 object-cover min-h-[400px]"
        />

        <div className="flex items-center gap-3 text-xs font-bold text-black/50 mb-4 uppercase">
          <span className="flex items-center gap-1">
            Oleh <span className="text-black">{berita.author}</span>
          </span>
          <span className="flex items-center gap-1">
            <FaCalendar /> {berita.uploadDate || berita.date}
          </span>
          <span className="flex items-center gap-1 normal-case">
            <IoEyeSharp /> DILIHAT: {berita.views}
          </span>
        </div>

        <h1 className="text-2xl md:text-[30px] font-extrabold text-black mb-4">
          {berita.title}
        </h1>

        {berita.tags && (
          <div className="flex gap-2 flex-wrap my-2 mb-4">
            {berita.tags.map((tag, i) => (
              <span key={i} className="text-sm md:text-lg font-semibold text-[#FFC107]">
                #{tag}
              </span>
            ))}
          </div>
        )}

        {berita.description && (
          <HtmlText
            html={berita.description}
            className="text-black text-base md:text-lg leading-normal space-y-4"
          />
        )}
      </div>

      <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center p-5 bg-white rounded-[10px] gap-3">
        <div className="flex gap-3 self-end sm:self-auto">
          <Button
            onClick={() => navigate(-1)}
            className="border border-[#FFC107] text-[#FFC107] text-[13px] font-bold rounded-lg hover:bg-[#FFC107] hover:text-white"
            >
            Kembali
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailAdmin;
