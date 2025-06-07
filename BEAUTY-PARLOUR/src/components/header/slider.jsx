import React, { useState, useEffect } from "react";

const SimpleSlider = () => {
  const images = [
    "/public/asset 1.jpeg",
    "/public/asset 2.jpeg",
    "/public/asset 3.jpeg",
    "/public/asset 4.jpeg",
    "/public/asset 5.jpeg",
    "/public/asset 6.jpeg",
    "/public/asset 7.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <div className="w-full flex justify-around">
        <div className="bg-black text-white text-center py-10 w-full">
          <img
            src={images[index]}
            alt={`Slide ${index + 1}`}
            className="mx-auto max-w-[68.50%] h-auto rounded-lg shadow-lg "
          />
          <div className="mt-4 flex justify-center gap-4">
            {images.map((_, slideIndex) => (
              <button
                key={slideIndex}
                className={`w-[10px] h-[10px] mx-1 mt-2 mb-[-10px] rounded-full ${
                  slideIndex === index ? "bg-[#EB212E]" : "bg-gray-500"
                }`}
                onClick={() => goToSlide(slideIndex)}
                aria-label={`Go to slide ${slideIndex + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SimpleSlider;
