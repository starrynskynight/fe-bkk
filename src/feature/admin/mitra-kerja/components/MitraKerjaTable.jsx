import { Trash2 } from "lucide-react";
import { HiPencil } from "react-icons/hi2";
import ActionButton from "@/components/common/ActionButton";

export default function MitraKerjaTable({ data, onEdit, onDelete }) {
  return (
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="bg-[#FFC107] text-white text-left">
          <th className="px-4 py-2">No</th>
          <th className="px-4 py-2">Logo</th>
          <th className="px-4 py-2">Nama Perusahaan</th>
          <th className="px-4 py-2">Bidang</th>
          <th className="px-4 py-2">Tanggal Kerja Sama</th>
          <th className="px-4 py-2 text-center">Aksi</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item, index) => (
          <tr key={item.id} className="border-b hover:bg-gray-50 transition">
            <td className="px-4 py-3">{index + 1}</td>
            <td className="px-4 py-3">
              <img src={item.logo} alt="logo" className="w-14 h-14 rounded-lg object-cover" />
            </td>
            <td className="px-4 py-3">{item.name}</td>
            <td className="px-4 py-3">{item.bidang}</td>
            <td className="px-4 py-3">{item.tanggal}</td>
            <td className="py-5 px-4">
                <div className="flex items-center justify-center gap-2">
                    <ActionButton
                        onClick={() => onEdit?.(item)}
                        icon={HiPencil}
                        color="#F0A206"
                        hoverBg="#FAF5E4"
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
        ))}
      </tbody>
    </table>
  );
}
