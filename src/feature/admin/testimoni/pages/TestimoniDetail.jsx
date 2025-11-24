import { useParams, useNavigate, Link } from "react-router-dom";
import dataTesti from "../data/testimonial.json"; 
import BreadCrumbs from "@/components/common/BreadCrumbs";
import Button from "@/components/common/Button";

const TestimoniDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = dataTesti.find((d) => d.id === parseInt(id));

  if (!item) {
    return <p className="text-center mt-10">Testimoni tidak ditemukan.</p>;
  }

  return (
    <div className="flex flex-col gap-6 p-6 md:p-10">
      <BreadCrumbs
        manual={[
          { label: "Detail Testimoni", path: `/testimoni/${id}` },
        ]}
      />

      <div className="bg-white rounded-xl shadow-sm p-6 md:p-10">
        <div className="flex items-center gap-4">
          <img
            src={item.image}
            alt={item.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div>
            <h2 className="text-xl font-semibold text-[#0E1947]">{item.name}</h2>
            <p className="text-base text-gray-700">{item.company}</p>
          </div>
        </div>

        <p className="mt-6 leading-relaxed text-gray-700">{item.review}</p>
      </div>

      <div className="bg-white rounded-[10px] shadow-sm p-5 flex justify-end">
        <Button
          className="bg-[#FFC107] text-white hover:bg-[#f5c636] rounded-[7px] font-bold text-[13px] px-4"
          onClick={() => navigate(-1)}
        >
          Kembali
        </Button>
      </div>
    </div>
  );
};

export default TestimoniDetail;
