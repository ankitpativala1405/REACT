// import React, { useState } from "react";

// const SimpleSlider = () => {
//   const images = [
//     "/public/asset 1.jpeg",
//     "/public/asset 2.jpeg",
//     "/public/asset 3.jpeg",
//     "/public/asset 4.jpeg",
//     "/public/asset 5.jpeg",
//     "/public/asset 6.jpeg",
//   ];

//   const [index, setIndex] = useState(0);

//   const showNext = () => {
//     setIndex((index + 1) % images.length);
//   };

//   const showPrev = () => {
//     setIndex((index - 1 + images.length) % images.length);
//   };

//   return (
//     <div style={{ textAlign: "center" }}>
//       <img
//         src={images[index]}
//         alt={`Slide ${index + 1}`}
//         width="600"
//         height="300"
//       />
//       <div style={{ marginTop: "10px" }}>
//         <button onClick={showPrev} style={{ marginRight: "10px" }}>
//           Previous
//         </button>
//         <button onClick={showNext}>Next</button>
//       </div>
//     </div>
//   );
// };

// export default SimpleSlider;

import React, { useState } from "react";

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

  const showNext = () => {
    setIndex((index + 1) % images.length);
  };

  const showPrev = () => {
    setIndex((index - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-black text-white text-center py-10">
      <img
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="mx-auto w-[68.50%] h-auto rounded-lg shadow-lg "
      />
      <div className="mt-6">
        <button
          onClick={showPrev}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-l focus:outline-none"
        >
          Previous
        </button>
        <button
          onClick={showNext}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SimpleSlider;
