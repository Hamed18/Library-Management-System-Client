import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 

import a from "../../src/assets/Images/c-2.jpeg"
import b from "../../src/assets/Images/comic2.jpeg"
import c from "../../src/assets/Images/comic3.jpeg"
import d from "../../src/assets/Images/comic4.jpeg"
import e from "../../src/assets/Images/culture1.jpeg"
const Banner = () => {
  return (
    <div className="w-full h-60 md:h-96 lg:h-[600px] bg-gray-100">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop
        className="h-full"
      >
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={a}
              alt="Library Image 1"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold">
                Explore a World of Books
              </h2>
              <p className="text-white text-xl md:text-2xl mt-4">
                Discover new knowledge and wisdom with our extensive collection.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={b}
              alt="Library Image 2"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold">
                Your Gateway to Learning
              </h2>
              <p className="text-white text-xl md:text-2xl mt-4">
                Access books anytime, anywhere with our digital library.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={c}
              alt="Library Image 3"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold">
                Dive into Endless Knowledge
              </h2>
              <p className="text-white text-xl md:text-2xl mt-4">
                Join our community and start your learning journey.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={d}
              alt="Library Image 4"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold">
                A Place for Every Reader
              </h2>
              <p className="text-white text-xl md:text-2xl mt-4">
                Find books that inspire, teach, and entertain you.
              </p>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full">
            <img
              src={e}
              alt="Library Image 5"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center">
              <h2 className="text-4xl md:text-6xl text-white font-bold">
                Build Your Knowledge
              </h2>
              <p className="text-white text-xl md:text-2xl mt-4">
                Our library has something for everyone.
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
