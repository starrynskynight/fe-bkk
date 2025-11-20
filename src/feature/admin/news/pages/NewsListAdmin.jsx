import React, { useState } from "react";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import Button from "../../../../components/common/Button";
import { FaPlus } from "react-icons/fa6";
import SearchInput from "../../../../components/common/SearchInput";
import SelectField from "../../../../components/common/SelectField";
import { categoryOptions } from "../../../../constants/categoryOptions";
import { useNavigate } from "react-router-dom";
import NewsTable from "../components/NewsTable";
import newsData from "../data/newsData.json";
import Pagination from "../../../../components/Pagination";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";

const NewsListAdmin = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState(null);

  const perPage = 8;
  const totalData = newsData.length;
  const totalPages = Math.ceil(totalData / perPage);
  const paginatedData = newsData.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleView = (item) => {
    navigate(`/admin/berita/${item.id}`);
  };

  const handleEdit = (item) => {
    navigate(`/admin/berita/${item.id}/edit`);
  };

  const handleDelete = (item) => {
    setSelectedToDelete(item);
    setIsDeleteModalOpen(true);
  };


  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />        
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-3"
          leftIcon={<FaPlus size={17} />}
          onClick={() => navigate("/admin/berita/tambah")}
        >
          Buat Berita
        </Button>
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="w-full md:max-w-md">
            <SearchInput size="md" />
          </div>

          <div className="w-full md:w-auto">
            <SelectField
              name="kategori"
              value={selectedCategory}
              onChange={handleCategoryChange}
              options={categoryOptions}
              placeholder="Filter Kategori"
              inputStyle="w-full md:w-auto"
              styleInput="h-[44px]"
            />
          </div>
        </div>


        <hr className="border-[#D9D9D9]/80 mb-6" />

        <NewsTable
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
      />
    </div>
  );
};

export default NewsListAdmin;
