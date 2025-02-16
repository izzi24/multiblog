import { useState, useEffect } from "react";
import AOS from "aos";

export default function Footer2() {
//   const [showInfo, setShowInfo] = useState(false);
//   const [showBase, setShowBase] = useState(false);
//   const [showCase, setShowCase] = useState(false);
//   const [showFace, setShowFace] = useState(false);
//   const [showFlake, setShowFlake] = useState(false);

const [openSection, setOpenSection] = useState(null);

const toggleSection = (section) => {
  setOpenSection(openSection === section ? null : section);
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
    <div className="bg-gray-600   sm:block md:block lg:hidden bottom-0 sticky z-40 ">
      <div className=" flex justify-evenly h-[8vh] text-gray-200 text-xl items-center">
        <div className="">
          <i
            className="pi pi-search "
            onClick={() => toggleSection(!showInfo)}
          ></i>
        </div>

        <div>
          <i
            className="pi pi-heart-fill"
            onClick={() => toggleSection("")}
          ></i>
        </div>
        <div>
          {" "}
          <i
            className="pi pi-shopping-cart relative"
            onClick={() =>  toggleSection("cart")}
          >
            {" "}
            <p className="absolute text-md text-white py-1 p-2  bg-red-400 bottom-2 left-3 rounded-full">
              0
            </p>
          </i>
        </div>
        {openSection === "cart" && (
            <div data-aos="">
                <p className="capitalize bg-white px-3 py-3 absolute left-10 -top-14 text-gray-800 w-[200px]  transition-all">your cart is empty</p>
            </div>
        )}
        <div>
          <i className="pi pi-user" onClick={() =>  toggleSection("user")}></i>
        </div>
        {openSection === "user" && (
          <div data-aos="fade-up" className="bg-white px-3 py-3 absolute  -top-40 w-[150px]  transition-all">
            <div className="text-gray-800">
              <p className="py-2">Login</p>
              <p className="py-2">Register</p>
              <p className="py-2">Logout</p>
            </div>
          </div>
        )}
        <div>
          <i className="pi pi-cog" onClick={() =>  toggleSection("cog")}></i>
        </div>
        {openSection === "cog" && (
          <div data-aos="fade-up" className=" bg-white px-3 py-3 absolute -top-63 right-10 w-[150px] text-center  transition-all">
            <h2 className="  font-bold text-gray-800">Language</h2>
            <p className="px-3 text-xl  text-gray-500">
              English <br />
              French
            </p>
            <h2 className="  font-bold text-gray-800">Currency</h2>
            <p className="px-3 text-md  text-gray-500">$ USD</p>
            <p className="px-3 text-md  text-gray-500">$ IND</p>
            <p className="px-3 text-md  text-gray-500">$ EUR</p>
            <p className="px-3 text-md  text-gray-500">$ GBP</p>
          </div>
        )}
      </div>
    </div>
  );
}
