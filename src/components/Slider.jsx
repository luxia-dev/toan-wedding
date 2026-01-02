// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import banner1 from "../assets/banner1.webp";
import banner2 from "../assets/banner2.webp";
import banner3 from "../assets/banner3.webp";

export default function Slider() {
  return (
    <div className="w-full h-full mt-14">
      <Swiper
        modules={[Autoplay, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        speed={800}
      >
        {[banner1, banner2, banner3].map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`banner-${index + 1}`}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
