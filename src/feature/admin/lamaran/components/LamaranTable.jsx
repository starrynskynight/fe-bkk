import React from "react";
import { Trash2, Eye } from "lucide-react";
import ActionButton from "@/components/common/ActionButton";

export default function LamaranTable({ data, onView, onDelete }) {
  const getStatusBadge = (status) => {
    const statusMap = {
      submitted: { label: 'Belum Diproses', class: 'bg-gray-100 text-gray-600' },
      reviewed: { label: 'Dalam Proses', class: 'bg-yellow-100 text-yellow-600' },
      accepted: { label: 'Diterima', class: 'bg-green-100 text-green-600' },
      rejected: { label: 'Ditolak', class: 'bg-red-100 text-red-600' },
    };
    
    return statusMap[status] || statusMap.submitted;
  };

  const formatDate = (dateString) => {
    if (!dateString) return '-';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[900px] border-collapse text-sm rounded-md">
        <thead>
          <tr className="bg-[#FFC107] text-white text-left rounded-md">
            <th className="p-3">Nama</th>
            <th className="p-3">Email</th>
            <th className="p-3">No. HP</th>
            <th className="p-3">Tahun Lulus</th>
            <th className="p-3">Status</th>
            <th className="p-3">Tanggal Melamar</th>
            <th className="p-3 text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => {
            const statusInfo = getStatusBadge(item.status);
            
            return (
              <tr key={item.id} className="border-b hover:bg-gray-50">
                <td className="p-3 font-medium">{item.full_name}</td>
                <td className="p-3">{item.email}</td>
                <td className="p-3">{item.phone}</td>
                <td className="p-3">{item.graduation_year || '-'}</td>

                <td className="p-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusInfo.class}`}>
                    {statusInfo.label}
                  </span>
                </td>

                <td className="p-3">{formatDate(item.created_at)}</td>

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
            );
          })}
        </tbody>
      </table>

      {/* Empty State */}
      {data.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <p>Tidak ada data lamaran</p>
        </div>
      )}
    </div>
  );
}