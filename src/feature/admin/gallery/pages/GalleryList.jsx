import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import Button from "@/components/common/Button";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import GalleryTable from "../components/GalleryTable";
import galleryData from "../data/gallery.json"
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

const GalleryList = () => {
  const navigate = useNavigate();

  const [data, setData] = useState(galleryData);
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false); 
  const [selectedItem, setSelectedItem] = useState(null); 

  const itemsPerPage = 5;
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleEdit = (item) => {
    navigate(`/admin/gallery/edit/${item.id}`);
  };

  const handleDelete = (item) => {
    setSelectedItem(item);             
    setIsDeleteModalOpen(true);          
  };

  const confirmDelete = () => {
    setData(prev => prev.filter(d => d.id !== selectedItem.id));
    setIsDeleteModalOpen(false);
    setSelectedItem(null);
  };

  const handleView = (item) => {
    navigate(`/admin/gallery/detail/${item.id}`);
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-3"
          leftIcon={<FaPlus size={17} />}
          onClick={() => navigate("/admin/gallery/tambah")}
        >
          Tambah Gallery
        </Button>
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="w-full md:max-w-md">
            <SearchInput size="md" />
          </div>
        </div>

        <hr className="border-[#D9D9D9]/80 my-6" />

        <GalleryTable
          data={paginatedData}
          onEdit={handleEdit}
          onDelete={handleDelete}
          onView={handleView}
        />

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
      />
    </div>
  );
};

export default GalleryList;
