import { formatDate } from "@/helper/FormatDate";
import { FiMapPin } from "react-icons/fi";

export default function JobCard({ job, onView }) {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition flex flex-col">
      <img
        src={job.image || "/images/lowongan1.png"}
        alt={job.company}
        className="mb-3 h-[366px] w-full object-cover"
      />

      <div className="p-4">
        <h3 className="text-black text-[18px] font-semibold">
          {job.company}
        </h3>

        <div className="flex items-center justify-between text-[13px] text-gray-600 mb-2">
          <p className="text-[13px] text-gray-600 mb-2">
            {job.position}
          </p>
          <div className="flex items-center gap-1 text-gray-600">
            <FiMapPin className="text-orange-400 text-[16px]" />
            <span>{job.location}</span>
          </div>
        </div>

        <div className="flex items-center justify-between text-[13px] text-gray-600 mb-2">
          <p className="text-[13px] text-gray-600 mb-2">
            {formatDate(job.date)}
          </p>
          <span className="text-orange-400 font-medium">
            Dilihat: {job.views}x
          </span>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {job.majors?.map((tag) => (
  <span key={tag} className="text-[11px] bg-yellow-200 px-2 rounded">
    {tag}
  </span>
))}
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => onView?.(job)}
            className="border border-[#F4B400] text-[#F4B400] text-[13px] font-medium px-4 py-[5px] rounded-md hover:bg-[#FFF8E1] transition"
          >
            Lihat Detail
          </button>
        </div>
      </div>
    </div>
  );
}
