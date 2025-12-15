import { Trash2 } from "lucide-react";
import { HiPencil } from "react-icons/hi2";
import { FaEye } from "react-icons/fa6";
import clsx from "clsx";
import ActionButton from "@/components/common/ActionButton";

export default function JobTable({ data = [], onEdit, onDelete, onView }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg bg-white">
      <table className="w-full min-w-[1000px] border-collapse text-sm md:text-[13px] rounded-lg">
        <thead>
          <tr className="bg-[#FFC107] inter font-semibold text-[13px] text-white text-left">
            <th className="py-3 px-4 text-center">No</th>
            <th className="py-3 px-4">Perusahaan</th>
            <th className="py-3 px-4">Posisi</th>
            <th className="py-3 px-4">Lokasi</th>
            <th className="py-3 px-4">Gaji</th>
            <th className="py-3 px-4">Periode</th>
            <th className="py-3 px-4">Status</th>
            <th className="py-3 px-4 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 transition border border-[#D9D9D9] text-[#606060] inter text-[13px]"
              >
                <td className="py-5 px-4 text-center font-light">{index + 1}</td>
                <td className="py-5 px-4 font-medium">{item.company}</td>
                <td className="py-5 px-4">{item.position}</td>
                <td className="py-5 px-4">{item.location}</td>
                <td className="py-5 px-4">{item.salary}</td>
                <td className="py-5 px-4">
                  {item.start_date} – {item.end_date}
                </td>
                <td
                  className={clsx(
                    "py-5 px-4 font-semibold",
                    item.status === "active"
                      ? "text-[#1D9375]"
                      : "text-primary-orange"
                  )}
                >
                  {item.status === "active" ? "Dipublikasikan" : "Draft"}
                </td>
                <td className="py-5 px-4">
                  <div className="flex items-center justify-center gap-2">
                    <ActionButton
                      onClick={() => onView?.(item)}
                      icon={FaEye}
                      color="#007BFF"
                      hoverBg="#E7F1FF"
                      size={17}
                    />
                    <ActionButton
                      onClick={() => onEdit?.(item)}
                      icon={HiPencil}
                      color="#F0A206"
                      hoverBg="#FFF8E1"
                      size={17}
                    />
                    <ActionButton
                      onClick={() => onDelete?.(item)}
                      icon={Trash2}
                      color="#AA494E"
                      hoverBg="#FFF1F1"
                      size={17}
                    />
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="py-6 text-center text-gray-500 italic">
                Belum ada lowongan yang ditambahkan.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
