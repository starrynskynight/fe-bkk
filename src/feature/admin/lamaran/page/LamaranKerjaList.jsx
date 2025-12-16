import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import SearchInput from "@/components/common/SearchInput";
import Pagination from "@/components/Pagination";
import LamaranTable from "../components/LamaranTable";
import { useJobApplication } from "@/feature/lowongan/hooks/useJobApplication";
import { useDebounce } from "@/hooks/useDebounce";

const LamaranKerjaList = () => {
  const navigate = useNavigate();
  const { applications, loading, pagination, getApplications, deleteApplication } = useJobApplication();

  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(searchQuery, 500);

  // Fetch data when filters change
  useEffect(() => {
  const fetchData = async () => {
    const params = {
      page: currentPage,
      search: debouncedSearch,
      status: statusFilter,
      per_page: 10,
    };

    console.log('Fetching with params:', params); // Debug
    
    try {
      const result = await getApplications(params);
      console.log('Fetch result:', result); // Debug
    } catch (error) {
      console.error('Fetch error:', error); // Debug
    }
  };

  fetchData();
}, [currentPage, debouncedSearch, statusFilter]);

  const handleView = (item) => {
    navigate(`/admin/lamaran-kerja/detail/${item.id}`);
  };

  const handleDelete = async (item) => {
    if (confirm(`Yakin hapus lamaran dari ${item.full_name}?`)) {
      try {
        await deleteApplication(item.id);
        // Refresh data
        getApplications({
          page: currentPage,
          search: debouncedSearch,
          status: statusFilter,
          per_page: 10,
        });
      } catch (error) {
        console.error('Delete error:', error);
      }
    }
  };

  const handleSearch = (value) => {
    setSearchQuery(value);
    setCurrentPage(1); // Reset to first page
  };

  const handleStatusFilter = (e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
        <BreadCrumbs />
      </div>

      <div className="bg-white rounded-[10px] p-7.5">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 w-full">
          <div className="w-full md:max-w-md">
            <SearchInput 
              size="md" 
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Cari nama pelamar..."
            />
          </div>

          <select 
            className="border rounded-md px-3 py-2 text-sm"
            value={statusFilter}
            onChange={handleStatusFilter}
          >
            <option value="">Semua Status</option>
            <option value="submitted">Belum Diproses</option>
            <option value="reviewed">Dalam Proses</option>
            <option value="accepted">Diterima</option>
            <option value="rejected">Ditolak</option>
          </select>
        </div>

        <hr className="border-[#D9D9D9]/80 my-6" />

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-12 text-gray-500">
            <p className="text-lg">Tidak ada data lamaran kerja</p>
          </div>
        ) : (
          <>
            <LamaranTable 
              data={applications} 
              onView={handleView} 
              onDelete={handleDelete} 
            />

            <Pagination 
              currentPage={pagination.currentPage} 
              totalPages={pagination.totalPages} 
              onPageChange={setCurrentPage} 
            />
          </>
        )}
      </div>
    </div>
  );
};

export default LamaranKerjaList;