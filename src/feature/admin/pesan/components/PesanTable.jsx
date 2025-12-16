import React from "react";
import { Trash2, Eye } from "lucide-react";
import ActionButton from "@/components/common/ActionButton";

const PesanTable = ({ data, onView, onDelete }) => {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-[#FFC107] text-white text-left">
          <th className="py-3 px-4">Nama</th>
          <th className="py-3 px-4">Email</th>
          <th className="py-3 px-4">No. Telp</th>
          <th className="py-3 px-4">Pesan</th>
          <th className="py-3 px-4">Tanggal</th>
          <th className="py-3 px-4">Status</th>
          <th className="py-3 px-4">Aksi</th>
        </tr>
      </thead>

      <tbody>
        {data.map((item) => (
          <tr key={item.id} className="border-b hover:bg-gray-50">
            <td className="py-3 px-4">{item.name}</td>
            <td className="py-3 px-4">{item.email}</td>
            <td className="py-3 px-4">{item.telp}</td>
            <td className="py-3 px-4 truncate max-w-[200px]">{item.pesan}</td>
            <td className="py-3 px-4">{item.tanggal}</td>
            <td className="py-3 px-4">
              <span
                className={`text-sm font-semibold ${
                  item.status === "Sudah Dibaca"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {item.status}
              </span>
            </td>
            <td className="py-3 px-4 flex gap-2">
              <div className="flex items-center justify-center gap-2">
                <ActionButton
                  onClick={() => onView?.(item)}
                  icon={Eye}
                  color="#3B82F6"
                  hoverBg="#EFF6FF"
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
};

export default PesanTable;
