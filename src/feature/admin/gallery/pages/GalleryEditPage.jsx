import React, { useState } from "react";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import FormSectionWrapper from "@/components/FormSectionWrapper";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";
import SelectField from "@/components/common/SelectField";
import Button from "@/components/common/Button";
import { useNavigate, useParams } from "react-router-dom";
import TextareaField from "@/components/common/TextareaField";
import dataGallery from "../data/gallery.json"
import { Icon } from "@iconify/react";

const GalleryEditAdmin = () => {
  const navigate = useNavigate();
  const { id } = useParams(); 

   const existingNews = dataGallery.find((item) => item.id === parseInt(id))

    const [formData, setFormData] = useState(
        existingNews || {
        title: "",
        description: "",
        kategori: "",
        image: null,
        }
    );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setFormData(prev => ({
      ...prev,
      kategori: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imgURL = URL.createObjectURL(file);
      setFormData(prev => ({
        ...prev,
        image: imgURL,
      }));
    }
  };

  const handleClearImage = () => {
    setFormData(prev => ({ ...prev, image: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  if (!existingNews)
    return (
      <p className="text-gray-500 text-center mt-10">Berita tidak ditemukan.</p>
    );

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Edit Gallery" }]} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormSectionWrapper
          title="Edit Gallery"
          description="Perbarui data gallery dan publikasikan."
        >
          <div className="w-full mb-8">
            <label className="block text-[13px] inter text-black mb-3 flex items-center gap-2">
              Gambar Gallery <span className="text-primary-orange">*</span>
            </label>
            <div className="relative p-1 w-[500px] h-[282px] rounded-lg flex items-center justify-center bg-[#F9FAFB] cursor-pointer hover:bg-gray-100 transition">
              {formData.image ? (
                <>
                  <img
                    src={formData.image}
                    alt="preview"
                    className="w-full h-full object-cover rounded-lg"
                  />
                  <button
                    onClick={handleClearImage}
                    className="absolute -top-2 -right-2 bg-[#DE1B1B] text-white rounded-full p-1.5 z-10 transform transition-transform hover:scale-110"
                    >
                      <Icon
                        icon="streamline:delete-1-solid"
                        width="10"
                        height="10"
                      />
                  </button>
                </>
              ) : (
                <label className="flex flex-col items-center justify-center text-[#8B8B8B] text-sm cursor-pointer z-10">
                  <span className="text-xl font-medium inter">Upload Gambar</span>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageChange}
                  />
                </label>
              )}
            </div>
          </div>

          <SelectField
            label="Kategori Gallery"
            required
            name="kategori"
            value={formData.kategori}
            onChange={handleCategoryChange}
            options={[
              { label: "Pemandangan", value: "pemandangan" },
              { label: "Kegiatan", value: "kegiatan" },
              { label: "Dokumentasi", value: "dokumentasi" },
            ]}
            placeholder="- Pilih Kategori -"
          />

          <InputFieldAdmin
            label="Judul Gallery"
            name="title"
            placeholder="Masukkan judul gallery"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <TextareaField
            label="Deskripsi Gallery"
            name="description"
            placeholder="Masukkan deskripsi gallery"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </FormSectionWrapper>

        <div className="flex justify-end items-center p-5 bg-white rounded-[10px] gap-3">
          <Button
            type="button"
            onClick={() => navigate(-1)}
            className="border border-[#FFC107] text-[#FFC107] text-[13px] font-bold rounded-lg hover:bg-[#FFC107] hover:text-white"
          >
            Kembali
          </Button>

          <Button
            className="bg-[#FFC107] text-white text-[13px] font-bold rounded-lg hover:bg-[#0E1947] hover:text-white"
          >
            Update Gallery
          </Button>
        </div>
      </form>
    </div>
  );
};

export default GalleryEditAdmin;
