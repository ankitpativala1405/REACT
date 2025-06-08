import React from "react";

const BookAppointmentS2 = () => {
  return (
    <>
      <section className="bg-black">
        <div className="container mx-auto">
          <div className="flex p-15">
            <div className="text-white flex flex-col text-left  justify-center p-7">
              <h1 className="text-4xl font-bold mb-4 text-left text-[#F5C2E1]">
                WHY CHOOSE LAKMĒ SALON?
              </h1>
              <p className="text-[18px] text-gray-300 max-w-xl text-justify pt-7">
                For decades Lakmē salon has been helping Indian brides in the
                country look their absolute best on the most important day of
                their life. Having an expertise of over 40 years in the beauty
                industry, Lakmē Salon has been beautifying the country ever
                since its inception and has been transforming consumers into
                Showstoppers. With backstage experts who have trained vigorously
                and glammed up models on runways of Lakmē Fashion Week and over
                35,000 brides across the nation, Lakmē Salon is your one-stop
                solution for all things Bridal.
              </p>
            </div>
            <div>
              <img
                src="/public/BookAppointmentS2.jpg"
                alt=""
                className="border-16 border-double border-[rgba(255,255,255,0.7)]"
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-4 border-[rgba(245,240,240,0.7)]" />
      <section className="bg-[#121111e6]">
        <div className="container mx-auto">
          <div className="flex p-15">
            <div>
              <img
                src="/public/BookAppointmentS22.jpg"
                alt=""
                className="border-16 border-double border-[rgba(255,255,255,0.7)]"
              />
            </div>
            <div className="text-white flex flex-col text-left  justify-center p-7">
              <h1 className="text-4xl font-bold mb-4 text-left text-[#F5C2E1] uppercase">
                Services
              </h1>
              <p className="text-[18px] text-gray-300 max-w-xl text-justify pt-6">
                Lakmē salon has specially curated looks right from the
                engagement to the mehendi and cocktail to the actual wedding. We
                accompany you every step of the way to ensure you put your best
                face forward.
              </p>
            </div>
          </div>
        </div>
      </section>
      <hr className="border-t-4 border-[rgba(245,240,240,0.7)]" />
      <section className="bg-[#121111e6]">
        <div className="container mx-auto">
        <div className="flex flex-col mx-auto px-20 py-7">
           <h1 className="text-4xl font-bold mb-4 text-left text-[#F5C2E1] uppercase w-full">
            Cost
          </h1>
          <p className="text-[18px] text-gray-300 max-w-xl text-justify pt-4 w-full text-nowrap">
            We at Lakmē Salon know that weddings can be an expensive affair. So,
            to ensure that you don’t burn a hole in your pocket, our bridal
            services start from INR 15,000 only.
          </p>
        </div>       
        </div>
      </section>
    </>
  );
};

export default BookAppointmentS2;
