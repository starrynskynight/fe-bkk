import React from "react";

const VisiMisiCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-r-3xl shadow-sm p-4 flex items-start gap-4">
      <div className="flex-shrink-0">
        <img src={icon} alt={title} className="w-full h-25" />
      </div>
      <div>
        <h3 className="text-lg md:text-[22px] font-bold text-[#0b1437] mb-1">{title}</h3>
        <p className="text-gray-600 text-lg  leading-relaxed">{description}</p>
      </div>
    </div>
  );
};

export default VisiMisiCard;
