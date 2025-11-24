import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import FileInput from "@/components/common/FileInput";
import TextareaField from "@/components/common/TextareaField";
import testimoniData from "../data/testimonial.json";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";

const TestimoniEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = testimoniData.find((t) => t.id === Number(id));
  const [formData, setFormData] = useState(item || {});

  useEffect(() => {
    if (!item) navigate("/admin/testimoni");
  }, [item, navigate]);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data diedit :", formData);
    navigate("/admin/testimoni");
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs />

        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="bg-white rounded-[10px] p-7.5">  
                <FileInput
                    label="Gambar Profil"
                    name="image"
                    accept="image/*"
                    value={formData.image}
                    onChange={handleChange}
                />

                <InputFieldAdmin
                    label="Nama User"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />

                <InputFieldAdmin
                    label="Nama Perusahaan / Aplikasi"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    required
                />

                <TextareaField
                    label="Alasan Pengguna"
                    name="review"
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

export default TestimoniEdit;
