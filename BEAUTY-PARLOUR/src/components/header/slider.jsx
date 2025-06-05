import React, { useState, useEffect } from "react";

const SimpleSlider = () => {
  const images = [
    "/public/asset 1.jpeg",
    "/public/asset 2.jpeg",
    "/public/asset 3.jpeg",
    "/public/asset 4.jpeg",
    "/public/asset 5.jpeg",
    "/public/asset 6.jpeg",
  ];

  const [index, setIndex] = useState(0);

  const goToSlide = (slideIndex) => {
    setIndex(slideIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-black text-white text-center py-10">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="mx-auto w-[68.50%] h-auto rounded-lg shadow-lg "
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
  );
};

export default SimpleSlider;
