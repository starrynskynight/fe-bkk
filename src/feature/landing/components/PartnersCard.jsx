import React from "react";

const PartnersCard = ({ logo, name, description }) => {
  return (
    <div className="flex flex-col gap-4 items-center text-center p-6">
      <img src={logo} alt={name} className="w-25 h-25 object-contain rounded-full" />
      <h3 className="font-semibold text-[22px] text-black">{name}</h3>
      <p className="text-[#373642] text-lg">{description}</p>
    </div>
  );
};

export default PartnersCard;
