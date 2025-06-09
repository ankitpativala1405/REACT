import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  Keyboard,
  Scrollbar,
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";

export default function BridalSlider() {
  const ModelName = [
    "Elegant Magnolia",
    "Sakura Shimmer",
    "Midnight Jasmine",
    "Caramel Meadow",
    "Gilded Rose",
    "Lotus Luxe",
    "Enchanted Lily",
    "Marigold Radiance",
    "Rouge Bloom",
    "Peach Poppy",
  ];

  const ModelAlt = [
    "Bridal 01",
    "Bridal 02",
    "Bridal 03",
    "Bridal 04",
    "Bridal 05",
    "Bridal 06",
    "Bridal 07",
    "Bridal 08",
    "Bridal 09",
    "Bridal 10",
  ];
  const ModelReview = [
    "The go-to look for all Bollywood beauties on their wedding day, this look features a flawless base that radiates a, porcelain-like complexion. A subtle rosy blush adds warmth and whimsy, while brushed-out brows frame the face with soft, natural definition.",
    "This soft, romantic look features a palette of pink undertones, with a gloss finish that adds a touch of glamour. Accentuated cheekbones shimmer with subtle highlighter, while pouty lips make a statement.  The result is a radiant, ethereal beauty that's perfect for the bride who wants to exude elegance and grace on her special day.",
    "This look is a masterful blend of traditional charm and contemporary glamour, perfect for the bride who wants to make a statement on her special day. Dramatic velvety eyeliner frames the eyes with allure, paired with copper eyeshadow that shimmers like the golden light.",
    "Inspired by the global trend of 'Latte Makeup', Caramel Meadow is a warm and sultry makeup look that is comprised of nude brown pigments blended in perfect harmony to evoke a sun-kissed glow.  Curated for the bride that wants to look bold, yet understated, and prefers makeup that invokes her natural beauty.",
    "'Gilded Rose' is a stunning look that captures the delicate, shimmering essence of a flower in full bloom. Sharp, elongated liner and lifted, foxy eyes sparkle like dew-kissed petals, while plumped, glossy lips shine like the soft glow of a rose. This look is perfect for the bride who wants to radiate warmth & elegance.",
    "This stunning ensemble features bold, crimson red lips that evoke the vibrant hues, carefully crafted to make a statement. Dramatic, voluminous eyes that seem to tell a thousand stories, with precise eyeliner and luscious lashes that add depth and dimension. Perfect for the bride who wants to exude confidence and poise on her special day.",
    "Inspired by the euphoric beauty of Gen Z trends and the mesmerizing allure of holographic eyes, this ethereal bridal look unfurls like a rare blossom. Featuring holographic hues, paired with a glossy nude lip and lifted contour, this look is for the free-spirited bride who dares to dream.",
    "This radiant bridal look features soft, smudged liner, diffused pink-nude lips, and a gentle blush that evokes the delicate petals of a marigold. Perfect for the happy-go-lucky bride who exudes warmth and elegance, this look is ideal for the woman who wants to glow with natural beauty on her special day.",
    "A sophisticated and alluring makeup look that draws inspiration from the golden ages of cinema, comprised of full red lips and captivating eyes, this look is timeless yet modern. Curated for the bride who wants  to make a statement and has a passion for luxury.",
    "Inspired by Pantone's color of the year, this chic, modern style showcases soft peachy cheeks, gentle warm-toned eyes, and a radiant, glowing complexion. Crafted for the bride who wants to shine with effortless glamour & loves a soft whimsical charm.",
  ];

  const ModelImage = [
    "/public/778x1250_Bridal-01.jpg",
    "/public/778x1250_Bridal-10.jpg",
    "/public/778x1250_Bridal-02.jpg",
    "/public/778x1250_Bridal-03.jpg",
    "/public/778x1250_Bridal-04.jpg",
    "/public/778x1250_Bridal-05.jpg",
    "/public/778x1250_Bridal-06.jpg",
    "/public/778x1250_Bridal-07.jpg",
    "/public/778x1250_Bridal-08.jpg",
    "/public/778x1250_Bridal-09.jpg",
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        loop={true}
        keyboard={{ enabled: true }}
        breakpoints={{
          769: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
        }}
        scrollbar={true}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination, Autoplay]} 
        className="mySwiper"
      >
        {ModelName.map((model, i) => (
          <SwiperSlide key={i}>
            <div className="container mx-auto">
            <div className="relative">
              <img src={ModelImage[i]} alt={ModelAlt[i]} className="border-3 border-black"/>
              <div className="absolute top-1/2 bottom-0 my-auto bg-[rgba(63,64,64,0.5)] h-[190px] w-full p-5">
                <h3 className="text-[#EB212E] font-black text-xl uppercase">
                  {ModelName[i]}
                </h3>
                <p className="text-white pt-3 text-[0.9rem]">
                  {ModelReview[i]}
                </p>
              </div>
            </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
