import React, { useState } from "react";
import ThumbnailSection from "@/components/ThumbnailSection";
import InputField from "@/components/common/InputField";
import TextareaField from "@/components/common/TextareaField";

const FormSurvey = () => {
  const [formData, setFormData] = useState({
    nama_lengkap: "",
    angkatan_tahun_lulus: "",
    pekerjaan_saat_ini: "",
    kepuasan_bkk: "",
    pengalaman: "",
    saran: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div>
      <ThumbnailSection backgroundImage="/images/smkn1purwosari.png">
        <div className="bg-[#0B1437] p-5 rounded-lg flex items-center justify-center shadow-lg w-full max-w-4xl mx-auto relative">
          <h1 className="text-[28px] md:text-[40px] text-center text-white font-semibold">
            Survey Kepuasan
          </h1>
        </div>
      </ThumbnailSection>

      <div className="max-w-5xl mx-auto px-6 md:px-0 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/2">
            <img
              src="/images/elemensurvey.png"
              alt="Survey Illustration"
              className="w-full h-auto object-contain"
            />
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-[24px] md:text-[30px] font-semibold text-[#0B1437] mb-3">
              Survey Kepuasan Alumni BKK SMKN 1 Purwosari
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Bantu kami meningkatkan layanan dengan mengisi survey ini secara
              jujur dan objektif.
            </p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-12 bg-white rounded-lg shadow-md p-6 md:p-8 border border-yellow-300"
        >
          <div className="flex flex-col gap-6">
            <InputField
              label="Nama Lengkap"
              name="nama_lengkap"
              placeholder="Masukkan nama lengkap Anda"
              value={formData.nama_lengkap}
              onChange={handleChange}
              required
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <InputField
                label="Angkatan / Tahun Lulus"
                name="angkatan_tahun_lulus"
                placeholder="Ketikkan tahun lulus Anda"
                value={formData.angkatan_tahun_lulus}
                onChange={handleChange}
                required
              />
              <InputField
                label="Pekerjaan : Saat Ini"
                name="pekerjaan_saat_ini"
                placeholder="Ketikkan pekerjaan Anda saat ini"
                value={formData.pekerjaan_saat_ini}
                onChange={handleChange}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Seberapa Puas Anda Dengan Layanan BKK?
              </label>
              <div className="flex flex-wrap gap-5 text-gray-700 text-sm">
                {["Sangat Puas", "Puas", "Cukup", "Kurang Puas", "Sangat Tidak Puas"].map(
                  (option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="kepuasan_bkk"
                        value={option}
                        checked={formData.kepuasan_bkk === option}
                        onChange={handleChange}
                        className="accent-yellow-400"
                      />
                      {option}
                    </label>
                  )
                )}
              </div>
            </div>

            <TextareaField
              label="Bagaimana Pengalaman Anda Selama di BKK?"
              name="pengalaman"
              placeholder="Ceritakan pengalaman Anda"
              value={formData.pengalaman}
              onChange={handleChange}
              required
            />

            <TextareaField
              label="Saran / Masukan Untuk BKK"
              name="saran"
              placeholder="Berikan saran atau masukan untuk kami"
              value={formData.saran}
              onChange={handleChange}
              required
            />

            <div className="flex justify-center mt-6">
              <button
                type="submit"
                className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium px-8 py-2 rounded-md shadow-sm transition"
              >
                Kirim Survey
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormSurvey;