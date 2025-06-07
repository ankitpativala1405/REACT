import React, { useState } from "react";

const ServiceDetailPart = () => {
  const [openItem, setOpenItem] = useState(null);

  const menuItems = [
    {
      title: "Skin",
      subItems: [
        "Skin Care - Treatments",
        "Body Care",
        "Skin Care",
        "Skin Care - Basics",
        "Skin Care - Depilation",
        "Consultation",
      ],
    },
    {
      title: "Hair",
      subItems: [
        "Form",
        "Hair Care",
        "Colors",
        "Styling",
        "Haircut",
        "Consultation",
      ],
    },
    {
      title: "Makeup",
      subItems: [
        "Bridal",
        "Party",
        "Day Look",
        "Styling",
        "Saree Drape",
        "Outdoor",
        "Eyes",
      ],
    },
    {
      title: "Hands & Feet",
      subItems: [
        "Manicure",
        "Pedicure",
        "Polish",
        "Hand Care",
        "Feet Care",
        "Nails",
      ],
    },
    {
      title: "Services - Men",
      subItems: [
        "Shave",
        "Cut",
        "Color",
        "Skin",
        "Hair",
        "Makeup",
        "Hands & Feet",
      ],
    },
    {
      title: "Services - Women",
      subItems: [
        "Spa",
        "Color",
        "Treatment",
        "Skin",
        "Hair",
        "Makeup",
        "Hands & Feet",
      ],
    },
  ];

  const services = [
    { label: "SKIN", img: "/skin.jpg" },
    { label: "HAIR", img: "/hair.jpg" },
    { label: "MAKEUP", img: "/makeup.jpg" },
    { label: "HANDS & FEET", img: "/handfeet.jpg" },
  ];

  const toggleItem = (title) => {
    setOpenItem((prev) => (prev === title ? null : title));
  };

  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="container mx-auto px-4 py-12">
          <div className="flex flex-col lg:flex-row gap-10 px-30">
            {/* Sidebar Menu */}
            <div className="w-full lg:w-1/4">
              <ul className="space-y-2 text-xl font-black">
                {menuItems.map((item) => (
                  <li key={item.title}>
                    <div
                      onClick={() => toggleItem(item.title)}
                      className="group flex items-center justify-between border-b border-gray-400 pb-2 font-bold text-black hover:text-red-600 cursor-pointer"
                    >
                      {item.title}
                      <i
                        className={`fa-solid fa-chevron-${
                          openItem === item.title ? "down" : "right"
                        } text-md text-black group-hover:text-red-600 transition-all duration-300`}
                      ></i>
                    </div>

                    {/* Dropdown */}
                    {openItem === item.title && (
                      <ul className="mt-2 ml-3 space-y-1 text-[1.1rem] font-normal text-gray-700">
                        {item.subItems.map((sub, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 hover:text-black hover:font-black cursor-pointer"
                          >
                          <i className="fa-regular fa-circle text-[7px] items-center justify-center"></i> {sub}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Grid */}
            <div className="w-full lg:w-3/4 grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service) => (
                <div
                  key={service.label}
                  className="relative bg-white shadow-2xl rounded-md overflow-hidden"
                >
                  <img
                    src={service.img}
                    alt={service.label}
                    className="w-full h-[220px] object-cover transition-transform duration-700 hover:scale-130"
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
