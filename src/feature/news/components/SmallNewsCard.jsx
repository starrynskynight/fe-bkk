import React from 'react'

const SmallNewsCard = ({ image, title, date, category, views }) => {
  return (
    <div className="bg-white rounded-xl w-[280px] shadow-sm overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-md duration-200">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-[280px] h-[280px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <span className="absolute top-2 left-2 bg-[#0b1437] text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {category}
        </span>
        <div className="absolute bottom-2 left-2 right-2 text-white text-xs">
          <div className="flex justify-between items-center mb-1">
            <p className="opacity-90">{date}</p>
            <p className="opacity-90">Dilihat: {views}</p>
          </div>
          <h1 className="text-sm font-semibold leading-tight line-clamp-2">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default SmallNewsCard
