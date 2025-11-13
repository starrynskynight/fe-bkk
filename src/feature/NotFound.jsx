import { Link } from "react-router-dom";
import NotFoundImg from "/images/notfoundbkk.png";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-center px-4">
      <img
        src={NotFoundImg}
        alt="404 Not Found"
        className="w-[380px] sm:w-[420px] mb-6"
      />

      <h1 className="text-[22px] sm:text-2xl font-semibold text-gray-800 mb-2">
        Halaman Tidak Ditemukan
      </h1>
      <p className="text-gray-600 mb-6 text-sm sm:text-base max-w-md">
        Maaf, halaman yang kamu cari tidak tersedia atau sudah dipindahkan.
      </p>

      <Link
        to="/"
        className="bg-[#F4B400] hover:bg-[#e5a700] text-white px-5 py-2 rounded-md text-sm sm:text-[15px] font-medium shadow-md transition-all duration-200"
      >
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
