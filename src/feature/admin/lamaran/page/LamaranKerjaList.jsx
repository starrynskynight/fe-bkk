import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import LamaranTable from "../components/LamaranTable"; 
import lamaranData from "../data/lamaranData.json";

const LamaranKerjaList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(lamaranData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleView = (item) => navigate(`/admin/lamaran-kerja/detail/${item.id}`);
  const handleDelete = (item) => {
    if (confirm(`Yakin hapus: ${item.name}?`)) {
      setData((prev) => prev.filter((d) => d.id !== item.id));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="w-full md:max-w-md">
            <SearchInput size="md" />
          </div>

          <select className="border rounded-md px-3 py-2 text-sm">
            <option>Filter Status</option>
            <option>Diterima</option>
            <option>Dalam Proses</option>
            <option>Belum Diproses</option>
            <option>Ditolak</option>
          </select>
        </div>

        <hr className="border-[#D9D9D9]/80 my-6" />

        <LamaranTable data={paginatedData} onView={handleView} onDelete={handleDelete} />

        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
      </div>
    </div>
  );
};

export default LamaranKerjaList;
