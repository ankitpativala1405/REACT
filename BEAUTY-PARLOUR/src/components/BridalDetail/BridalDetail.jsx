import React from "react";

const BridalDetail = () => {
  return (
    <>
      <section className="w-full bg-black">
        <div className="container mx-auto">
          <div className="flex mx-auto justify-around py-15 items-center max-w-[81%]">
            <div className="px-4 max-w-[525px]">
              <h2 className="text-red-600 text-[2rem] font-black uppercase">
                Why Choose Lakmē Salon?
              </h2>
              <p className="text-white pt-8 text-justify text-[1.2rem]">
                Weddings are all about creating memories with your loved ones.
                And picture-perfect memories require you to look flawless! Who
                better than the pioneers of beauty in India to help you achieve
                that perfect look on your big day? For decades, Lakmē Salon has
                been assisting Indian brides across the country in looking their
                absolute best on the most important day of their lives. Lakmē
                Salon helps brides slay every occasion and sparkle
                unapologetically. The experts at Lakmē Salon are here to ensure
                you put your best face forward and create those picture-perfect
                memories.
              </p>
            </div>
            <div>
              <img src="/public/Bridal_Page-01.jpg" className="" alt="" />
            </div>
          </div>
          <div className="flex mx-auto justify-around py-15 items-center max-w-[81%]">
            <div className="px-4 max-w-[525px]">
              <h2 className="text-red-600 text-[2rem] font-black uppercase">
                The Bridal Team
              </h2>
              <p className="text-white pt-8 text-justify text-[1.2rem]">
                "At Lakmē Salon, we go the extra mile to ensure every bride
                feels confident to sparkle and create picture-perfect memories
                that last a lifetime. We understand the uniqueness of each bride
                and strive to enhance her beauty while staying true to her
                individuality. From pre-wedding events to the big day itself,
                we're with you every step of the way on this important journey.
                Our experts undergo extensive training to bring to you best-in-
                class and latest trends from the world of beauty.” – Anupma
                Katyal, National Creative Director- Makeup, Lakmē Salon.
              </p>
              <p className="text-white text-justify text-[1.2rem] pt-10">
                When you choose Lakmē Salon for your bridal appointment, rest
                assured you're in the hands of highly trained professionals who
                are trained by Lakmē Fashion Week experts, committed to making
                your dream look a reality.
              </p>
            </div>
            <div>
              <img src="/public/Bridal_Page-02.jpg" className="" alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BridalDetail;
