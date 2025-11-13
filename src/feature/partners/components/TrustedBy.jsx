export default function TrustedBy() {
  const logos = [
    { src: "/images/partners/daihatsu.jpg", alt: "Daihatsu" },
    { src: "/images/partners/mayora.jpg", alt: "Mayora" },
    { src: "/images/partners/panverta.jpg", alt: "Panverta" },
    { src: "/images/partners/satoria.jpg", alt: "Satoria" },
    { src: "/images/partners/sekawan.jpg", alt: "Sekawan" },
  ];

  return (
    <section className="bg-[#0a1448] text-white rounded-2xl py-8 md:py-12 px-6 md:px-12 max-w-6xl mx-auto my-10">
      <h2 className="text-base md:text-lg font-semibold whitespace-nowrap mb-4">
          Dipercaya Oleh:
      </h2>
      <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-12">
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 md:gap-12 flex-1">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center transition-transform hover:scale-110 duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-8 md:h-20 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity duration-300 filter grayscale hover:grayscale-0"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}