import React from "react";
import ActionButton from "@/components/common/ActionButton";
import { Trash2, Eye } from "lucide-react";
import { HiPencil } from "react-icons/hi2";

export default function TestimonialTable({ data = [], onView, onEdit, onDelete }) {
  return (
    <div className="overflow-x-auto rounded-lg">
      <table className="w-full min-w-[900px] border-collapse text-sm">
        <thead>
          <tr className="bg-[#FFC107] text-white text-left">
            <th className="py-3 px-6">Gambar</th>
            <th className="py-3 px-6">Nama User</th>
            <th className="py-3 px-6">Perusahaan</th>
            <th className="py-3 px-6">Ulasan</th>
            <th className="py-3 px-6 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.length === 0 ? (
            <tr>
              <td colSpan="5" className="py-6 text-center text-gray-500 italic">
                Belum ada data testimonial.
              </td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="py-4 px-6">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-full"
                  />
                </td>

                <td className="py-4 px-6">{item.name}</td>
                <td className="py-4 px-6">{item.company}</td>

                <td className="py-4 px-6 text-sm text-gray-700 max-w-[480px]">
                  {item.review}
                </td>

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
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
