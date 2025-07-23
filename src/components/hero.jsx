import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    title: "Selling Concert Tickets",
    subtitle:
      "Post-ironic drinking vinegar chambray quinoa. Skateboard farm-to-table artisan kombucha.",
    button: "Read More",
    image: "/images/concert1.jpg",
  },
  {
    title: "Buy Directly from Organizers",
    subtitle: "Pay online or choose cash on delivery.",
    button: "Learn More",
    image: "/images/concert2.jpg",
  },
  {
    title: "Get Your Tickets Instantly",
    subtitle: "Via email or right at your door!",
    button: "Explore Now",
    image: "/images/concert3.jpg",
  },
];

const Hero = () => {
  return (
    <div className="relative w-full h-[85vh]">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center text-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className=" bg-opacity-60 p-8 rounded-lg text-white max-w-2xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{slide.title}</h1>
                <p className="mb-6">{slide.subtitle}</p>
                <button className="bg-white text-black px-6 py-2 font-semibold hover:bg-gray-200 transition">
                  {slide.button}
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Hero;


