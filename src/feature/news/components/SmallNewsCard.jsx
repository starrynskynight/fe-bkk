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
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <span className="absolute top-3 left-3 bg-[#0b1437] text-white text-sm font-medium px-3 py-1 rounded-md">
          {category}
        </span>
        <div className="absolute bottom-0 left-3 text-white">
            <div className="flex justify-between">
                <p>{date}</p>
                <p>Dilihat: {views}x</p>
            </div>
            <h1>{title}</h1>
        </div>
      </div>
    </div>
  )
}

export default SmallNewsCard
