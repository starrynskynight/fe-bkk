import ActionButton from "../../../../components/common/ActionButton";
import { Trash2, Eye } from "lucide-react";
import { HiPencil } from "react-icons/hi2";

export default function GalleryTable({ data = [], onEdit, onDelete, onView }) {
  return (
    <div className="w-full overflow-x-auto rounded-lg">
      <table className="w-full min-w-[900px] border-collapse text-sm md:text-base">
        <thead>
          <tr className="bg-[#FFC107] inter font-semibold text-[13px] text-white text-left">
            <th className="py-3 px-6 text-center">No</th>
            <th className="py-3 px-4">Gambar</th>
            <th className="py-3 px-4 md:w-[20%]">Judul</th>
            <th className="py-3 px-4 md:w-[35%]">Deskripsi</th>
            <th className="py-3 px-4 md:w-[15%]">Kategori</th>
            <th className="py-3 px-4 md:w-[15%] text-center">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <tr
                key={item.id || index}
                className="hover:bg-gray-50 transition border border-[#EBF1F6]"
              >
                <td className="py-5 px-4 text-center text-black whitespace-nowrap">
                  {index + 1}
                </td>

                <td className="py-4 px-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded-lg border"
                  />
                </td>

                <td className="py-5 px-4 text-[13px] font-semibold whitespace-normal break-words">
                  {item.title}
                </td>

                <td className="py-5 px-4 text-[13px] whitespace-normal break-words">
                  {item.description}
                </td>

                <td className="py-5 px-4">
                  <span className={`px-3 py-1 text-xs rounded-full font-medium
                    ${
                      item.category === "Promo"
                        ? "bg-green-100 text-green-600"
                        : item.category === "Event"
                        ? "bg-blue-100 text-blue-600"
                        : "bg-gray-100 text-gray-600"
                    }
                  `}>
                    {item.category}
                  </span>
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
          ) : (
            <tr>
              <td
                colSpan="6"
                className="py-6 text-center text-gray-500 italic"
              >
                Belum ada data gallery.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
