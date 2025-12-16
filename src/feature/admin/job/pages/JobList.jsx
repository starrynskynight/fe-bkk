import React, { useState } from "react";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import { FaPlus } from "react-icons/fa6";
import SearchInput from "@/components/common/SearchInput";
import { useNavigate } from "react-router-dom";
import JobTable from "../components/JobTable";
import Pagination from "@/components/Pagination";
import DeleteConfirmModal from "@/components/DeleteConfirmModal";
import { useJobVacancies } from "../hooks/useJobVacancies";

const JobList = () => {
  const navigate = useNavigate();
  const { jobs, loading, deleteJob } = useJobVacancies();
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedToDelete, setSelectedToDelete] = useState(null);
  const jobList = Array.isArray(jobs) ? jobs : [];


  const perPage = 8;
  
  const filteredJobs = jobList.filter(job =>
  job.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
  job.company?.toLowerCase().includes(searchTerm.toLowerCase())
);

  
  const totalPages = Math.ceil(filteredJobs.length / perPage);
  const paginatedData = filteredJobs.slice(
    (currentPage - 1) * perPage,
    currentPage * perPage
  );

  const handleView = (item) => {
    navigate(`/admin/lowongan/${item.id}`);
  };

  const handleEdit = (item) => {
    navigate(`/admin/lowongan/${item.id}/edit`);
  };

  const handleDelete = (item) => {
    setSelectedToDelete(item);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = async () => {
    if (selectedToDelete) {
      await deleteJob(selectedToDelete.id);
      setIsDeleteModalOpen(false);
      setSelectedToDelete(null);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-3"
          leftIcon={<FaPlus size={17} />}
          onClick={() => navigate("/admin/lowongan/tambah")}
        >
          Buat Lowongan
        </Button>
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="w-full md:max-w-md mb-4">
          <SearchInput 
            size="md" 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Cari posisi atau perusahaan..."
          />
        </div>

        <hr className="border-[#D9D9D9]/80 mb-6" />

        {loading ? (
          <div className="text-center py-8">Loading...</div>
        ) : (
          <>
            <JobTable
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
          </>
        )}
      </div>

      <DeleteConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={confirmDelete}
        title="Hapus Lowongan"
        message={`Apakah Anda yakin ingin menghapus lowongan "${selectedToDelete?.position}"?`}
      />
    </div>
  );
};

export default JobList;
