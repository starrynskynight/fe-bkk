import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ThumbnailSection from "@/components/ThumbnailSection";
import { MapPin, Briefcase, CalendarDays, Banknote, Eye } from "lucide-react";
import { useJobVacancies } from "@/feature/admin/job/hooks/useJobVacancies";
import { formatDate } from "@/helper/FormatDate";

const JobDetailPage = () => {
  const { id } = useParams();
  const { getJobById, loading } = useJobVacancies(false);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const data = await getJobById(id);
        setJob(data);
      } catch (error) {
        console.error('Error fetching job detail:', error);
      }
    };

    fetchJobDetail();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl font-semibold">Data lowongan tidak ditemukan.</p>
        <Link to="/lowongan" className="text-yellow-500 hover:underline mt-4 inline-block">
          Kembali ke Daftar Lowongan
        </Link>
      </div>
    );
  }

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex justify-center items-center gap-2 shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Detail Lowongan Pekerjaan
          </h1>
        </div>
      </ThumbnailSection>

      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
           src={job.image || "/images/lowongan1.png"}
            alt={job.company}
            className="w-full md:w-1/3 rounded-xl shadow-md object-cover"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              {job.company}
            </h2>
            <div className="flex justify-between">
              <p className="text-yellow-500 font-medium mt-1">
                {formatDate(job.created_at || job.datePosted || job.date)}
              </p>
              <p className="text-yellow-500 text-sm mb-4 flex items-center gap-2">
                <Eye size={16} />
                Dilihat: {job.views || 0}x
              </p>
            </div>

            <div className="space-y-6 mt-4 text-gray-700">
              <p className="flex items-center gap-2">
                <div className="p-2 bg-[#EF9039]/15 flex items-center rounded-full">
                  <MapPin className="text-yellow-400 text-[24px]" />
                </div>
                Penempatan: <span className="font-medium">{job.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <div className="p-2 bg-[#EF9039]/15 flex items-center rounded-full">
                  <Briefcase className="text-yellow-400 text-[24px]" />
                </div>
                Posisi: <span className="font-medium">{job.position}</span>
              </p>
              <p className="flex items-center gap-2">
                <div className="p-2 bg-[#EF9039]/15 flex items-center rounded-full">
                  <Banknote className="text-yellow-400 text-[24px]" />
                </div>
                Gaji: <span className="font-medium">{job.salary}</span>
              </p>
              <p className="flex items-center gap-2">
                <div className="p-2 bg-[#EF9039]/15 flex items-center rounded-full">
                  <CalendarDays className="text-yellow-400 text-[24px]" />
                </div>
                Tanggal:{" "}
                <span className="font-medium">
                  {formatDate(job.start_date || job.startDate)} - {formatDate(job.end_date || job.endDate)}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-2">Deskripsi Pekerjaan</h3>
          <p className="text-gray-700 leading-relaxed whitespace-pre-line">
            {job.description}
          </p>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Kualifikasi Pelamar</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {job.qualifications?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {(job.jobType || job.workingHours || job.benefits || job.quota) && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-2">Teknis Lowongan</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.jobType && <li>Jenis Pekerjaan: {job.jobType}</li>}
              {job.workingHours && <li>Jam Kerja: {job.workingHours}</li>}
              {job.benefits && (
                <li>Benefit: {Array.isArray(job.benefits) ? job.benefits.join(", ") : job.benefits}</li>
              )}
              {job.quota && <li>Kuota: {job.quota} orang</li>}
            </ul>
          </div>
        )}

        {job.majors && job.majors.length > 0 && (
          <div className="mt-8">
            <h3 className="font-semibold text-lg mb-3">Jurusan</h3>
            <div className="flex flex-wrap gap-2">
              {job.majors.map((major, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-yellow-100 text-yellow-700 text-sm rounded-lg"
                >
                  {major}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className="mt-10 flex gap-4 justify-center">
          <Link
            to="/lowongan"
            className="border border-yellow-400 text-yellow-400 px-6 py-2 rounded-lg font-medium hover:bg-yellow-50 transition"
          >
            Kembali
          </Link>
          <Link
            to={`/lowongan/${id}/lamar`}
            className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition"
          >
            Lamar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;