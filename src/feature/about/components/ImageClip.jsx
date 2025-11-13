import React from 'react'

const ImageClip = () => {
  return (
    <div className="rounded-3xl mb-8">
        <div
          className="relative mx-auto"
          style={{
            width: "605px",
            height: "450px",
          }}
        >
          <div
            className="absolute shadow-xl transition-transform hover:scale-105"
            style={{
              bottom: 50,
              left: -5,
              height: "237px",
              width: "210px",
              backgroundImage: "url('/images/image-clip/image2.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: "20px",
              zIndex: 2,
            }}
          ></div>

            <svg
              className="absolute top-0 left-0 transition-transform hover:scale-105"
              width="605"
              height="450"
              viewBox="0 0 605 450"
              xmlns="http://www.w3.org/2000/svg"
              style={{ zIndex: 1 }}
            >
              <defs>
                <clipPath id="clip-shape">
                  <path d="M555 0C567.15 2.2549e-06 577 9.84974 577 22V296.408H361.775C352.939 296.408 345.775 303.572 345.775 312.408V352.926H218.496V168.947C218.496 156.797 208.646 146.947 196.496 146.947H0V22C1.06927e-05 9.84974 9.84974 0 22 0H555Z" />
                </clipPath>
              </defs>
              
              <image
                href="/images/image-clip/image3.png"
                width="605"
                height="450"
                clipPath="url(#clip-shape)"
                preserveAspectRatio="xMidYMid slice"
              />
            </svg>

            <div
              className="absolute transition-transform hover:scale-105"
              style={{
                bottom: -30,
                right: 15,
                height: "165.6px",
                width: "235px",
                backgroundImage: "url('/images/image-clip/image1.png')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "20px",
                zIndex: 2,
              }}
            ></div>
        </div>
    </div>
  )
}

export default ImageClip
