import React from 'react'
import ThumbnailSection from '@/components/ThumbnailSection'
import { useState } from 'react';
import  jobs  from '../data/dummyJobs.json'
import JobCard from '../components/JobCard';
import Pagination from '@/components/Pagination';
import { useNavigate } from 'react-router-dom';

const JobPage = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate()
  const [selected, setSelected] = useState("Semua Jurusan");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 3;
  const totalPages = Math.ceil(jobs.length / jobsPerPage);
  const startIndex = (currentPage - 1) * jobsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + jobsPerPage);

  const jurusan = [
    "Teknik Informatika",
    "Sistem Informasi",
    "Manajemen",
    "Akuntansi",
    "Desain Komunikasi Visual",
    "Farmasi",
  ];

  const handleView = (item) => {
    navigate(`/lowongan/${item.id}`);
  };

  return (
    <div className="">
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center gap-2 shadow-lg w-full max-w-5xl mx-auto relative">
          <div className="flex flex-1 items-center bg-white rounded-md overflow-hidden">
            <input
              type="text"
              placeholder="Cari lowongan pekerjaan........"
              className="flex-1 px-4 py-2 text-gray-800 focus:outline-none"
            />
            <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 transition">
              🔍
            </button>
          </div>

          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-md flex items-center gap-2 transition"
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentJobs.map((job) => (
            <JobCard key={job.id} onView={handleView} job={job} />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => {
            if (page >= 1 && page <= totalPages) setCurrentPage(page);
          }}
        />
      </div>
    </div>
  )
}

export default JobPage
