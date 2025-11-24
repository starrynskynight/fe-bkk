import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import TestimonialTable from "../components/TestimonialTable";
import testimonialsData from "../data/testimonial.json";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

export default function TestimonialList() {
  const navigate = useNavigate();

  const [data, setData] = useState(testimonialsData);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const itemsPerPage = 5;
  const filtered = data.filter(
    (d) =>
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.company.toLowerCase().includes(search.toLowerCase()) ||
      d.review.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const paginated = filtered.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleView = (item) => navigate(`/admin/testimoni/${item.id}`);
  const handleEdit = (item) => navigate(`/admin/testimoni/edit/${item.id}`);
  const handleDelete = (item) => {
    setSelectedItem(item);
    setIsDeleteOpen(true);
  };
  const confirmDelete = () => {
    setData((prev) => prev.filter((d) => d.id !== selectedItem.id));
    setIsDeleteOpen(false);
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-3"
          leftIcon={<FaPlus size={17} />}
          onClick={() => navigate("/admin/testimoni/tambah")}
        >
          Tambah Testimoni
        </Button>
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="w-full md:max-w-md">
            <SearchInput size="md" value={search} onChange={(e) => { setSearch(e.target.value); setCurrentPage(1); }} />
          </div>
        </div>

        <TestimonialTable data={paginated} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />    
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={(p) => setCurrentPage(p)} />
      </div>

      <DeleteConfirmModal
        isOpen={isDeleteOpen}
        onClose={() => setIsDeleteOpen(false)}
        onConfirm={confirmDelete}
        title="Hapus Testimoni"
        message={`Yakin ingin menghapus testimoni dari "${selectedItem?.name}"?`}
      />
    </div>
  );
}
