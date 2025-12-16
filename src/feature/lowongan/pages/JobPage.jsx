import React, { useState, useEffect } from 'react';
import ThumbnailSection from '@/components/ThumbnailSection';
import JobCard from '../components/JobCard';
import Pagination from '@/components/Pagination';
import { useNavigate } from 'react-router-dom';
import { FiSearch } from 'react-icons/fi';
import { useJobVacancies } from '@/feature/admin/job/hooks/useJobVacancies';

const JobPage = () => {
  const navigate = useNavigate();
  const { jobs, loading, fetchJobs } = useJobVacancies(false);
  
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Semua Jurusan");
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 9;

  const jurusan = [
    "Semua Jurusan",
    "Teknik Informatika",
    "Sistem Informasi",
    "Manajemen",
    "Akuntansi",
    "Desain Komunikasi Visual",
    "Farmasi",
  ];

  // Fetch jobs on mount and when filters change
  useEffect(() => {
    const params = {
      page: currentPage,
      per_page: jobsPerPage,
      search: searchTerm,
      major: selected !== "Semua Jurusan" ? selected : undefined
    };
    fetchJobs(params);
  }, [currentPage, searchTerm, selected]);

  // Filter jobs manually (for fallback/dummy data)
  const filteredJobs = jobs.filter(job => {
    const matchesSearch = searchTerm === "" || 
      job.company?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.position?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location?.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesMajor = selected === "Semua Jurusan" || 
      job.majors?.some(major => major.toLowerCase().includes(selected.toLowerCase()));
    
    return matchesSearch && matchesMajor;
  });

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + jobsPerPage);

  const handleSearch = () => {
    setCurrentPage(1);
    const params = {
      page: 1,
      per_page: jobsPerPage,
      search: searchTerm,
      major: selected !== "Semua Jurusan" ? selected : undefined
    };
    fetchJobs(params);
  };

  const handleView = (item) => {
    navigate(`/lowongan/${item.id}`);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center gap-2 shadow-lg w-full max-w-5xl mx-auto relative">
          <div className="flex flex-1 items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Cari lowongan pekerjaan........"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button 
              onClick={handleSearch}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md transition flex items-center justify-center"
            >
              <FiSearch size={20} />
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2 transition whitespace-nowrap"
            >
              <span>{selected}</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transform transition-transform ${
                  open ? "rotate-180" : "rotate-0"
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg overflow-hidden z-10">
                {jurusan.map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      setSelected(item);
                      setCurrentPage(1);
                      setOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-yellow-100 transition"
                  >
                    {item}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>
      </ThumbnailSection>
      
      <div className="max-w-7xl mx-auto p-4 py-16">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Info Lowongan Pekerjaan Tersedia
        </h2>
        <div className="flex items-center mb-6">
          <div className="w-32 h-1 bg-yellow-400"></div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
            <p className="mt-4 text-gray-600">Memuat data lowongan...</p>
          </div>
        ) : currentJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Tidak ada lowongan yang ditemukan.</p>
            <p className="text-gray-500 text-sm mt-2">Coba ubah kata kunci pencarian atau filter jurusan.</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentJobs.map((job) => (
                <JobCard key={job.id} onView={handleView} job={job} />
              ))}
            </div>

            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default JobPage;