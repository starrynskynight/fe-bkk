import React from "react";

const ThumbnailSection = ({ 
  backgroundImage, 
  children, 
  overlay = true 
}) => {
  return (
    <section
      className="relative w-full h-[300px] md:h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {overlay && (
        <div className="absolute inset-0 bg-black/40"></div>
      )}

      <div className="absolute -bottom-5 z-10 w-full max-w-5xl px-6">
        {children}
      </div>
    </section>
  );
};

export default ThumbnailSection;
