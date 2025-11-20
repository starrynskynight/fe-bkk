import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import FormSectionWrapper from "@/components/FormSectionWrapper";
import SelectField from "@/components/common/SelectField";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";
import Button from "@/components/common/Button";
import { Icon } from "@iconify/react";

const galleryCategories = [
  { value: "Promo", label: "Promo" },
  { value: "Event", label: "Event" },
  { value: "Artikel", label: "Artikel" },
  { value: "Product", label: "Produk" },
];

const GalleryAddAdmin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    category: "",
    image: null,
    publish: false,
  });

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const imageURL = URL.createObjectURL(file);
    setFormData((prev) => ({ ...prev, image: imageURL }));
  };

  const handleClearImage = () => {
    setFormData((prev) => ({ ...prev, image: null }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("DATA FORM:", formData);
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Tambah Gallery" }]} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormSectionWrapper
          title="Tambah Gallery"
          description="Upload gambar gallery dan isi detailnya dengan lengkap."
        >

          <div className="w-full mb-8">
            <label className="block text-[13px] inter text-black mb-3 flex items-center gap-2">
              Unggah Gambar Gallery <span className="text-primary-orange">*</span>
            </label>

            <div className="relative p-1 w-[500px] h-[282px] rounded-lg flex items-center justify-center bg-[#F9FAFB] cursor-pointer hover:bg-gray-100 transition">
              <svg className="absolute inset-0 w-full h-full pointer-events-none rounded-lg">
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
                  <img src={formData.image} alt="preview" className="w-full h-full object-cover rounded-lg" />
                  <button
                    onClick={handleClearImage}
                    className="absolute -top-2 -right-2 bg-[#DE1B1B] text-white rounded-full p-1.5 hover:scale-110 transition"
                  >
                    <Icon icon="streamline:delete-1-solid" width="12" height="12" />
                  </button>
                </>
              ) : (
                <label className="flex flex-col items-center justify-center cursor-pointer text-[#8B8B8B] z-10">
                  <img src="/images/photo.png" alt="Tambah" className="w-[100px] h-[100px]" />
                  <span className="text-base font-medium">Unggah Gambar</span>
                  <input type="file" accept="image/*" className="hidden" onChange={handleImageChange} />
                </label>
              )}
            </div>
          </div>

          <InputFieldAdmin
            label="Judul Gallery"
            name="title"
            placeholder="Masukkan judul gallery"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <SelectField
            label="Kategori"
            name="category"
            value={formData.category}
            onChange={handleChange}
            options={galleryCategories}
            placeholder="- Pilih Kategori Gallery -"
            required
          />

          <div className="mb-6">
            <label className="block mb-2 text-[13px] font-semibold inter">
              Deskripsi Gallery <span className="text-primary-orange">*</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Tuliskan deskripsi gallery..."
              rows={6}
              className="w-full border border-gray-300 rounded-lg p-3 text-[13px] focus:ring-1 focus:ring-[#FFC107] focus:outline-none"
              required
            ></textarea>
          </div>
        </FormSectionWrapper>

        <div className="flex flex-col sm:flex-row justify-end items-start sm:items-center p-5 bg-white rounded-[10px] gap-3">
          <div className="flex gap-3 self-end sm:self-auto">
            <Button
              onClick={() => navigate(-1)}
              className="border border-[#FFC107] text-[#FFC107] font-bold text-[13px] rounded-lg hover:bg-[#FFC107] hover:text-white"
            >
              Kembali
            </Button>
            <Button className="bg-[#FFC107] text-white font-bold text-[13px] rounded-lg hover:bg-[#B21E1E]">
              Simpan Gallery
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default GalleryAddAdmin;
