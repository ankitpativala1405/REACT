import React, { useState, useEffect } from "react";
import { product } from "../../product/products";

function trimer(text, wordLimit) {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
}

const BootstrapComponent = () => {
  const productList = product;
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
    <div className="container">
      <div className="d-flex justify-content-center flex-row align-items-center  gap-4 p-4">
        <div className="mb-3">
          <button
            onClick={handlePrevious}
            className="btn btn-primary"
            aria-label="Previous Product"
          >
            &lt;
          </button>
        </div>

        <div className="bg-dark text-white rounded-3 shadow-lg p-4 d-flex flex-column flex-md-row align-items-center gap-3">
          <a href="#" className="flex-shrink-0" tabIndex={-1}>
            <img
              src={currentProduct.image}
              alt={currentProduct.title}
              className="img-fluid rounded"
              style={{ width: "250px", height: "250px", objectFit: "cover" }}
            />
          </a>
          <div className="flex-grow-1 d-flex flex-column justify-content-between">
            <p
              className={`m-0 text-muted transition-opacity duration-700 ease-in-out ${
                showText ? "opacity-100" : "opacity-0"
              }`}
              aria-live="polite"
            >
              {textContent}
            </p>
            <div className="pt-2">
              <a
                href="#"
                className="text-light hover:text-primary"
                tabIndex={-1}
              >
                <h3 className="h5 font-weight-bold">
                  {currentProduct.title}
                </h3>
              </a>
            </div>
          </div>
        </div>

        <div className="mb-3">
          <button
            onClick={handleNext}
            className="btn btn-primary"
            aria-label="Next Product"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default BootstrapComponent;
