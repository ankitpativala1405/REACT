import React, { useState, useEffect } from "react";
import { product } from "../../product/products";


function trimer(text, wordLimit) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

const Tailwind = () => {
  const productList = product
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showText, setShowText] = useState(false);
  const [textContent, setTextContent] = useState(
    trimer(productList[0].description, 100)
  );

  useEffect(() => {
    setShowText(false);

    const fadeOutTimeout = setTimeout(() => {
      const newText = trimer(productList[currentIndex].description, 100);
      setTextContent(newText);
    }, 300);

    const fadeInTimeout = setTimeout(() => {
      setShowText(true);
    }, 1000);

    return () => {
      clearTimeout(fadeOutTimeout);
      clearTimeout(fadeInTimeout);
    };
  }, [currentIndex, productList]);

  function handlePrevious() {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? productList.length - 1 : prevIndex - 1
    );
  }

  function handleNext() {
    setCurrentIndex((prevIndex) =>
      prevIndex === productList.length - 1 ? 0 : prevIndex + 1
    );
  }

  const currentProduct = productList[currentIndex];

  return (
    <>
      <div className="container">
        <div className="flex items-center mx-auto gap-[40px] p-[20px] text-center max-w-full flex-col md:flex-row">
          <div className="flex md:flex-col justify-center md:justify-between mb-[20px] gap-4 md:gap-6">
            <button
              onClick={handlePrevious}
              className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer text-lg transition duration-300 ease-in-out hover:bg-blue-600"
              aria-label="Previous Product"
            >
              &lt;
            </button>
          </div>

          <div className="text-white md:w-[1000px] w-full max-w-full h-[425px] border-[#ddd] rounded-2xl p-10 shadow-2xl overflow-hidden bg-[#121212] flex flex-col md:flex-row items-center gap-6">
            <a href="#" className="flex-shrink-0" tabIndex={-1}>
              <img
                src={currentProduct.image}
                alt={currentProduct.title}
                className="w-[250px] h-[250px] object-cover rounded-md shadow-lg"
              />
            </a>
            <div className="flex flex-col flex-grow justify-between h-full max-w-[650px]">
              <p
                className={`m-0 text-[#bbb] text-[1rem] text-left transition-opacity duration-700 ease-in-out ${
                  showText ? "opacity-100" : "opacity-0"
                }`}
                aria-live="polite"
              >
                {textContent}
              </p>
              <div className="pt-4">
                <a
                  href="#"
                  className="text-[#eee] hover:text-blue-400 transition-colors"
                  tabIndex={-1}
                >
                  <h3 className="text-[1.5rem] font-semibold">
                    {currentProduct.title}
                  </h3>
                </a>
              </div>
            </div>
          </div>

          <div className="flex md:flex-col justify-center md:justify-between mb-[20px] gap-4 md:gap-6">
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white border-none rounded-md cursor-pointer text-lg transition duration-300 ease-in-out hover:bg-blue-600"
              aria-label="Next Product"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Tailwind;
