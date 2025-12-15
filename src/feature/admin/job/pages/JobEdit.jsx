import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import FormSectionWrapper from "@/components/FormSectionWrapper";
import Button from "@/components/common/Button";
import { FaCheckSquare } from "react-icons/fa";
import { IoSquareOutline } from "react-icons/io5";
import { useJobVacancies } from "../hooks/useJobVacancies";
import { useJobForm } from "../hooks/useJobForm";
import InputFieldAdmin from "@/components/common/InputFieldAdmin";

export function JobEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getJobById, updateJob, loading } = useJobVacancies(false);
  const { formData, setFormData, errors, handleChange, handleArrayChange, addArrayItem, removeArrayItem, validate, getCleanedData } = useJobForm();
  const [publish, setPublish] = useState(true);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getJobById(id);
      const job = res.data ?? res;
      setFormData({
        company: job.company || "",
        position: job.position || "",
        location: job.location || "",
        salary: job.salary || "",
        start_date: job.start_date || "",
        end_date: job.end_date || "",
        description: job.description || "",
        qualifications: job.qualifications?.length ? job.qualifications : [""],
        benefits: job.benefits?.length ? job.benefits : [""],
      });
      setPublish(job.status !== "inactive");
    };
    fetchDetail();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      await updateJob(id, {
        ...getCleanedData(),
        status: publish ? "active" : "inactive",
      });
      navigate('/admin/lowongan');
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Edit Lowongan" }]} />

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <FormSectionWrapper
          title="Edit Lowongan Pekerjaan"
          description="Perbarui informasi lowongan pekerjaan."
        >
         <InputFieldAdmin
            label="Nama Perusahaan"
            name="company"
            placeholder="Masukkan nama perusahaan"
            value={formData.company}
            onChange={(e) => handleChange('company', e.target.value)}
            error={errors.company}
            required
          />

          <InputFieldAdmin
            label="Posisi Pekerjaan"
            name="position"
            placeholder="Masukkan posisi pekerjaan"
            value={formData.position}
            onChange={(e) => handleChange('position', e.target.value)}
            error={errors.position}
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputFieldAdmin
              label="Lokasi"
              name="location"
              placeholder="Contoh: Jakarta, Surabaya"
              value={formData.location}
              onChange={(e) => handleChange('location', e.target.value)}
              error={errors.location}
              required
            />

            <InputFieldAdmin
              label="Range Gaji"
              name="salary"
              placeholder="Contoh: Rp4.000.000 - Rp6.000.000"
              value={formData.salary}
              onChange={(e) => handleChange('salary', e.target.value)}
              error={errors.salary}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputFieldAdmin
              label="Tanggal Mulai"
              name="start_date"
              type="date"
              value={formData.start_date}
              onChange={(e) => handleChange('start_date', e.target.value)}
              error={errors.start_date}
              required
            />

            <InputFieldAdmin
              label="Tanggal Berakhir"
              name="end_date"
              type="date"
              value={formData.end_date}
              onChange={(e) => handleChange('end_date', e.target.value)}
              error={errors.end_date}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-[13px] text-black mb-2 font-medium">
              Deskripsi Pekerjaan <span className="text-primary-orange">*</span>
            </label>
            <textarea
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Jelaskan deskripsi pekerjaan secara detail..."
              rows={5}
              className={`w-full px-4 py-2.5 border rounded-lg text-[13px] focus:outline-none focus:border-primary-orange resize-none ${
                errors.description ? 'border-red-500' : 'border-[#D9D9D9]'
              }`}
            />
            {errors.description && (
              <p className="text-red-500 text-[11px] mt-1">{errors.description}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-[13px] text-black mb-2 font-medium">
              Kualifikasi <span className="text-primary-orange">*</span>
            </label>
            {formData.qualifications.map((qual, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={qual}
                  onChange={(e) => handleArrayChange('qualifications', index, e.target.value)}
                  placeholder="Masukkan kualifikasi"
                  className="flex-1 px-4 py-2.5 border border-[#D9D9D9] rounded-lg text-[13px] focus:outline-none focus:border-primary-orange"
                />
                {formData.qualifications.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('qualifications', index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-[13px] font-medium"
                  >
                    Hapus
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('qualifications')}
              className="text-[13px] text-primary-orange font-medium hover:underline"
            >
              + Tambah Kualifikasi
            </button>
            {errors.qualifications && (
              <p className="text-red-500 text-[11px] mt-1">{errors.qualifications}</p>
            )}
          </div>

          <div className="mb-6">
            <label className="block text-[13px] text-black mb-2 font-medium">
              Benefit <span className="text-primary-orange">*</span>
            </label>
            {formData.benefits.map((benefit, index) => (
              <div key={index} className="flex gap-2 mb-2">
                <input
                  type="text"
                  value={benefit}
                  onChange={(e) => handleArrayChange('benefits', index, e.target.value)}
                  placeholder="Masukkan benefit"
                  className="flex-1 px-4 py-2.5 border border-[#D9D9D9] rounded-lg text-[13px] focus:outline-none focus:border-primary-orange"
                />
                {formData.benefits.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeArrayItem('benefits', index)}
                    className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg text-[13px] font-medium"
                  >
                    Hapus
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={() => addArrayItem('benefits')}
              className="text-[13px] text-primary-orange font-medium hover:underline"
            >
              + Tambah Benefit
            </button>
            {errors.benefits && (
              <p className="text-red-500 text-[11px] mt-1">{errors.benefits}</p>
            )}
          </div>
        </FormSectionWrapper>

        <div className="flex justify-between p-5 bg-white rounded-[10px]">
          <label className="flex items-center gap-2 cursor-pointer text-[13px]">
            <input type="checkbox" checked={!publish} onChange={() => setPublish(!publish)} className="hidden" />
            {!publish ? <FaCheckSquare className="text-[#FFC107]" /> : <IoSquareOutline />}
            Jangan Publikasikan Lowongan Saya
          </label>

          <div className="flex gap-3">
            <Button onClick={() => navigate(-1)} className="border border-[#FFC107] text-[#FFC107]">Kembali</Button>
            <Button type="submit" disabled={loading} className="bg-[#FFC107] text-white">
              {loading ? 'Menyimpan...' : 'Simpan Perubahan'}
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
