import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import lamaranData from "../data/lamaranData.json";

const LamaranDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = lamaranData.find((d) => d.id === Number(id));

  if (!item) {
    return (
      <p className="text-center mt-10 text-gray-500">Data tidak ditemukan.</p>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs
        items={[
          { label: "Beranda", path: "/" },
          { label: "Lowongan", path: "/lowongan" },
          { label: "Detail Lamaran Kerja", path: `/lamaran/${id}` },
        ]}
      />

      <div className="bg-white rounded-[10px] shadow-sm p-8">
        <h2 className="text-lg font-semibold text-[#0E1947] mb-6 border-b pb-4">
          Detail Lamaran Kerja
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10 text-sm">
          <DetailItem label="Nama Pelamar" value={item.name} />
          <DetailItem label="Tanggal Lulus" value={item.tanggal} />
          <DetailItem label="Tahun Lulus" value={item.tahunLulus} />
          <DetailItem label="Posisi yang Dilamar" value={item.posisi} />
          <DetailItemStatus label="Status" value={item.status} />
        </div>
      </div>

      <div className="bg-white rounded-[10px] shadow-sm p-5 flex justify-end">
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-4"
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex text-sm">
    <p className="text-gray-600 w-[130px]">{label}</p>
    <p className="mx-2">:</p>
    <p className="font-medium text-[#0E1947]">{value}</p>
  </div>
);

const DetailItemStatus = ({ label, value }) => (
  <div className="flex items-center text-sm">
    <p className="text-gray-600 w-[150px]">{label}</p>
    <p className="mx-2">:</p>
    <span
      className={`px-3 py-1 rounded-full text-xs font-semibold
        ${
          value === "Diterima"
            ? "bg-green-100 text-green-600"
            : value === "Dalam Proses"
            ? "bg-yellow-100 text-yellow-600"
            : value === "Belum Diproses"
            ? "bg-gray-100 text-gray-600"
            : "bg-red-100 text-red-600"
        }
      `}
    >
      {value}
    </span>
  </div>
);

export default LamaranDetail;
