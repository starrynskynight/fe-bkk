import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import PesanTable from "../components/PesanTable";
import pesanData from "../data/pesanData.json";

const PesanMasuk = () => {
  const navigate = useNavigate();
  const [data, setData] = useState(pesanData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleView = (item) => {
    navigate(`/admin/pesan/detail/${item.id}`);
  };

  const handleDelete = (item) => {
    if (confirm(`Yakin hapus pesan dari: ${item.name}?`)) {
      setData((prev) => prev.filter((d) => d.id !== item.id));
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs />

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex flex-col md:flex-row justify-between gap-4">
          <SearchInput size="md" />
        </div>

        <hr className="border-[#D9D9D9]/80 my-6" />

        <PesanTable data={paginatedData} onView={handleView} onDelete={handleDelete} />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PesanMasuk;
