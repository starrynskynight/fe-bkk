import React, { useState } from "react";
import ThumbnailSection from "@/components/ThumbnailSection";
import InputField from "@/components/common/InputField";
import SelectField from "@/components/common/SelectField"; 
import TextareaField from "@/components/common/TextareaField";
import FileInput from "@/components/common/FileInput";
import { FaCheckSquare } from "react-icons/fa";
import { IoSquareOutline } from "react-icons/io5";

const JobApply = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    nis_nisn: "",
    tanggal_lahir: "",
    jenis_kelamin: "",
    alamat_lengkap: "",
    no_hp: "",
    email: "",
    posisi_dilamar: "",
    alamat_perusahaan: "",
    cv_resume: null,
    ijazah_sertifikat: null,
    foto: null,
    surat_lamaran: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const options = [
    { label: "Laki-laki", value: "Laki-laki" },
    { label: "Perempuan", value: "Perempuan" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
            <InputField
              label="Nama Lengkap"
              name="nama_lengkap"
              placeholder="Masukkan nama sesuai ijazah"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
            />

            <InputField
              label="NIS/NISN"
              name="nis_nisn"
              placeholder="Masukkan nomor NIS / NISN Anda"
              value={formData.nis_nisn}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Tanggal Lahir"
                name="tanggal_lahir"
                type="date"
                placeholder="Masukkan tanggal lahir Anda"
                value={formData.tanggal_lahir}
                onChange={handleChange}
                required
              />

              <SelectField
                label="Jenis Kelamin"
                name="jenis_kelamin"
                value={formData.jenis_kelamin}
                onChange={handleChange}
                options={options}
                placeholder="Pilih jenis kelamin"
                required
              />
            </div>

            <TextareaField
              label="Alamat Lengkap"
              name="alamat_lengkap"
              placeholder="Masukkan alamat lengkap Anda"
              value={formData.alamat_lengkap}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="No. HP / WhatsApp"
                name="no_hp"
                placeholder="Masukkan nomor HP / WhatsApp Anda"
                value={formData.no_hp}
                onChange={handleChange}
                required
              />
              <InputField
                label="Email Aktif"
                name="email"
                type="email"
                placeholder="Masukkan email aktif Anda"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="flex flex-col gap-1 mt-12">
              <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
                Data Lamaran
              </h2>
              <p className="text-[#000405]/60">
                Isi data lamaran Anda dengan lengkap.Isi data lamaran Anda dengan lengkap.
              </p>
              <hr className="border-[#FFC107]/80 mb-6" />
            </div>

            <div className="flex flex-col gap-6">
              <InputField
                label="Posisi yang Dilamar"
                name="posisi_dilamar"
                placeholder="Pilih posisi yang ingin anda lamar"
                value={formData.posisi_dilamar}
                onChange={handleChange}
                required
              />
              <InputField
                label="Alamat Perusahaan"
                name="alamat_perusahaan"
                placeholder="Ketikkan alamat perusaan yang membuka lowongan"
                value={formData.alamat_perusahaan}
                onChange={handleChange}
                required
              />
              <InputField
                label="Pengalaman Kerja"
                name="pengalaman_kerja"
                placeholder="Ketikkan pengalaman kerja Anda"
                value={formData.pengalaman_kerja}
                onChange={handleChange}
              />
              <TextareaField
                label="Alasan Melamar"
                  name="alasan_melamar"
                  placeholder="Ketikkan alasan Anda melarmar bidang pekerjaan tersebut "
                  value={formData.alasan_melamar}
                  onChange={handleChange}
                  required
              />        
            </div>

            <div className="flex flex-col gap-1 mt-12">
              <h2 className="text-[15px] md:text-2xl font-semibold text-[#000405]">
                Dokumen Pendukung
              </h2>
              <p className="text-[#000405]/60">
                Isi dokumen lamaran Anda dengan lengkap.
              </p>
              <hr className="border-[#FFC107]/80 mb-6" />
            </div>

            <div className="flex flex-col gap-6">
              <FileInput
                label="Upload CV / Resume"
                name="cv_resume"
                required
                accept=".pdf,.doc,.docx"
                onChange={handleChange}
              />
              <FileInput
                label="Upload Ijazah / Sertifikat"
                name="ijazah_sertifikat"
                required
                accept=".pdf, image/*"
                onChange={handleChange}
              />
              <FileInput
                label="Upload Foto"
                name="foto"
                required
                accept="image/*"
                onChange={handleChange}
              />
              <FileInput
                label="Surat Lamaran"
                name="surat_lamaran"
                required
                accept=".pdf, .doc, .docx"
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-5 bg-white rounded-[10px] gap-3">
            <label className="flex items-center gap-2 cursor-pointer select-none text-[20px] text-[#857885]">
              <input
                type="checkbox"
                checked={formData.publish}
                onChange={() =>
                  setFormData((prev) => ({ ...prev, publish: !prev.publish }))
                }
                className="hidden"
              />
              <span className="text-xl">
                {formData.publish ? (
                  <IoSquareOutline className="text-[#FFC107]" />
                ) : (
                  <FaCheckSquare className="text-[#FFC107]" />
                )}
              </span>
              Saya menyatakan data yang saya isi benar.
            </label>

            <div className="flex gap-3 self-end sm:self-auto">
              <button className="border border-yellow-400 text-yellow-500 px-6 py-2 rounded-md hover:bg-yellow-400 hover:text-white transition">
                Reset data
              </button>
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-2 rounded-lg font-medium transition">
                Kirim Lamaran
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApply;
