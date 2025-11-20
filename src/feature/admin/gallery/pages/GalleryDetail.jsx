import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import { ArrowLeft } from "lucide-react";
import galleryData from "../data/gallery.json"

const GalleryDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const data = galleryData.find((item) => item.id === Number(id));

  if (!data) return <p className="text-center py-10">Data tidak ditemukan.</p>;

  return (
    <div className="flex flex-col gap-6">

      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
        <Button
          leftIcon={<ArrowLeft size={16} />}
          onClick={() => navigate(-1)}
          className="bg-[#0E1947] hover:bg-[#1d2a6b] text-white px-4 py-2 rounded-md text-sm"
        >
          Kembali
        </Button>
      </div>

      <div className="bg-white rounded-[10px] p-7 shadow-sm">
        <div className="flex justify-center mb-6">
          <img
            src={data.image}
            alt={data.title}
            className="w-full max-w-lg rounded-lg shadow-md"
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#0E1947]">{data.title}</h2>
          <p className="text-gray-700 leading-relaxed">{data.description}</p>

          <div>
            <span className="text-sm font-semibold text-gray-500">Kategori:</span>
            <span className={`ml-2 inline-block px-3 py-1 text-xs rounded-full 
              ${data.category === "Promo"
                ? "bg-yellow-100 text-yellow-700"
                : data.category === "Event"
                ? "bg-blue-100 text-blue-700"
                : "bg-gray-100 text-gray-600"
              }
            `}>
              {data.category}
            </span>
          </div>
        </div>

        <hr className="my-6" />

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          <div className="p-4 rounded-lg bg-gray-50">
            <p className="text-gray-500">Tanggal</p>
            <p className="font-semibold">12 Feb 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;
