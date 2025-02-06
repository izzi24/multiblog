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
    <div className="lg:w-full sm:auto md:auto font-serif  capitalize ">
      <div
        className=" bg-center  w-full h-[78vh] "
        style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
      >
       
        
          <div className="lg:text-center lg:items-center sm:text-center lg:py-40 sm:py-10 sm:px-10 sm:ml-5   w-[50%]">
            <h1 className="text-gray-400  sm:text-4xl lg:text-3xl font-semibold py-3 tracking-widest">
              {slides[currentSlide].TextP}
            </h1>
            <h1 className="text-7xl font-serif font-extrabold uppercase py-3 tracking-wider">
              {slides[currentSlide].TextY}
            </h1>
            <button className="bg-[black] text-[gold] mt-6 py-6 text-xl  font-semibold uppercase px-12">
              {slides[currentSlide].ShopT}
            </button>
          </div>
        
        <div className="  absolute lg:bottom-80 sm:bottom-50  w-[100%] ">
          <div className=" flex justify-between lg:px-20 sm:px-2">
            <i
              onClick={nextSlide}
              className="pi pi-chevron-left p-7   hover:bg-amber-500  rounded-full"
            ></i>
            <i
              onClick={prevSlide}
              className="pi pi-chevron-right p-7  hover:bg-amber-500 rounded-full"
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
