import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ThumbnailSection from "@/components/ThumbnailSection";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField";
import TextareaField from "@/components/common/TextareaField";
import FileInput from "@/components/common/FileInput";
import { FaCheckSquare } from "react-icons/fa";
import { IoSquareOutline } from "react-icons/io5";
import { useJobApplicationForm } from "../hooks/useJobApplicationForm";
import { useJobApplication } from "../hooks/useJobApplication";
import { useJobVacancies } from "@/feature/admin/job/hooks/useJobVacancies";
import { toast } from "react-toastify";
import ErrorSummary from "./ErrorSummary";
import { useMajors } from "../hooks/useMajors";

const JobApply = () => {
  const { id } = useParams(); // Job vacancy ID from URL
  const navigate = useNavigate();
  const { getJobById } = useJobVacancies(false);
  const { submitApplication, loading } = useJobApplication();
  const { majorOptions, loading: loadingMajors } = useMajors(); 
  const {
    formData,
    errors,
    handleChange,
    handleFileChange,
    validate,
    reset,
    getFormDataForSubmit,
    setFormData,
  } = useJobApplicationForm(id);

  const [job, setJob] = useState(null);
  const [loadingJob, setLoadingJob] = useState(true);
  const [showErrorSummary, setShowErrorSummary] = useState(false);

  // Fetch job details
  useEffect(() => {
    const fetchJob = async () => {
      try {
        const jobData = await getJobById(id);
        setJob(jobData);
        // Auto-fill job_vacancy_id
        setFormData(prev => ({ ...prev, job_vacancy_id: id }));
      } catch (error) {
        console.error('Error fetching job:', error);
      } finally {
        setLoadingJob(false);
      }
    };

    if (id) {
      fetchJob();
    }
  }, [id]);

  const genderOptions = [
    { label: "Laki-laki", value: "male" },
    { label: "Perempuan", value: "female" },
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleChange(name, value);
  };

  const handleFileInputChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      handleFileChange(name, files[0]);
    }
  };

 

  const scrollToField = (fieldName) => {
  const element = document.getElementsByName(fieldName)[0] || 
                  document.getElementById(fieldName);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setTimeout(() => element.focus(), 500);
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();
  
  // ⭐ TANGKAP return value dari validate()
  const validationErrors = validate();
  
  // ⭐ CEK apakah ada error
  if (Object.keys(validationErrors).length > 0) {
    setShowErrorSummary(true);
    
    const errorCount = Object.keys(validationErrors).length;
    toast.error(`${errorCount} field perlu diperbaiki. Scroll ke atas untuk melihat detailnya.`);
    
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return;
  }

  setShowErrorSummary(false);

  try {
    const submitData = getFormDataForSubmit();
    await submitApplication(submitData);
    setTimeout(() => {
      navigate(`/lowongan/${id}`);
    }, 2000);
  } catch (error) {
    console.error('Submit error:', error);
  }
};
  const handleReset = () => {
    reset();
  };

  if (loadingJob) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-yellow-400 border-t-transparent"></div>
      </div>
    );
  }

  if (!job) {
    return (
      <div className="p-8 text-center text-gray-500">
        <p className="text-xl font-semibold">Lowongan tidak ditemukan.</p>
      </div>
    );
  }

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-5xl mx-auto relative">
          <h1 className="text-2xl md:text-[48px] text-center text-white font-semibold">
            Lamar Lowongan Pekerjaan
          </h1>
        </div>
      </ThumbnailSection>

      <div className="max-w-7xl mx-auto px-6 md:px-0 py-12">
        {/* Job Info */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
          <h3 className="font-semibold text-lg text-gray-800">Melamar untuk:</h3>
          <p className="text-gray-700 mt-1">{job.position} - {job.company}</p>
          <p className="text-gray-600 text-sm">{job.location}</p>
        </div>

        {showErrorSummary && (
        <ErrorSummary 
          errors={errors} 
          onErrorClick={scrollToField} 
        />
      )}

        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/bro.png"
              alt="Ilustrasi lamaran kerja"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="w-full md:w-1/2 flex items-center justify-center">
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-[36px] text-[#100F1B] font-semibold mb-4">
                Ajukan Lamaran Kerja – BKK SMKN 1 Purwosari
              </h1>
              <p className="text-lg text-[#373642] leading-relaxed">
                Silakan isi formulir lamaran kerja berikut dengan data yang benar
                dan lengkap agar proses seleksi berjalan lancar.
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Data Pribadi */}
          <div className="flex flex-col gap-1 mt-12">
            <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
              Data Pribadi Pelamar
            </h2>
            <p className="text-[#000405]/60">
              Isi data pribadi Anda dengan lengkap.
            </p>
            <hr className="border-[#FFC107]/80 mb-6" />
          </div>

          <div className="flex flex-col gap-6">
             <SelectField
              label="Jurusan"
              name="major_id"
              value={formData.major_id}
              onChange={handleInputChange}
              options={majorOptions}
              placeholder="Pilih jurusan Anda"
              error={errors.major_id}
              required
            />

            <InputField
              label="Nama Lengkap"
              name="full_name"
              placeholder="Masukkan nama sesuai ijazah"
              value={formData.full_name}
              onChange={handleInputChange}
              error={errors.full_name}
              required
            />

            <InputField
              label="NIS/NISN"
              name="nis_nisn"
              placeholder="Masukkan nomor NIS / NISN Anda"
              value={formData.nis_nisn}
              onChange={handleInputChange}
              error={errors.nis_nisn}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Tanggal Lahir"
                name="birth_date"
                type="date"
                placeholder="Masukkan tanggal lahir Anda"
                value={formData.birth_date}
                onChange={handleInputChange}
                error={errors.birth_date}
              />

              <SelectField
                label="Jenis Kelamin"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}
                options={genderOptions}
                placeholder="Pilih jenis kelamin"
                error={errors.gender}
              />
            </div>

            <TextareaField
              label="Alamat Lengkap"
              name="address"
              placeholder="Masukkan alamat lengkap Anda"
              value={formData.address}
              onChange={handleInputChange}
              error={errors.address}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="No. HP / WhatsApp"
                name="phone"
                placeholder="Masukkan nomor HP / WhatsApp Anda"
                value={formData.phone}
                onChange={handleInputChange}
                error={errors.phone}
              />
              <InputField
                label="Email Aktif"
                name="email"
                type="email"
                placeholder="Masukkan email aktif Anda"
                value={formData.email}
                onChange={handleInputChange}
                error={errors.email}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Tahun Kelulusan"
                name="graduation_year"
                type="number"
                placeholder="Contoh: 2024"
                value={formData.graduation_year}
                onChange={handleInputChange}
                error={errors.graduation_year}
              />
              <InputField
                label="IPK / Nilai Rata-rata"
                name="gpa"
                type="number"
                step="0.01"
                placeholder="Contoh: 85.5"
                value={formData.gpa}
                onChange={handleInputChange}
                error={errors.gpa}
              />
            </div>
          </div>

          {/* Data Lamaran */}
          <div className="flex flex-col gap-1 mt-12">
            <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
              Data Lamaran
            </h2>
            <p className="text-[#000405]/60">
              Isi data lamaran Anda dengan lengkap.
            </p>
            <hr className="border-[#FFC107]/80 mb-6" />
          </div>

          <div className="flex flex-col gap-6">
            <InputField
              label="Pengalaman Kerja"
              name="work_experience"
              placeholder="Ketikkan pengalaman kerja Anda (Opsional)"
              value={formData.work_experience}
              onChange={handleInputChange}
              error={errors.work_experience}
            />
            
            <TextareaField
              label="Alasan Melamar"
              name="apply_reason"
              placeholder="Ketikkan alasan Anda melamar bidang pekerjaan tersebut (minimal 20 karakter)"
              value={formData.apply_reason}
              onChange={handleInputChange}
              error={errors.apply_reason}
              required
            />
          </div>

          {/* Dokumen Pendukung */}
          <div className="flex flex-col gap-1 mt-12">
            <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
              Dokumen Pendukung
            </h2>
            <p className="text-[#000405]/60">
              Upload dokumen lamaran Anda dengan lengkap.
            </p>
            <hr className="border-[#FFC107]/80 mb-6" />
          </div>

          <div className="flex flex-col gap-6">
            <FileInput
              label="Upload CV / Resume"
              name="resume"
              required
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              error={errors.resume}
              helperText="Format: PDF, DOC, DOCX (Max: 5MB)"
            />
            
            <FileInput
              label="Upload Ijazah / Sertifikat"
              name="certificate"
              accept=".pdf,image/*"
              onChange={handleFileInputChange}
              error={errors.certificate}
              helperText="Format: PDF, JPG, PNG (Max: 5MB)"
            />
            
            <FileInput
              label="Upload Foto"
              name="photo"
              accept="image/*"
              onChange={handleFileInputChange}
              error={errors.photo}
              helperText="Format: JPG, PNG (Max: 5MB)"
            />
            
            <FileInput
              label="Surat Lamaran"
              name="cover_letter"
              accept=".pdf,.doc,.docx"
              onChange={handleFileInputChange}
              error={errors.cover_letter}
              helperText="Format: PDF, DOC, DOCX (Max: 5MB)"
            />
          </div>

          {/* Agreement & Submit */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 bg-white rounded-[10px] gap-3 mt-8">
            <label className="flex items-center gap-2 cursor-pointer select-none text-[16px] text-[#857885]">
              <input
                type="checkbox"
                checked={formData.agreement}
                onChange={(e) => handleChange('agreement', e.target.checked)}
                className="hidden"
              />
              <span className="text-xl">
                {formData.agreement ? (
                  <FaCheckSquare className="text-[#FFC107]" />
                ) : (
                  <IoSquareOutline className="text-[#D2D2D2]" />
                )}
              </span>
              Saya menyatakan data yang saya isi benar.
            </label>
            {errors.agreement && (
              <p className="text-red-500 text-sm">{errors.agreement}</p>
            )}

            <div className="flex gap-3 self-end sm:self-auto">
              <button
                type="button"
                onClick={handleReset}
                className="border border-yellow-400 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-white transition"
              >
                Reset data
              </button>
              <button
                type="submit"
                disabled={loading}
                className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Mengirim...' : 'Kirim Lamaran'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;