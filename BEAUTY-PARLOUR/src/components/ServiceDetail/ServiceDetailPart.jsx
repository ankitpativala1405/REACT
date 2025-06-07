import React from "react";

const ServiceDetailPart = () => {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10 px-30">
            <div className="w-full lg:w-1/4">
              <ul className="space-y-2 text-2xl font-black">
                {[
                  "Skin",
                  "Hair",
                  "Makeup",
                  "Hands & Feet",
                  "Services - Men",
                  "Services - Women",
                ].map((item) => (
                  <li
                    key={item}
                   className="group flex items-center justify-between border-b border-gray-400 pb-2 font-bold text-black hover:text-red-600 cursor-pointer"
                  >
                    {item}
                    <i className="fa-solid fa-chevron-right text-md text-black group-hover:text-red-600"></i>
                  </li>
                  
                  
                ))}
              </ul>
            </div>

            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { label: "SKIN", img: "/skin.jpg" },
                { label: "HAIR", img: "/hair.jpg" },
                { label: "MAKEUP", img: "/makeup.jpg" },
                { label: "HANDS & FEET", img: "/handfeet.jpg" },
              ].map((service) => (
                <div
                  key={service.label}
                  className="relative bg-white shadow-2xl rounded-md overflow-hidden"
                >
                  <img
                    src={service.img}
                    alt={service.label}
                    className="w-full h-[220px] object-cover transition-transform duration-700 hover:scale-140"
                  />
                  <div className="absolute bottom-0 w-full bg-white/80 py-4 text-center font-bold text-red-600 text-lg">
                    {service.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDetailPart;
