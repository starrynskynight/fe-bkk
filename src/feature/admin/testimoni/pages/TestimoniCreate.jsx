import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import FileInput from "@/components/common/FileInput";
import TextareaField from "@/components/common/TextareaField";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";

const TestimoniCreate = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    gambar_profile: "",
    user_name: "",
    app_name: "",
    review: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data dikirim :", formData);
    navigate("/admin/testimoni");
  };

  return (
    <div className="flex flex-col gap-6">
        <BreadCrumbs 
          manual={[
            { label: "Tambah Testimoni", path: "/testimoni/tambah" },
        ]}/>

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="bg-white rounded-[10px] p-7.5">      
                <FileInput
                    label="Gambar Profil"
                    name="gambar_profile"
                    required
                    accept="image/*"
                    value={formData.gambar_profile}
                    onChange={handleChange}
                />

                <InputFieldAdmin
                    label="Nama User"
                    name="user_name"
                    placeholder="Masukkan nama Anda"
                    value={formData.user_name}
                    onChange={handleChange}
                    required
                />

                <InputFieldAdmin
                    label="Nama Perusahaan"
                    name="app_name"
                    placeholder="Masukkan nama perusahaan / aplikasi"
                    value={formData.app_name}
                    onChange={handleChange}
                    required
                />

                <TextareaField
                    label="Alasan Pengguna"
                    name="review"
                    placeholder="Ceritakan alasan Anda"
                    value={formData.review}
                    onChange={handleChange}
                    required
                />        
            </div>
            <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center p-5 bg-white rounded-[10px] gap-3">
                <div className="flex gap-3 self-end sm:self-auto">
                    <Button
                        onClick={() => navigate(-1)}
                        className="border border-[#FFC107] text-[#FFC107] font-bold text-[13px] rounded-lg hover:bg-[#FFC107] hover:text-white"
                        >
                    Kembali
                    </Button>
                    <Button className="bg-[#FFC107] text-white font-bold text-[13px] rounded-lg hover:bg-[#B21E1E]">
                    Simpan 
                    </Button>
                </div>
            </div>
        </form>
    </div>
  );
};

export default TestimoniCreate;
