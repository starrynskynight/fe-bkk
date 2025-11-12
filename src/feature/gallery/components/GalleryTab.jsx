import React, { useState, useEffect } from "react";
import clsx from "clsx";
import Masonry from "./Masonry";
import galleryDataRaw from "../data/dummyGallery.json";

const categories = [
  "Semua Foto",
  "Kegiatan Sekolah",
  "Kerja Sama Industri",
  "Alumni",
  "Job Fair",
];

const GalleryTab = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Foto");
  const [galleryData, setGalleryData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImagesWithHeight = async () => {
      const itemsWithHeight = await Promise.all(
        galleryDataRaw.map(
          (item) =>
            new Promise((resolve) => {
              const img = new Image();
              img.src = item.img;
              img.onload = () => {
                resolve({
                  ...item,
                  height: img.naturalHeight, 
                });
              };
              img.onerror = () => {
                resolve({
                  ...item,
                  height: 800,
                });
              };
            })
        )
      );
      setGalleryData(itemsWithHeight);
      setLoading(false);
    };

    loadImagesWithHeight();
  }, []);

  const filteredImages =
    activeCategory === "Semua Foto"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <div className="flex flex-wrap justify-center gap-6 border-b mb-8 text-sm md:text-base">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "pb-2 transition-colors duration-200 relative whitespace-nowrap",
              activeCategory === cat
                ? "text-yellow-500 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                : "text-gray-600 hover:text-yellow-400"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-500"></div>
        </div>
      ) : (
        <div className="min-h-[600px]">
          <Masonry
            items={filteredImages}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover={true}
            hoverScale={1.05} 
            blurToFocus={true}
            colorShiftOnHover={false} 
            showOverlay={true}
            onItemClick={(item) => {
              console.log('Clicked:', item.title);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default GalleryTab;