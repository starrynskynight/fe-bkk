import React, { useState } from "react";
import BreadCrumbs from "../../../../components/common/BreadCrumbs";
import FormSectionWrapper from "../../../../components/FormSectionWrapper";
import { Icon } from "@iconify/react";
import { categoryOptions } from "../../../../constants/categoryOptions";
import SelectField from "../../../../components/common/SelectField";
import TagInput from "../../../../components/common/TagInput";
import RichTextEditor from "../../../../components/common/RichTextEditor";
import Button from "../../../../components/common/Button";
import { useNavigate, useParams } from "react-router-dom";
import news from "../data/newsData.json";
import { FaCheckSquare } from "react-icons/fa";
import { IoSquareOutline } from "react-icons/io5";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";

const NewsEditAdmin = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const existingNews = news.find((item) => item.id === parseInt(id));

  const [formData, setFormData] = useState(
    existingNews || {
      title: "",
      description: "",
      kategori: "",
      image: null,
      tags: [],
    }
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageURL = URL.createObjectURL(file);
      setFormData((prev) => ({
        ...prev,
        image: imageURL,
      }));
    }
  };

  const handleClearImage = () => {
    setFormData((prev) => ({
      ...prev,
      image: null,
    }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCategoryChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      kategori: e.target.value,
    }));
  };

  const handleTagsChange = (tags) => {
    setFormData((prev) => ({
      ...prev,
      tags,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  if (!existingNews)
    return (
      <p className="text-gray-500 text-center mt-10">Berita tidak ditemukan.</p>
    );

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Edit Berita" }]} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormSectionWrapper
          title="Edit Berita"
          description="Ubah dan perbarui berita yang sudah dibuat sebelumnya."
        >
          <div className="w-full mb-8">
            <label className="block text-sm font-semibold inter text-[#000405] mb-4 flex items-center gap-2">
              Ubah Gambar Thumbnail{" "}
              <span className="text-primary-orange">*</span>
            </label>

            <div className="relative p-1 w-[500px] h-[282px] rounded-lg flex items-center justify-center bg-[#F9FAFB] cursor-pointer hover:bg-gray-100 transition">
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none rounded-lg"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="1"
                  y="1"
                  width="calc(100% - 2px)"
                  height="calc(100% - 2px)"
                  rx="8"
                  ry="8"
                  fill="none"
                  stroke="rgba(160, 160, 160, 0.7)"
                  strokeWidth="1.5"
                  strokeDasharray="6 6"
                />
              </svg>

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
                  <span className="text-xl">
                    <img
                      src="/images/photo.png"
                      alt="Tambah Gambar"
                      className="w-[100px] h-[100px]"
                    />
                  </span>
                  <span className="text-xl font-medium inter">
                    Unggah Gambar
                  </span>
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
            label="Kategori Berita"
            required
            name="kategori"
            value={formData.kategori}
            onChange={handleCategoryChange}
            options={categoryOptions}
            placeholder="Pilih Kategori"
          />

          <InputFieldAdmin
            label="Judul Berita"
            name="title"
            placeholder="Masukkan judul berita Anda"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <div className="mb-6">
            <label className="block mb-2 font-semibold">
              Hashtag Berita (#){" "}
              <span className="text-primary-orange">*</span>
            </label>
            <TagInput value={formData.tags} onChange={handleTagsChange} />
          </div>

          <RichTextEditor
            label="Deskripsi / Isi Berita"
            name="description"
            value={formData.description}
            placeholder="Masukkan deskripsi berita Anda di sini"
            required
            height="400px"
          />
        </FormSectionWrapper>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-5 bg-white rounded-[10px] gap-3">
          <label className="flex items-center gap-2 cursor-pointer select-none inter text-[13px] text-[#8B8B8B80] font-medium">
            <input
              type="checkbox"
              checked={formData.publish}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, publish: !prev.publish }))
              }
              className="hidden"
            />
            <span className="text-xl">
              {formData.publish ? (
                <IoSquareOutline className="text-[#D2D2D2]" />
              ) : (
                <FaCheckSquare className="text-[#FFC107]" />
              )}
            </span>
            Jangan Publikasikan Berita Saya
          </label>

          <div className="flex gap-3 self-end sm:self-auto">
            <Button
                onClick={() => navigate(-1)}
                className="border border-[#FFC107] text-[#FFC107] text-[13px] font-bold rounded-lg hover:bg-[#FFC107] hover:text-white"
                >
                Kembali
            </Button>
            <Button
              className="bg-[#FFC107] text-[13px] font-bold rounded-lg hover:bg-[#B21E1E] text-white"
            >
              Simpan
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewsEditAdmin;
