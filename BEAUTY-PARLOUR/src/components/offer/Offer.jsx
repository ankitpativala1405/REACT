import React from "react";

const Offer = () => {
  return (
    <>
      <section className="w-full bg-black">
        <div className="container mx-auto">
          <div className="bg-black">
            <div className="bg-[url('../../../public/offer-banner.jpg')] bg-cover bg-center h-[300px] flex items-center justify-around text-white">
              <h3 className="text-5xl font-bold text-red-600">OFFERS</h3>
              <h3 className="text-5xl font-bold text-red-600">&nbsp;</h3>
              <h3 className="text-5xl font-bold text-red-600">&nbsp;</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full bg-[#e2e2e2]">
        <div className="container mx-auto">
          <div className="bg-[#e2e2e2] p-20">
            <img src="../../../public/offer-hero.jpg" alt="" />
          </div>
        </div>
      </section>
      <section className="w-full">
        <div className="container mx-auto">
          <div>
            <div></div>
            <div></div>
          </div>
          <div>
            <div></div>
            <div></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Offer;
