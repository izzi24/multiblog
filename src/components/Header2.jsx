import ImgA from "../images/logo.png";
import { useState } from "react";
import { useEffect } from "react";
import AOS from "aos";

const menuArray = [
  {
    name: "HOME",
    hoverContent: [
      "New Demos NEW",
      "Clothing",
      "Basics",
      "Beauty",
      "Electronic",
      "Furniture",
      "Vegetables",
      "Watch",
      "Light",
      "Goggies",
      "shoes",
      "Bags",
      "Flowers",
    ],
    hoveContent: [
      "New Demos NEW",
      "Clothing",
      "Basics",
      "Beauty",
      "Electronic",
      "Furniture",
      "Vegetables",
      "Watch",
      "Light",
      "Goggies",
      "shoes",
      "Bags",
      "Flowers",
    ],
    icons: "pi-chevron-down",
  },
  {
    name: "SHOP",
    hoverContent: [
      "Left Sidebar",
      "Right sidebar",
      "No sidebar",
      "Sidebar Popup",
      "Metro NEW",
      "Full Width NEW",
      "3 Grid",
      "6 Grid",
      "List View",
    ],
    icons: "pi-chevron-down",
  },
  {
    name: "PRODUTS",
    hoverContent: [
      "Sidebar",
      "Thumbnail image",
      "3 Column",
      "4 Image",
      "bundle products",
      "sticky",
      "Accordian",
      "Image Swatch",
      "Vertical Tab",
    ],
    icons: "pi-chevron-down",
  },
  {
    name: "FEATURES",
    hoverContent: [
      "Sidebar",
      "Thumbnail image",
      "3 Column",
      "4 Image",
      "bundle products",
      "sticky",
      "Accordian",
      "Image Swatch",
      "Vertical Tab",
    ],
    icons: "pi-chevron-down",
  },
  {
    name: "PAGES",
    hoverContent: [
      "Vendor ",
      "Account",
      "About Us",
      "Search",
      "typography",
      "review",
      "order-success",
      "Compare",
      "Collection",
      "lookbook",
      "site-map",
      "404",
      "coming-soon",
    ],
    icons: "pi-chevron-down",
  },
  {
    name: "BLOGS",
    hoverContent: [
      "Blog Left Sidebar",
      "Blog right Sidebar",
      "No Sidebar",
      "Blog Detail",
    ],
    icons: "pi-chevron-down",
  },
];
// }
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState();
  const [isTopeOpen, setIsTopeOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  const BlackMenu = () => {
    setIsTopeOpen((prev) => !prev);
  };
  const RedMenu = () => {
    setIsTopeOpen(false);
  };

  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration (default: 400ms)
      once: true, // Whether animation should happen only once
      easing: "ease-in-out", // Animation easing function
    });
  }, []);

  useEffect(() =>{
    AOS.refresh();
  })

  return (
    <div>
      <div  data-aos="fade-up-right" className="bg-white  lg:flex md:hidden justify-around hidden text-white   items-center h-[14vh]">
        <div className="flex items-center gap-11">
          {isMenuOpen ? (
            <div className="absolute top-0 left-0  h-[100vh] bg-black  border-gray-200">
              <div onClick={closeMenu} className="flex items-center ">
                <div className="cursor-pointer py-8 px-5 text-2xl font-bold">
                  <i className="pi pi-chevron-left"></i>
                </div>
                <div className="cursor-pointer text-2xl font-bold">
                  <p>BACK</p>
                </div>
              </div>
              <hr className="opacity-30" />
              <ul className="uppercase text-xl">
                <div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>clothing</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>BAGS</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>FOOTWEAR</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>WATCHES</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>ACCESORIES</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>HOUSE OF DESIGN</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                  <li className="py-5 px-10">BEAUTY & PERSONAL CARE</li>
                  <li className="py-5 px-10">cHOME & DECOR</li>
                  <div className="flex py-5 px-10 justify-between items-center">
                    <li>KITCHEN</li>
                    <i className="pi pi-chevron-right"></i>
                  </div>
                </div>
              </ul>
            </div>
          ) : (
            <div>
              <i
                onClick={toggleMenu}
                className="text-4xl text-[black] relative cursor-pointer pi pi-align-justify"
              ></i>
            </div>
          )}
          <div>
            <img src={ImgA} alt="" />
          </div>
        </div>
        <ul className="uppercase lg:grid lg:grid-cols-6 hidden w-[50%] gap-6">
          {menuArray.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer relative font-semibold group hover:text-blue-500  gap-2  text-lf text-gray-700 items-center"
            >
              <li className=" ">
                {item.name}
                {/* hovercontent */}
                <div className=" hover:underline   hover:text-[gold] border-gray-400 grid grid-cols-1 absolute left-0 top-full capitalize border gap-5  mt-2 w-[250px]   px-3 py-5 text-lg text-[gold] bg-black rounded-md shadow-md   duration-300 group-hover:visible invisible">
                  {item.hoverContent.map((content, idx) => (
                    // eslint-disable-next-line react/jsx-key
                    <div key={idx} className="">
                      <ul>
                        <li>{content}</li>
                      </ul>
                    </div>
                  ))}
                </div>
              </li>

              <div>
                <i className={`pi ${item.icons}  `}></i>
              </div>
            </div>
          ))}
        </ul>
        <div className="lg:flex  sm:hidden hidden  text-gray-600 gap-10">
          <div>
            <i className="text-xl cursor-pointer pi pi-search"></i>
          </div>
          <div>
            <i className=" text-xl cursor-pointer pi pi-cog"></i>
          </div>
          <div>
            <i className=" text-xl relative cursor-pointer pi pi-shopping-cart">
              <p className="absolute text-md text-white py-1 p-1  bg-red-400 bottom-2 left-3 rounded-xl">
                0
              </p>
            </i>
          </div>
        </div>
      </div>
      {/* small screen */}
      <div className="flex justify-between py-5 lg:hidden md: px-5 h-[12vh] items-center w-full">
        {isMenuOpen ? (
          <div className="absolute top-0 left-0  h-[auto] bg-white w-[80%]  border-gray-200">
            <div onClick={closeMenu} className="flex items-center ">
              <div className="cursor-pointer py-6 px-3 text-xl font-bold">
                <i className="pi pi-chevron-left"></i>
              </div>
              <div className="cursor-pointer text-xl font-bold">
                <p>BACK</p>
              </div>
            </div>
            <hr className="opacity-30 w-full" />
            <ul className="uppercase text-lg font-bold">
              <div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>clothing</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>BAGS</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>FOOTWEAR</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>WATCHES</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>ACCESORIES</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>HOUSE OF DESIGN</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <li className="py-5 px-10">BEAUTY & PERSONAL CARE</li>
                <li className="py-5 px-10">HOME & DECOR</li>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>KITCHEN</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <i
              onClick={toggleMenu}
              className="text-4xl text-[black] relative cursor-pointer pi pi-align-justify"
            ></i>
          </div>
        )}
        <div>
          <img src={ImgA} alt="" />
        </div>
        {isTopeOpen ? (
          <div className="absolute top-0 right-0  h-[auto] bg-white w-[80%]  border-gray-200">
            <div onClick={RedMenu} className="flex items-center ">
              <div className="cursor-pointer py-6 px-3 text-xl font-bold">
                <i className="pi pi-chevron-left"></i>
              </div>
              <div className="cursor-pointer text-xl font-bold">
                <p>BACK NAVBAR</p>
              </div>
            </div>
            <hr className="opacity-30 w-full" />
            <ul className="uppercase text-lg font-bold">
              <div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>HOME</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>SHOP</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>PRODUCT</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>FEATURES</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>PAGES</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
                <div className="flex py-5 px-10 justify-between items-center">
                  <li>BLOGS</li>
                  <i className="pi pi-chevron-right"></i>
                </div>
              </div>
            </ul>
          </div>
        ) : (
          <div>
            <i
              onClick={BlackMenu}
              className="text-4xl text-red-400 relative cursor-pointer pi pi-align-justify"
            ></i>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
}
