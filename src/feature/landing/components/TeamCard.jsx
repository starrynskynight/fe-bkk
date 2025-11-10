import React from "react";

const TeamCard = ({ image, name, description }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 gap-6">
      <div className="w-30 h-30 bg-gray-200 rounded-[20px] overflow-hidden ">
        {image ? (
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a8.25 8.25 0 0115 0"
              />
            </svg>
          </div>
        )}
      </div>

      <h3 className="font-semibold text-lg md:text-2xl text-[#0b1437]">{name}</h3>

      <p className="text-[#373642] text-lg ">{description}</p>
    </div>
  );
};

export default TeamCard;
