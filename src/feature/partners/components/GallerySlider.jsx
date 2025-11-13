import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { ChevronLeft, ChevronRight } from "lucide-react"; 

const images = [
  "/images/gallery/gallery1.jpg",
  "/images/gallery/gallery2.jpg",
  "/images/gallery/gallery3.jpg",
  "/images/gallery/gallery4.jpg",
  "/images/gallery/gallery5.jpg",
  "/images/gallery/gallery6.jpg",
];

export default function GallerySlider() {
  const [thumbsSwiper, setThumbsSwiper] = React.useState(null);
  const [activeIndex, setActiveIndex] = React.useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto py-10 px-4">
      <div className="relative group">
        <Swiper
          spaceBetween={10}
          navigation={{
            prevEl: ".custom-prev",
            nextEl: ".custom-next",
          }}
          thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
          modules={[Navigation, Thumbs]}
          className="rounded-xl overflow-hidden"
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img
                src={src}
                alt={`Gallery ${i + 1}`}
                className="w-full h-[300px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="custom-prev absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
          <ChevronLeft className="w-5 h-5 md:w-6 md:h-6" />
        </button>
        <button className="custom-next absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white text-gray-800 rounded-full p-2 md:p-3 shadow-lg transition-all duration-200 opacity-0 group-hover:opacity-100">
          <ChevronRight className="w-5 h-5 md:w-6 md:h-6" />
        </button>
      </div>

      <div className="relative mt-4">
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={3}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[Thumbs]}
          className="thumbnail-swiper"
          breakpoints={{
            640: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 5,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <div className="relative cursor-pointer rounded-lg overflow-hidden group">
                <img
                  src={src}
                  alt={`Thumbnail ${i + 1}`}
                  className="w-full h-16 md:h-20 lg:h-24 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div
                  className={`absolute inset-0 bg-black/50 transition-opacity duration-300 ${
                    activeIndex === i ? "opacity-0" : "opacity-100"
                  }`}
                />
                {activeIndex === i && (
                  <div className="absolute inset-0 border-2 md:border-3 border-yellow-400 rounded-lg" />
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}