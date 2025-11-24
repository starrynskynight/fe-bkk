import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import FileInput from "@/components/common/FileInput";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";
import TextareaField from "@/components/common/TextareaField";

export default function TambahMitraKerja() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    logo: null,
    nama_perusahaan: "",
    deskripsi: "",
    alamat: "",
    kontak: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Mitra berhasil ditambahkan:", formData);
    navigate("/admin/mitra-kerja");
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs />

      <div className="bg-white rounded-[10px] p-7.5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <FileInput
            label="Logo Perusahaan"
            name="logo"
            accept="image/*"
            required
            value={formData.logo}
            onChange={handleChange}
          />

          <InputFieldAdmin
            label="Nama Perusahaan"
            name="nama_perusahaan"
            placeholder="Masukkan nama perusahaan"
            value={formData.nama_perusahaan}
            onChange={handleChange}
            required
          />

          <TextareaField
            label="Deskripsi Singkat"
            name="deskripsi"
            placeholder="Masukkan deskripsi perusahaan"
            value={formData.deskripsi}
            onChange={handleChange}
            required
          />

          <InputFieldAdmin
            label="Alamat Perusahaan"
            name="alamat"
            placeholder="Masukkan alamat perusahaan"
            value={formData.alamat}
            onChange={handleChange}
            required
          />

          <InputFieldAdmin
            label="Kontak Perusahaan"
            name="kontak"
            placeholder="Masukkan nomor/email kontak"
            value={formData.kontak}
            onChange={handleChange}
            required
          />

          <div className="flex justify-end gap-3 mt-4">
            <Button
              onClick={() => navigate(-1)}
              className="border border-[#FFC107] text-[#FFC107] font-bold text-[13px] rounded-lg hover:bg-[#FFC107] hover:text-white"
            >
              Kembali
            </Button>
            <Button
              type="submit"
              className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px]"
            >
              Simpan
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
