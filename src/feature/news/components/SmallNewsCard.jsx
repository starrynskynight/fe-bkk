import React from 'react'

const SmallNewsCard = ({ image, title, date, category, views }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col transition hover:-translate-y-1 hover:shadow-md duration-200 w-full md:w-[280px]">
      <div className="relative">
        <img
          src={image}
          alt={title}
          className="w-full h-56 md:h-[280px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>

        <span className="absolute top-2 left-2 bg-[#0b1437] text-white text-[11px] font-medium px-2.5 py-1 rounded-md">
          {category}
        </span>
        <div className="absolute bottom-0 left-3 right-3 text-white pb-3">
          <div className="flex justify-between text-sm">
            <p>{date}</p>
            <p>Dilihat: {views}x</p>
          </div>
          <h1 className="font-semibold leading-tight mt-1">{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SmallNewsCard
