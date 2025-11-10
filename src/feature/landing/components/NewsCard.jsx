import React from "react";

const NewsCard = ({ image, category, title, excerpt, date, link }) => {
  return (
    <div className="bg-white rounded-xl w-[588px] shadow-sm overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-md duration-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <span className="absolute top-3 left-3 bg-[#0b1437] text-white text-sm font-medium px-3 py-1 rounded-md">
          {category}
        </span>
      </div>

      <div className="p-5 flex flex-col justify-between flex-grow">
        <div>
          <h3 className="text-lg font-semibold text-[#0b1437] mb-2 line-clamp-2">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-4 line-clamp-2">{excerpt}</p>
        </div>
        <div className="flex items-center justify-between text-sm mt-auto">
          <span className="text-gray-400">{date}</span>
          <a
            href={link}
            className="text-yellow-500 font-medium hover:text-yellow-400 transition"
          >
            Baca Selengkapnya
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
