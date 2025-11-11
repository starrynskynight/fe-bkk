import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const categories = [
  "Semua Foto",
  "Kegiatan Sekolah",
  "Kerja Sama Industri",
  "Alumni",
  "Job Fair",
];

const galleryData = [
  { id: 1, image: "/images/gallery1.jpg", category: "Kegiatan Sekolah" },
  { id: 2, image: "/images/gallery2.jpg", category: "Alumni" },
  { id: 3, image: "/images/gallery3.jpg", category: "Job Fair" },
  { id: 4, image: "/images/gallery4.jpg", category: "Kerja Sama Industri" },
  { id: 5, image: "/images/gallery5.jpg", category: "Kegiatan Sekolah" },
  { id: 6, image: "/images/gallery6.jpg", category: "Job Fair" },
  { id: 7, image: "/images/gallery7.jpg", category: "Alumni" },
];

const GalleryTab = () => {
  const [activeCategory, setActiveCategory] = useState("Semua Foto");

  const filteredImages =
    activeCategory === "Semua Foto"
      ? galleryData
      : galleryData.filter((img) => img.category === activeCategory);

  const breakpointColumnsObj = {
    default: 3,
    1100: 3,
    700: 2,
    500: 1,
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Tabs Kategori */}
      <div className="flex justify-center gap-6 border-b mb-8 text-sm md:text-base">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={clsx(
              "pb-2 transition-colors duration-200 relative",
              activeCategory === cat
                ? "text-yellow-500 font-medium after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-yellow-400"
                : "text-gray-600 hover:text-yellow-400"
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex gap-4"
        columnClassName="bg-clip-padding"
      >
        <AnimatePresence>
          {filteredImages.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="mb-4 overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <LazyLoadImage
                src={item.image}
                alt={item.category}
                effect="blur"
                className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </Masonry>
    </div>
  );
};

export default GalleryTab;
