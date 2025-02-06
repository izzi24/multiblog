import ImgA from "../images/logo.png";
import { useState } from "react";

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
    icons: " pi-sort-down-fill",
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
    icons: " pi-sort-down-fill",
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
    icons: " pi-sort-down-fill",
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
    icons: " pi-sort-down-fill",
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
    icons: "pi-sort-down-fill",
  },
  {
    name: "BLOGS",
    hoverContent: [
      "Blog Left Sidebar",
      "Blog right Sidebar",
      "No Sidebar",
      "Blog Detail",
    ],
    icons: "pi-sort-down-fill",
  },
];
// }
export default function Header2() {
  const [isMenuOpen, setIsMenuOpen] = useState();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="bg-white lg:flex justify-around  text-white   items-center h-[14vh]">
      <div className="flex items-center gap-11">
        {isMenuOpen ? (
          <div className="absolute top-0 left-0  h-[100vh] bg-black  border-gray-200">
            <div onClick={closeMenu}  className="flex items-center ">
              <div  className="cursor-pointer py-8 px-5 text-2xl font-bold">
                <i className="pi pi-chevron-left"></i>
              </div>
              <div className="cursor-pointer text-2xl font-bold">
                <p >BACK</p>
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
              className="text-4xl text-[gold] relative cursor-pointer pi pi-align-justify"
            ></i>
          </div>
        )}
        <div>
          <img src={ImgA} alt="" />
        </div>
      </div>
      <ul className="uppercase lg:grid  sm:hidden md:hidden grid-cols-6 gap-10">
        {menuArray.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer relative  group hover:text-blue-500  gap-2  text-lg text-gray-700 items-center"
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
      <div className="flex sm:hidden md:hidden text-gray-600 gap-10">
        <div>
          <i className="text-2xl cursor-pointer pi pi-search"></i>
        </div>
        <div>
          <i className=" text-2xl cursor-pointer pi pi-cog"></i>
        </div>
        <div>
          <i className=" text-2xl cursor-pointer pi pi-shopping-cart"></i>
        </div>
      </div>
    </div>
  );
}
