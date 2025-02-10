import { useEffect, useState } from "react";
// import Header from "../components/Header";
// import Header2 from "../components/Header2";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

import ImgD from "../images/5.jpg";
import ImgE from "../images/6.jpg";
import ImgF from "../images/7.jpg";
import ImgG from "../images/39.jpg";
import ImgH from "../images/9.jpg";
import ImgI from "../images/14.jpg";
import ImgJ from "../images/11.jpg";
import ImgK from "../images/12.jpg";
import ImgM from "../images/5.jpg";
import ImgN from "../images/16.jpg";
import ImgO from "../images/22.jpg";
import ImgP from "../images/25.jpg";
import ImgQ from "../images/39.jpg";
import ImgR from "../images/7.jpg";
import ImgS from "../images/15.jpg";
import ImgT from "../images/6.jpg";
import ImgTa from "../images/new1.jpg";
import ImgTb from "../images/new2.jpg";
import ImgTc from "../images/new3.jpg";
import ImgTd from "../images/new4.jpg";
import ImgTe from "../images/new5.jpg";
import ImgTf from "../images/new6.jpg";
import ImgTg from "../images/d1.jpg";
import ImgTh from "../images/d2.jpg";
import ImgTi from "../images/d3.jpg";
import ImgTj from "../images/d4.jpg";
import ImgTk from "../images/d5.jpg";
import ImgTl from "../images/d6.jpg";
import ImgTm from "../images/bax1.png";
import ImgTn from "../images/bax2.png";
import ImgTo from "../images/bax3.png";
import ImgTp from "../images/bax4.png";
import ImgTq from "../images/bax5.png";

const pythons = [
  {
    icon: "pi-truck",
    hText: "FREE SHIPPING",
    pText: "Free shipping world wide",
  },
  {
    icon: "pi-history",
    hText: "24 x 7 service",
    pText: "online service for 24 X 7",
  },
  {
    icon: "pi-megaphone",
    hText: "festival offer",
    pText: "new online special festival offer",
  },
];
const arsenal = [
  {
    image: ImgTg,
    bax: ImgTm,
    icons: "pi-instagram",
  },
  {
    image: ImgTh,
    bax: ImgTn,
    icons: "pi-instagram",
  },
  {
    image: ImgTi,
    bax: ImgTo,
    icons: "pi-instagram",
  },
  {
    image: ImgTj,
    bax: ImgTp,
    icons: "pi-instagram",
  },
  {
    image: ImgTk,
    bax: ImgTq,
    icons: "pi-instagram",
  },
  {
    image: ImgTl,
    icons: "pi-instagram",
  },
];
// const bucketList = [
//   {
//     image: ImgTg,
//     // bax: ImgTm,
//     // icons: "pi-instagram",
//   },
//   {
//     image: ImgTh,
//     // bax: ImgTn,
//     // icons: "pi-instagram",
//   },
//   {
//     image: ImgTi,
//     // bax: ImgTo,
//     // icons: "pi-instagram",
//   },
//   {
//     image: ImgTj,
//     // bax: ImgTp,
//     // icons: "pi-instagram",
//   },
//   {
//     image: ImgTk,
//     // bax: ImgTq,
//     // icons: "pi-instagram",
//   },
//   {
//     image: ImgTl,
//     // icons: "pi-instagram",
//   },
// ];

const Product = [
  {
    id: 1,
    image: ImgTa,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by  emmanuel, 2 comment",
  },
  {
    id: 2,
    image: ImgTb,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by roberts emmanuel, 2 comment",
  },
  {
    id: 3,
    image: ImgTc,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by roberts emmanuel, 2 comment",
  },
  {
    id: 4,
    image: ImgTd,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by adekemi emmanuel, 2 comment",
  },
  {
    id: 5,
    image: ImgTe,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by temitope emmanuel, 2 comment",
  },
  {
    id: 6,
    image: ImgTf,
    date: "29 january 2025",
    pText: "lorem ipsum dolor sit",
    gText: "consectetur adipiscing elit",
    author: "author by  emmanuel, 2 comment",
  },
];
const images = [
  {
    image: ImgD,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    name: "crop top",
    discount: "$117",
    price: "$189",
  },
  {
    image: ImgE,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "belted dress",
    discount: "$47.98",
    price: "$79.76",
  },
  {
    image: ImgF,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "sleevless top",
    discount: "$207.99",
    price: "$270.87",
  },
  {
    image: ImgG,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    name: "waist dress",
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    discount: "$69.09",
    price: "$89.78",
  },
  {
    image: ImgH,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle", "pi-circle-fill"],
    name: "trim dress",
    discount: "$240.99",
    price: "$309.87",
  },
  {
    image: ImgI,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle-fill", "pi-circle-fill", "pi-circle"],
    name: "v neck dress",
    discount: "$98.67",
    price: "$111.78",
  },
  {
    image: ImgJ,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "fitted dress",
    discount: "$49.06",
    price: "$78.60",
  },
  {
    image: ImgK,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "belted top",
    discount: "$78.67",
    price: "$120.99",
  },
];

const parach = [
  {
    image: ImgD,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    name: "crop top",
    discount: "$117",
    price: "$189",
  },
  {
    image: ImgE,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "belted dress",
    discount: "$47.98",
    price: "$79.76",
  },
  {
    image: ImgF,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "sleevless top",
    discount: "$207.99",
    price: "$270.87",
  },
  {
    image: ImgG,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    name: "waist dress",
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    discount: "$69.09",
    price: "$89.78",
  },
  {
    image: ImgH,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle", "pi-circle-fill"],
    name: "trim dress",
    discount: "$240.99",
    price: "$309.87",
  },
  {
    image: ImgI,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle-fill", "pi-circle-fill", "pi-circle"],
    name: "v neck dress",
    discount: "$98.67",
    price: "$111.78",
  },
  {
    image: ImgJ,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "fitted dress",
    discount: "$49.06",
    price: "$78.60",
  },
  {
    image: ImgK,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "belted top",
    discount: "$78.67",
    price: "$120.99",
  },
  {
    image: ImgM,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    name: "crop top",
    discount: "$117",
    price: "$189",
  },
  {
    image: ImgN,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "belted dress",
    discount: "$47.98",
    price: "$79.76",
  },
  {
    image: ImgO,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "sleevless top",
    discount: "$207.99",
    price: "$270.87",
  },
  {
    image: ImgP,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    name: "waist dress",
    circle: ["pi-circle", "pi-circle", "pi-circle-fill"],
    discount: "$69.09",
    price: "$89.78",
  },
  {
    image: ImgQ,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle", "pi-circle-fill"],
    name: "trim dress",
    discount: "$240.99",
    price: "$309.87",
  },
  {
    image: ImgR,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle", "pi-circle-fill", "pi-circle-fill", "pi-circle"],
    name: "v neck dress",
    discount: "$98.67",
    price: "$111.78",
  },
  {
    image: ImgS,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle"],
    name: "fitted dress",
    discount: "$49.06",
    price: "$78.60",
  },
  {
    image: ImgT,
    icon: [
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
      "pi-star-fill",
    ],
    circle: ["pi-circle-fill", "pi-circle", "pi-circle"],
    name: "belted top",
    discount: "$78.67",
    price: "$120.99",
  },
];

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleImages = images.slice(currentIndex, currentIndex + 4);
  const visibleImage = images.slice(currentIndex, currentIndex + 2);
  const visibleIma = images.slice(currentIndex, currentIndex + 3);

  const [myIndex, setMyIndex] = useState(0);
  const edibleparach = parach.slice(myIndex, myIndex + 8);

  const [activeIndex, setActiveIndex] = useState(Product.slice(0, 3));
  const [fumanIndex, setFumanIndex] = useState(Product.slice(0, 3));
  const [atokeIndex, setAtokeIndex] = useState(Product.slice(0, 3));
  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 4 ? 0 : prevIndex + 4
      );
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [images.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMyIndex((prevIndex) =>
        prevIndex === parach.length - 8 ? 0 : prevIndex + 8
      );
    }, 3000);

    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parach.length]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setStartIndex((prevIndex) => (prevIndex + 1) % 4);
  //   },3000);
  //  return () => clearInterval(interval);
  // }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 6;
      const newImages = [
        // Product[index % 6],
        Product[(index + 3) % 6],
        // Product[(index + 2) % 6],
      
      ];
      setActiveIndex(newImages);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 6;
      const newImages = [
        Product[index % 6],
        Product[(index + 3) % 6],
        Product[(index + 2) % 6],
      
      ];
      setFumanIndex(newImages);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % 6;
      const newImages = [
        // Product[index % 6],
        Product[(index + 3) % 6],
        Product[(index + 2) % 6],
      
      ];
      setAtokeIndex(newImages);
      
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // useEffect(() => {
  //   const updateGridCols = () => {
  //     if (window.innerWidth >= 1024) setCols(3); // lg: Show 3 images
  //     else if (window.innerWidth >= 768) setCols(2); // md: Show 2 images
  //     else setCols(1); // sm: Show 1 image
  //   };

  //   updateGridCols();
  //   window.addEventListener("resize", updateGridCols);
  //   return () => window.removeEventListener("resize", updateGridCols);
  // },[]);
  
 
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setActive((prevIndex) => (prevIndex + 1) % Product.length);
  //     setActiveIndex(Product.slice(active, active + 1));
  //   }, 3000); // Change image every 3 seconds

  //   return () => clearInterval(interval);
  // }, [active]);

  return (
    <div>
      {/* <Header /> */}
      {/* <Header2 /> */}
      <Hero />

      {/* <div className=" lg:flex gap-10 font-serif justify-center  sm:hidden overflow-hidden  sm:grid-cols-1   mt-20  w-full">
        <div className="pictur bg-white  flex justify-end   h-[30vh] items-center w-[35%]  ">
          <div className="cute text-center pr-10">
            <p className="text-red-500 text-3xl font-semibold">10% OFF</p>
            <h1 className="text-black text-7xl">MEN</h1>
          </div>
        </div>
        <div className="picture flex justify-end items-center  bg-white  w-[35%]">
          <div className="cute text-center pr-10">
            <p className="text-red-500 text-3xl font-semibold">10% OFF</p>
            <h1 className="text-black text-7xl">WOMEN</h1>
          </div>
        </div>
      </div> */}
      <div className="mt-15 m-3 text-center">
        <p className="capitalize text-red-400 text-xl  lg:text-3xl md:text-2xl font-light lg:font-medium">
          special offer
        </p>
        <p className="text-xl lg:text-5xl md:text-3xl  font-bold text-gray-800 ">
          TOP COLLECTION
        </p>
      </div>
      <div className="flex  justify-center">
        <hr className="w-26  bg-red-500 h-[2px] border-0" />
      </div>
      <div className="text-center mt-7 flex justify-center lg:w-[full]">
        <p className="w-[full] lg:font-medium font-normal text-lg leading-8 md:text-lg sm:md text-gray-500">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s,
        </p>
      </div>
      <div className="w-full">
        <div className=" hidden  lg:grid lg:grid-cols-4 gap-4  w-[full] px-10  py-20 transition-transform duration-500 ease-in-out">
          {visibleImages.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className=" ">
              <img src={item.image} alt="" />
              <div className="mt-10">
                {item.icon.map((iconClass, iconIndex) => (
                  <i
                    key={iconIndex}
                    className={`text-md mr-1 pi ${iconClass}`}
                    style={{ color: iconIndex < 4 ? "gold" : "gray" }}
                  ></i>
                ))}
              </div>
              <p className="text-2xl text-gray-400 ">{item.name}</p>
              <p className="text-3xl text-gray-900 font-semibold">
                {item.price}{" "}
                <span className="line-through text-lg text-gray-400">
                  {item.discount}
                </span>
              </p>
              <div className="">
                {item.circle.map((circleClass, circleIndex) => (
                  <i
                    key={circleIndex}
                    className={`text-lg mr-1 pi ${circleClass}`}
                    style={{ color: circleIndex < 2 ? "brown" : "blue" }}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className=" sm:flex sm:flex-cols-1 gap-5 lg:hidden md:hidden  w-[full] px-5  py-20 transition-transform duration-500 ease-in-out">
          {visibleImage.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className=" ">
              <img src={item.image} alt="" />
              <div className="mt-10">
                {item.icon.map((iconClass, iconIndex) => (
                  <i
                    key={iconIndex}
                    className={`text-md mr-1 pi ${iconClass}`}
                    style={{ color: iconIndex < 4 ? "gold" : "gray" }}
                  ></i>
                ))}
              </div>
              <p className="text-2xl text-gray-400 ">{item.name}</p>
              <p className="text-3xl text-gray-900 font-semibold">
                {item.price}{" "}
                <span className="line-through text-lg text-gray-400">
                  {item.discount}
                </span>
              </p>
              <div className="">
                {item.circle.map((circleClass, circleIndex) => (
                  <i
                    key={circleIndex}
                    className={`text-lg mr-1 pi ${circleClass}`}
                    style={{ color: circleIndex < 2 ? "brown" : "blue" }}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="lg:hidden hidden md:grid md:grid-cols-3 gap-5  w-[full] px-10  py-20 transition-transform duration-500 ease-in-out">
          {visibleIma.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className=" ">
              <img src={item.image} alt="" />
              <div className="mt-10">
                {item.icon.map((iconClass, iconIndex) => (
                  <i
                    key={iconIndex}
                    className={`text-md mr-1 pi ${iconClass}`}
                    style={{ color: iconIndex < 4 ? "gold" : "gray" }}
                  ></i>
                ))}
              </div>
              <p className="text-2xl text-gray-400 ">{item.name}</p>
              <p className="text-3xl text-gray-900 font-semibold">
                {item.price}{" "}
                <span className="line-through text-lg text-gray-400">
                  {item.discount}
                </span>
              </p>
              <div className="">
                {item.circle.map((circleClass, circleIndex) => (
                  <i
                    key={circleIndex}
                    className={`text-lg mr-1 pi ${circleClass}`}
                    style={{ color: circleIndex < 2 ? "brown" : "blue" }}
                  ></i>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="special text-center bg-center bg-fixed bg-no-repeat w-[100]  justify-center lg:justify-start md:justify-start lg:px-10 lg: h-screen relative flex items-center  ">
        <div className=" lg:hidden text-center md:hidden  sm:text-5xl sm:font-bold     sm:h-[30vh] ">
          <p>
            {" "}
            <span className="text-[#ff4c3b] lg:text-9xl font-bold text-5xl  sm:text-center    lg:  block">
              2025
            </span>{" "}
            <span className="   uppercase text-2xl lg:text-6xl tracking-widest  text-center  text-[#333333] font-bold block">
              fashion trends
            </span>{" "}
          </p>
          <span className="uppercase lg:text-3xl text-[#777777] text-center text-xl   font-semibold tracking-widest">
            special offer
          </span>
        </div>
        <div className="hidden lg:block  text-center  lg:text-9xl md:hidden lg:font-bold     lg:h-[30vh] ">
          <p className="">
            {" "}
            <span className="text-[#ff4c3b] lg:text-9xl font-bold text-4xl  sm:text-center      block">
              2025
            </span>{" "}
            <span className="   uppercase text-xl lg:text-6xl tracking-widest  text-center mt-0  text-[#333333] font-bold block">
              fashion trends
            </span>{" "}
          </p>
          <p className="uppercase lg:text-3xl text-[#777777] text-center text-xl mt-3   font-semibold tracking-widest">
            special offer
          </p>
        </div>
        <div className="hidden lg:hidden md:block  text-center  md:text-6xl md:font-bold     md:h-[30vh] ">
          <p className="">
            {" "}
            <span className="text-[#ff4c3b] lg:text-9xl font-bold text-4xl  sm:text-center      block">
              2025
            </span>{" "}
            <span className="   uppercase text-xl lg:text-6xl tracking-widest  text-center mt-0  text-[#333333] font-bold block">
              fashion trends
            </span>{" "}
          </p>
          <p className="uppercase lg:text-3xl text-[#777777] text-center text-xl mt-3   font-semibold tracking-widest">
            special offer
          </p>
        </div>
      </div>
      <div className="text-center font-sans-serif w-full mt-20 px-2">
        <p className="capitalize lg:text-3xl   text-red-500">
          exclusive products
        </p>
        <h2 className="uppercase text-xl text-center  lg:5xl md:3xl py-2 font-medium">
          special produts
        </h2>
        <div className="flex  justify-center">
          <hr className="w-26  bg-red-500 h-[3px] border-0" />
        </div>
        <div className="flex flex-cols-3 justify-center items-center gap-10 w-full mt-5  ">
          <p className="lg:text-2xl sm:text-xl   md:text-2xl   text-red-500">
            NEW ARRIVALS
          </p>
          <p className="lg:text-2xl sm:text-xl md:text-2xl tracking-wider text-red-500">
            FEATURED
          </p>
          <p className="lg:text-2xl sm:text-xl md:text-2xl tracking-wider text-red-500">
            SPECIAL
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid lg:grid-cols-4 gap-4 md:grid md:grid-cols-2 md:gap-10 sm:grid sm:grid-cols-2    w-full px-10  py-20 transition-transform duration-500 ease-in-out">
        {edibleparach.map((item, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={index} className=" ">
            <img src={item.image} alt="" />
            <div className="mt-10">
              {item.icon.map((iconClass, iconIndex) => (
                <i
                  key={iconIndex}
                  className={`text-md mr-1 pi ${iconClass}`}
                  style={{ color: iconIndex < 4 ? "gold" : "gray" }}
                ></i>
              ))}
            </div>
            <p className="text-2xl text-gray-400 ">{item.name}</p>
            <p className="text-3xl text-gray-900 font-semibold">
              {item.price}{" "}
              <span className="line-through text-lg text-gray-400">
                {item.discount}
              </span>
            </p>
            <div className="">
              {item.circle.map((circleClass, circleIndex) => (
                <i
                  key={circleIndex}
                  className={`text-lg mr-1 pi ${circleClass}`}
                  style={{ color: circleIndex < 2 ? "brown" : "blue" }}
                ></i>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* <div className="">
        <div className="w-[90%] lg:flex lg:justify-center lg:items-center hidden  md:hidden text-center  ">
          <hr className="  lg:block opacity-50 text-blue-600  " />
          <div className=" lg:flex sm:grid  justify-between lg-w[100%]">
            <div className="  lg:flex  gap-3 border-r-4 border-blue-100 h-40  mt-3  mb-3  items-center sm:w-auto lg:w-[30%]">
              <div>
                <i className="pi pi-truck text-[#ff4c3b]  text-7xl "></i>
              </div>
              <div>
                <p className="uppercase font-bold text-2xl">free shipping</p>
                <p className="capitalize text-gray-400 text-xl">
                  free shipping world wide
                </p>
              </div>
            </div>
            <div className="lg:flex sm:hidden mt-3  gap-3  border-r-4 border-blue-100  mb-3 h-40  items-center sm:w-auto lg:w-[30%]">
              <div>
                <i className="pi pi-history text-[#ff4c3b]   text-7xl "></i>
              </div>
              <div>
                <p className="uppercase font-bold text-2xl ">24 X 7 service</p>
                <p className="capitalize text-gray-400 text-xl">
                  online service for 24 x 7
                </p>
              </div>
            </div>
            <div className="flex  mt-3  mb-3  gap-3   items-center sm:w-auto  h-40 lg:w-[30%]">
              <div className=" ">
                <i className="pi pi-megaphone text-7xl text-[#ff4c3b]   "></i>
              </div>
              <div>
                <p className="uppercase font-bold text-2xl">festival offer</p>
                <p className="capitalize text-gray-400 text-xl ">
                  new online special festival offer
                </p>
              </div>
            </div>
          </div>
          <hr className=" lg:block opacity-50 text-blue-600 sm:hidden" />
        </div>
        
      </div> */}
      <div className="lg:hidden sm:block text-center md:hidden justify-around px-20 py-3 pb-3 gap-10  w-full">
          {pythons.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className="py-3">
              <i
                className={`text-md mr-1 text-red-500 text-6xl font-light py-2 pi ${item.icon}`}
              ></i>
              <h1 className="font-semibold text-xl uppercase">{item.hText}</h1>
              <p className="capitalize">{item.pText}</p>
            </div>
          ))}
          {/* <div className="flex justify-center w-[100%] pt-5">
            <hr className="opacity-30 w-[90%] " />
          </div> */}
        </div>
        <div className="flex justify-center w-[100%] pt-5">
            <hr className="opacity-30 w-[90%] " />
          </div>
      <div/>
      <div className="lg:flex   hidden md:flex text-center px-20  py-3 pb-3 gap-20 justify-center  w-full">
        
          {pythons.map((item, index) => (
            // eslint-disable-next-line react/jsx-key
            <div key={index} className="py-3  text-center  ">
              <i
                className={`text-md mr-1 text-red-500 text-6xl  font-light py-2 pi ${item.icon}`}
              ></i>
              <h1 className="font-semibold text-xl    uppercase">{item.hText}</h1>
              <p className="capitalize">{item.pText}</p>
            </div>
          ))}
          <div className="flex justify-center pt-5">
            <hr className="opacity-30 w-[90%] " />
          </div>
        </div>
        <div className="lg:flex md:flex justify-center hidden pt-3">
            <hr className="opacity-30 w-[90%] " />
          </div>
      <div/>
      <div className=" text-center pt-5">
        <p className="capitalize text-xl lg:3xl text-red-500">our collection</p>
        <p className="uppercase lg:text-5xl  text-2xl py-2 font-medium">
          special product
        </p>
        <div className="flex  py-3 justify-center">
          <hr className="w-26  bg-red-500 h-[3px] border-0" />
        </div>
      </div>
      <div className="grid grid-cols-1  lg:ghidden md:hidden py-10 overflow-hidden w-full gap-5 px-4">
          {activeIndex.map((image, index) => (
            <div key={index} className=" w-[full] rounded-lg shadow-md">
              <img src={image.image} alt="" />
              <div className=" text-center font-serif py-5 ">
                <p className="text-red-500 capitalize text-2xl">{image.date}</p>
                <p className="uppercase text-2xl font-semibold text-gray-900">
                  {image.pText}
                </p>
                <p className="uppercase text-2xl  font-semibold text-gray-900">
                  {image.gText}
                </p>
                <div className="flex  py-2 justify-center">
                  <hr className="w-26  bg-red-500 h-[3px] border-0" />
                </div>
                <p className="py-2 capitalize">{image.author}</p>
              </div>
            </div>
          ))}
       </div>
       <div className=" lg:grid lg:grid-cols-3  hidden md:hidden py-10 overflow-hidden w-full gap-5 px-4">
          {fumanIndex.map((image, index) => (
            <div key={index} className=" w-[full] rounded-lg shadow-md">
              <img src={image.image} alt="" />
              <div className=" text-center font-serif py-5 ">
                <p className="text-red-500 capitalize text-2xl">{image.date}</p>
                <p className="uppercase text-2xl font-semibold text-gray-900">
                  {image.pText}
                </p>
                <p className="uppercase text-2xl  font-semibold text-gray-900">
                  {image.gText}
                </p>
                <div className="flex  py-2 justify-center">
                  <hr className="w-26  bg-red-500 h-[3px] border-0" />
                </div>
                <p className="py-2 capitalize">{image.author}</p>
              </div>
            </div>
          ))}
       </div>
       <div className=" md:grid md:grid-cols-2 lg:hidden hidden py-10  w-full gap-5 px-4">
          {atokeIndex.map((image, index) => (
            <div key={index} className=" w-[full] rounded-lg shadow-md">
              <img src={image.image} alt="" />
              <div className=" text-center font-serif py-5 ">
                <p className="text-red-500 capitalize text-xl">{image.date}</p>
                <p className="uppercase text-xl font-semibold text-gray-900">
                  {image.pText}
                </p>
                <p className="uppercase text-xl  font-semibold text-gray-900">
                  {image.gText}
                </p>
                <div className="flex  py-2 justify-center">
                  <hr className="w-26  bg-red-500 h-[3px] border-0" />
                </div>
                <p className="py-2 capitalize">{image.author}</p>
              </div>
            </div>
          ))}
       </div>
      <div className="hidden lg:grid lg:grid-cols-6  w-full ">
        {arsenal.map((image, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={index}
            className="relative group  w-full rounded-lg shadow-md"
          >
            <img src={image.image} alt="" />
            <div className="icon absolute inset-0 flex items-center justify-center cursor-pointer bg-red-500 bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <i className={`text-7xl text-white pi ${image.icons}`}></i>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden md:grid md:grid-cols-6 lg:hidden  w-full ">
        {arsenal.map((image, index) => (
          // eslint-disable-next-line react/jsx-key
          <div
            key={index}
            className="relative group  w-full rounded-lg shadow-md"
          >
            <img src={image.image} alt="" />
            <div className="icon absolute inset-0 flex items-center justify-center cursor-pointer bg-red-500 bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <i className={`text-7xl text-white pi ${image.icons}`}></i>
            </div>
          </div>
        ))}
      </div>
      <div className="md:hidden">
        <Swiper
          slidesPerView={3}
          loop
        autoplay={{ delay: 3000 }}
          modules={[Autoplay]}
        >
          {arsenal.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.image} alt="" className="w-full " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* <div className=" grid grid-cols-3 gap-4 sm:grid  md:hidden ">
        {arsenal.concat(arsenal).slice(startIndex,setStartIndex + 3).map((image, index) => (
          <div
            key={index}
            className="relative group  w-full transition-opacity duration-500  rounded-lg shadow-md "
          >
            <img src={image.image} alt="" />
            <div className="icon absolute inset-0 flex items-center justify-center cursor-pointer bg-red-500 bg-opacity-50 opacity-0 group-hover:opacity-70 transition-opacity duration-300">
              <i className={`text-7xl text-white pi ${images.icons}`}></i>
            </div>
          </div>
          
        ))}
      </div> */}

<div className="lg:hidden mt-5 pb-5">
        <Swiper
          slidesPerView={5}
          loop
        autoplay={{ delay: 5000 }}
          modules={[Autoplay]}
        >
          {arsenal.map((item, index) => (
            <SwiperSlide key={index}>
              <img src={item.bax} alt="" className="w-full " />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:grid lg:grid-cols-5  hidden py-30 w-full ">
        {arsenal.map((image, index) => (
          // eslint-disable-next-line react/jsx-key
          <div key={index} className="  px-30  w[full]">
            <img className=" " src={image.bax} alt="" />
          </div>
        ))}
      </div>
      
      <Footer/>
    </div>
  );
}
