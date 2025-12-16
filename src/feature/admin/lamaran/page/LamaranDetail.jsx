import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import { useJobApplication } from "@/feature/lowongan/hooks/useJobApplication";
import { useMajors } from "@/feature/lowongan/hooks/useMajors"; 
import { FaDownload, FaFileAlt, FaImage } from "react-icons/fa";

const LamaranDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getApplicationById, loading } = useJobApplication();
  const { majors, loading: majorsLoading } = useMajors(); 
  const [application, setApplication] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      try {
        const response = await getApplicationById(id);
        console.log('Detail response:', response);
        
        if (response.data) {
          setApplication(response.data);
        } else {
          setApplication(response);
        }
      } catch (error) {
        console.error('Error fetching application:', error);
      }
    };

    if (id) {
      fetchDetail();
    }
  }, [id]);

  // Function untuk mendapatkan nama jurusan berdasarkan major_id
  const getMajorName = (majorId) => {
    const major = majors.find(m => m.id === majorId);
    return major ? major.name : '-';
  };

  if (loading || majorsLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl font-semibold">Data tidak ditemukan.</p>
      </div>
    );
  }

  const getStatusBadge = (status) => {
    const statusMap = {
      submitted: { label: 'Belum Diproses', class: 'bg-gray-100 text-gray-600' },
      reviewed: { label: 'Dalam Proses', class: 'bg-yellow-100 text-yellow-600' },
      accepted: { label: 'Diterima', class: 'bg-green-100 text-green-600' },
      rejected: { label: 'Ditolak', class: 'bg-red-100 text-red-600' },
    };
    
    return statusMap[status] || statusMap.submitted;
  };

  const statusInfo = getStatusBadge(application.status);

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs />

      <div className="bg-white rounded-[10px] shadow-sm p-8">
        <div className="flex justify-between items-center mb-6 border-b pb-4">
          <h2 className="text-2xl font-semibold text-[#0E1947]">
            Detail Lamaran Kerja
          </h2>
          <span className={`px-4 py-2 rounded-full text-sm font-semibold ${statusInfo.class}`}>
            {statusInfo.label}
          </span>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0E1947] mb-4 pb-2 border-b">
            Data Pribadi
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-sm">
            <DetailItem label="Nama Lengkap" value={application.full_name} />
            <DetailItem label="NIS/NISN" value={application.nis_nisn || '-'} />
            <DetailItem label="Tanggal Lahir" value={application.birth_date} />
            <DetailItem label="Jenis Kelamin" value={application.gender === 'male' ? 'Laki-laki' : 'Perempuan'} />
            <DetailItem label="Email" value={application.email} />
            <DetailItem label="No. HP/WhatsApp" value={application.phone} />
            <DetailItem label="Alamat" value={application.address} fullWidth />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0E1947] mb-4 pb-2 border-b">
            Data Pendidikan
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-10 text-sm">
            <DetailItem 
              label="Jurusan" 
              value={getMajorName(application.major_id)} 
            />
            <DetailItem label="Tahun Kelulusan" value={application.graduation_year} />
            <DetailItem label="IPK/Nilai Rata-rata" value={application.gpa} />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0E1947] mb-4 pb-2 border-b">
            Data Lamaran
          </h3>
          <div className="grid grid-cols-1 gap-y-4 text-sm">
            <DetailItem label="Pengalaman Kerja" value={application.work_experience || '-'} fullWidth />
            <DetailItem label="Alasan Melamar" value={application.apply_reason} fullWidth />
            <DetailItem label="Tanggal Melamar" value={new Date(application.created_at).toLocaleDateString('id-ID', { 
              day: 'numeric', 
              month: 'long', 
              year: 'numeric',
              hour: '2-digit',
              minute: '2-digit'
            })} fullWidth />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-lg font-semibold text-[#0E1947] mb-4 pb-2 border-b">
            Dokumen Pendukung
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {application.resume && (
              <DocumentLink 
                label="CV/Resume" 
                url={application.resume}
                icon={<FaFileAlt />}
              />
            )}
            {application.certificate && (
              <DocumentLink 
                label="Ijazah/Sertifikat" 
                url={application.certificate}
                icon={<FaFileAlt />}
              />
            )}
            {application.photo && (
              <DocumentLink 
                label="Foto" 
                url={application.photo}
                icon={<FaImage />}
              />
            )}
            {application.cover_letter && (
              <DocumentLink 
                label="Surat Lamaran" 
                url={application.cover_letter}
                icon={<FaFileAlt />}
              />
            )}
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[10px] shadow-sm p-5 flex justify-end">
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-4"
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value, fullWidth = false }) => (
  <div className={`flex text-sm ${fullWidth ? 'md:col-span-2' : ''}`}>
    <p className="text-gray-600 w-[180px] font-medium">{label}</p>
    <p className="mx-2">:</p>
    <p className="text-[#0E1947] flex-1">{value || '-'}</p>
  </div>
);

const DocumentLink = ({ label, url, icon }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors group"
  >
    <div className="text-2xl text-yellow-500 group-hover:text-yellow-600">
      {icon}
    </div>
    <div className="flex-1">
      <p className="font-medium text-sm text-gray-700">{label}</p>
      <p className="text-xs text-gray-500">Klik untuk melihat/download</p>
    </div>
    <FaDownload className="text-gray-400 group-hover:text-yellow-500" />
  </a>
);

export default LamaranDetail;