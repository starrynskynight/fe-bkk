import React from "react";
import { Trash2, Eye } from "lucide-react";
import ActionButton from "@/components/common/ActionButton";

export default function LamaranTable({ data, onView, onDelete }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
        <table className="w-full min-w-[900px] border-collapse text-sm rounded-md">
            <thead>
                <tr className="bg-[#FFC107] text-white text-left rounded-md">
                <th className="p-3">Nama</th>
                <th className="p-3">Posisi</th>
                <th className="p-3">Tahun Lulus</th>
                <th className="p-3">Status</th>
                <th className="p-3">Tanggal Lulus</th>
                <th className="p-3 text-center">Aksi</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item) => (
                    <tr key={item.id} className="border-b hover:bg-gray-50">
                        <td className="p-3">{item.name}</td>
                        <td className="p-3">{item.posisi}</td>
                        <td className="p-3">{item.tahunLulus}</td>

                        <td className="p-3">
                        <span
                            className={`px-3 py-1 rounded-full text-xs font-semibold
                            ${
                            item.status === "Diterima"
                                ? "bg-green-100 text-green-600"
                                : item.status === "Dalam Proses"
                                ? "bg-yellow-100 text-yellow-600"
                                : item.status === "Belum Diproses"
                                ? "bg-gray-100 text-gray-600"
                                : "bg-red-100 text-red-600"
                            }`}
                        >
                            {item.status}
                        </span>
                        </td>

                        <td className="p-3">{item.tanggal}</td>

                        <td className="py-5 px-4">
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
    </div>
  );
}
