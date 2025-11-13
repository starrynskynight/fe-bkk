import React from "react";

const BigNewsCard = ({ image, title, date, category, views }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-md duration-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[590px] h-[590px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <span className="absolute top-3 left-3 bg-[#0b1437] text-white text-sm font-medium px-3 py-1 rounded-md">
          {category}
        </span>
        <div className="absolute bottom-0 left-3 right-3 text-white pb-3">
          <div className="flex justify-between text-sm">
            <p>{date}</p>
            <p>Dilihat: {views}x</p>
          </div>
          <h1 className="font-semibold text-lg leading-tight">
            {title}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default BigNewsCard;
