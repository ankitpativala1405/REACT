const services = [
  { title: "Pedicure & Manicure", img: "/asset 8.jpeg" },
  { title: "Beauty Sutra Facial", img: "/asset 9.jpeg" },
  { title: "Ethereal Bloom Bridal", img: "/asset 10.jpeg" },
  { title: "Cut & Colour Collection", img: "/asset 11.jpeg" },
  { title: "Everyday Glam Makeup", img: "/asset 12.jpeg" },
];

const Service = () => {
  return (
    <>
      <main className="bg-[#e2e2e2] flex flex-col items-center">
        <div className="container flex justify-center flex-col items-center">
          <div className="pt-5">
            <h2 className="flex justify-center text-4xl text-bold font-[800] tracking-wider">
              TRENDSETTING SERVICES
            </h2>
            <div className="flex justify-center pt-4">
              <div className="bg-red-500 w-[35px] h-[10px]"></div>
            </div>
            <p className="flex justify-center text-[17px] text-center pt-5">
              Our runway experts have curated some of the most popular services
              at Lakmē Salon, just for you.
              <br />
              Take your pick and head to your nearest salon and get started on
              your makeover!
            </p>
          </div>
          <div className="pt-10 flex flex-wrap justify-center gap-6 pb-15 w-[85%]">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative rounded-lg overflow-hidden w-full sm:w-[45%] md:w-[30%] lg:w-[18%] shadow-lg group"
              >
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-auto object-cover transform transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 w-full bg-white/80 text-red-600 text-center font-bold text-lg py-4">
                  {service.title}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Service;
