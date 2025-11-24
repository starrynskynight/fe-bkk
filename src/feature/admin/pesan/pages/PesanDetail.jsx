import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import  messagesData from "../data/pesanData.json";
import BreadCrumbs from "@/components/common/BreadCrumbs";

const DetailPesanMasuk = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [message, setMessage] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    const found = messagesData.find((item) => item.id === parseInt(id));
    if (found) {
      setMessage(found);
      setIsChecked(found.status === "Sudah Dibaca");
    }
  }, [id]);

  if (!message) return <p className="px-6 py-4">Data tidak ditemukan...</p>;

  const handleCheckbox = () => {
    setIsChecked(!isChecked);
    setMessage((prev) => ({
      ...prev,
      status: !isChecked ? "Sudah Dibaca" : "Belum Dibaca",
    }));
  };

  return (
    <div className="p-6">
      <BreadCrumbs
        manual={[
          { label: "Detail Pesan", path: `/pesan/detail/${id}` },
        ]}
      />

      <div className="bg-white p-6 rounded-xl shadow-sm border my-6">
        <h2 className="text-lg font-semibold mb-4">Detail Pesan Masuk Pengguna</h2>
        <hr className="border-[#D9D9D9]/80 my-6" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4">
          <DetailItem label="Nama Pengirim" value={message.nama} />
          <DetailItem label="Pesan" value={message.pesan} />
          <DetailItem label="Email Pengirim" value={message.email} />
          <DetailItem label="No. Telpon" value={message.telp} />
          <DetailItem label="Tanggal" value={message.tanggal} />
          <DetailItem label="Status" value={message.status} />
        </div>
      </div>

      <div className="bg-white flex items-center justify-between p-4 rounded-xl shadow-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckbox}
            className="w-4 h-4 accent-yellow-500"
          />
          <span>Tandai Sudah Dibaca</span>
        </label>

        <button
          onClick={() => navigate(-1)}
          className="px-4 py-2 text-white bg-yellow-400 hover:bg-yellow-500 transition rounded-lg text-sm font-semibold"
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

const DetailItem = ({ label, value }) => (
  <div className="flex text-sm">
    <p className="w-32 font-medium text-gray-700">{label} :</p>
    <p className="text-gray-800">{value}</p>
  </div>
);

export default DetailPesanMasuk;
