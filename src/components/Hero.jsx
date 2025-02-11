import { useEffect, useState } from "react";
import ImgB from "../images/1.jpg";
import ImgC from "../images/2.jpg";

const slides = [
  {
    image: ImgB,
    TextP: "welcome to fashion",
    TextY: "men fashion",
    ShopT: "shop now",
  },
  {
    image: ImgC,
    TextP: "welcome to fashion",
    TextY: "women fashion",
    ShopT: "shop now",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);
  return (
    <div className=" font-serif  capitalize ">
      <div
        className=" bg-center bg-cover   w-full h-[78vh] "
        style={{ backgroundImage: ` url(${slides[currentSlide].image})` }}
      >
        <div className=" flex flex-col  lg:hidden md:hidden w-full h-[78vh]  justify-center items-center">
          <h1 className=" text-[#777777] text-lg">
            {slides[currentSlide].TextP}
          </h1>
          <h1 className=" text-3xl tracking-wider font-extrabold">
            {slides[currentSlide].TextY}
          </h1>
          <button className="mt-3 px-6 py-2 uppercase text-white text-lg   font-semibold bg-[#ff4c3b]">
            {slides[currentSlide].ShopT}
          </button>
          <div className="   opacity-100 group-hover:opacity-100 transition-opacity duration-300  w-[100%] ">
            <div className="flex justify-between lg:px-20 sm:px-2">
              <i
                onClick={nextSlide}
                className="pi pi-chevron-left p-2   bg-gray-50  rounded-full"
              ></i>
              <i
                onClick={prevSlide}
                className="pi pi-chevron-right p-2  bg-gray-50 rounded-full"
              ></i>
            </div>
          </div>
        </div>
        <div className="lg:flex md:flex flex-col hidden  w-[50%] h-[78vh] items-center justify-center ">
          <div className="text-center w-full">
            <h1 className=" text-[#777777] text-xl">
              {slides[currentSlide].TextP}
            </h1>
            <h1 className=" text-5xl tracking-wider font-extrabold">
              {slides[currentSlide].TextY}
            </h1>
            <div className="">
              <button className="mt-3 px-6 py-2 uppercase text-white text-xl  font-semibold bg-[#ff4c3b]">
                {slides[currentSlide].ShopT}
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" hidden absolute lg:block md:block -translate-y-76  w-[100%] ">
        <div className="flex justify-between lg:px-20 sm:px-2">
          <i
            onClick={nextSlide}
            className="pi pi-chevron-left p-2  bg-gray-200  rounded-full"
          ></i>
          <i
            onClick={prevSlide}
            className="pi pi-chevron-right p-2  bg-gray-200 rounded-full"
          ></i>
        </div>
      </div> */}
    </div>
  );
}
