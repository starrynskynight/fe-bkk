import React from "react";

const AlumniCard = ({ message, name, company, image }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md w-[528px] flex-shrink-0 overflow-hidden flex flex-col h-[384px]">
      <div className="p-6 text-[#373642] text-lg leading-relaxed flex-1">
        {message}
      </div>

      <div className="bg-yellow-400 px-8 py-6 flex items-center gap-3 mt-auto">
        <img
          src={image}
          alt={name}
          className="w-26 h-26 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-white text-[22px]">{name}</p>
          <p className="text-[#E2DEDC] text-lg">{company}</p>
        </div>
      </div>
    </div>
  );
};

export default AlumniCard;
