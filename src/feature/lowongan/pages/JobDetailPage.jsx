import React from "react";
import { Link, useParams } from "react-router-dom";
import data from "../data/dummyJobs.json";
import ThumbnailSection from "@/components/ThumbnailSection";
import {
  MapPin,
  Briefcase,
  CalendarDays,
  Banknote,
  Eye,
} from "lucide-react";

const JobDetailPage = () => {
  const { id } = useParams();
  const job = data.find((item) => item.id === parseInt(id));

  if (!job) {
    return (
      <div className="p-8 text-center text-gray-500">
        Data lowongan tidak ditemukan.
      </div>
    );
  }

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center gap-2 shadow-lg w-full max-w-5xl mx-auto relative">
        <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
          Detail Lowongan Pekerjaan
        </h1>
      </div>
      </ThumbnailSection>

      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <img
            src={job.image}
            alt={job.company}
            className="w-full md:w-1/3 rounded-xl shadow-md"
          />

          <div className="flex-1">
            <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-2">
              {job.company}
            </h2>
            <p className="text-yellow-500 font-medium mt-1">
              {job.datePosted}
            </p>
            <p className="text-gray-500 text-sm mb-4 flex items-center gap-2">
              <Eye size={16} />
              Dilihat: {job.views}x
            </p>

            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin className="text-orange-400" /> Penempatan:{" "}
                <span className="font-medium">{job.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Briefcase className="text-orange-400" /> Posisi:{" "}
                <span className="font-medium">{job.position}</span>
              </p>
              <p className="flex items-center gap-2">
                <Banknote className="text-orange-400" /> Gaji:{" "}
                <span className="font-medium">{job.salary}</span>
              </p>
              <p className="flex items-center gap-2">
                <CalendarDays className="text-orange-400" /> Tanggal:{" "}
                <span className="font-medium">
                  {job.startDate} - {job.endDate}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <h3 className="font-semibold text-lg mb-2">Deskripsi Pekerjaan</h3>
          <p className="text-gray-700 leading-relaxed">{job.description}</p>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Kualifikasi Pelamar</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {job.qualifications.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <h3 className="font-semibold text-lg mb-2">Teknis Lowongan</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>Jenis Pekerjaan: {job.jobType}</li>
            <li>Jam Kerja: {job.workingHours}</li>
            <li>Benefit: {job.benefits.join(", ")}</li>
            <li>Kuota: {job.quota} orang</li>
          </ul>
        </div>

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

        <div className="mt-10 text-center">
          <Link to="/lowongan/lamar" className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition">
            Lamar Sekarang
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetailPage;
