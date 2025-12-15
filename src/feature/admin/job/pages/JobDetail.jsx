import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";
import { useJobVacancies } from "../hooks/useJobVacancies";

export function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getJobById, loading } = useJobVacancies(false);
  const [job, setJob] = useState(null);

  useEffect(() => {
    const fetchDetail = async () => {
      const res = await getJobById(id);
      setJob(res.data ?? res);
    };
    fetchDetail();
  }, [id]);

  if (loading || !job) {
    return <div className="py-10 text-center">Loading...</div>;
  }

  return (
    <div className="flex flex-col gap-6">
      <BreadCrumbs manual={[{ label: "Detail Lowongan" }]} />

      <div className="bg-white rounded-[10px] p-6 flex flex-col gap-4 text-[13px]">
        <div><b>Perusahaan:</b> {job.company}</div>
        <div><b>Posisi:</b> {job.position}</div>
        <div><b>Lokasi:</b> {job.location}</div>
        <div><b>Gaji:</b> {job.salary}</div>
        <div><b>Periode:</b> {job.start_date} – {job.end_date}</div>
        <div>
          <b>Deskripsi:</b>
          <p className="mt-1 text-[#606060]">{job.description}</p>
        </div>
        <div>
          <b>Kualifikasi:</b>
          <ul className="list-disc ml-5 mt-1">
            {job.qualifications?.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </div>
        <div>
          <b>Benefit:</b>
          <ul className="list-disc ml-5 mt-1">
            {job.benefits?.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 justify-end mt-4">
          <Button
            className="border border-[#FFC107] text-[#FFC107]"
            onClick={() => navigate(-1)}
          >
            Kembali
          </Button>
          <Button
            className="bg-[#FFC107] text-white"
            onClick={() => navigate(`/admin/lowongan/${id}/edit`)}
          >
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

