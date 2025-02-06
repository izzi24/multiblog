import ImgL from "../images/logo.png";
import masterCard from "../images/mastercard.png";
import visa from "../images/american-express.png";
import visaA from "../images/discover.png";
import visaB from "../images/visa.png";
import visaC from "../images/paypal.png";

const cards =[
  {
    image:masterCard,
  },
  {
    image:visa,
  },
  {
    image:visaA,
  },
  {
    image:visaB,
  },
  {
    image:visaC,
  },
]

export default function Footer() {
  return (
    <div className="bg-gray-100  ">
      {" "}
      <div className=" lg:flex  sm:grid sm:grid-cols-1 sm:text-center justify-around items-center px-10">
        <div>
          <p className="text-2xl  font-bold text-gray-">KNOW IT ALL FIRST!</p>
          <p className="text-xl ">
            Never Miss Anything From Multikart By Signing Up To Our Newsletter.
          </p>
        </div>
        <div className="border-r-2 h-[100px] border-gray-400"></div>
        <div className=" lg:grid lg:grid-cols-2 lg:gap-4 sm:gap-2 ">
          <div>
            <input
              className=" py-4 px-10 border-3 border-blue-300"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div>
            <button className="bg-[#ff4000] py-4 text-xl font-bold text-white  px-10">
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className="flex   py-3 justify-center">
        <hr className=" w-[87%]  opacity-50 text-gray-600" />
      </div>
      <div className= "lg:flex sm:grid sm:grid-cols-1  w-full gap-13 px-30 py-20">
        <div className="w-[35%] py-7 ">
          <img className="mb-7" src={ImgL} alt="" />
          <p className=" lg:block sm:hidden text-xl leading-10 text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam,
          </p>
          <div className="flex gap-16 text-3xl py-8 items-center">
            <i className="pi pi-google"></i>
            <i className="pi pi-linkedin"></i>
            <i className="pi pi-twitter"></i>
            <i className="pi pi-instagram"></i>
            <i className="pi pi-wifi"></i>
          </div>
        </div>
        <div className="w-[25%]">
          <h1 className="py-7 text-2xl font-semibold text-gray-900 uppercase">
            my account
          </h1>
         <div className="lg:block sm:hidden">
         <p className="text-gray-600 text-xl py-1">womens</p>
          <p className="text-gray-600 text-xl py-1">clothing</p>
          <p className="text-gray-600 text-xl py-1">accessories</p>
          <p className="text-gray-600 text-xl py-1">featured</p>
         </div>
        </div>
        <div className="w-[25%]">
          <h1 className="py-7 text-2xl font-semibold text-gray-900 uppercase">
            why we choose
          </h1>
         <div className="lg:block sm:hidden">
         <p className="text-gray-600 text-xl py-1">shipping & return</p>
          <p className="text-gray-600 text-xl py-1">secure shopping</p>
          <p className="text-gray-600 text-xl py-1">gallary</p>
          <p className="text-gray-600 text-xl py-1">affiliates</p>
          <p className="text-gray-600 text-xl py-1">contacts</p>
         </div>
        </div>
        <div className="w-[25%] capitalize text-start">
          <h1 className="py-7 text-2xl font-semibold text-gray-900 uppercase">
            store information
          </h1>
          <div className="lg:block sm:hidden">
          <div className="flex items-center gap-4">
            <i className="pi pi-map-marker"></i>
            <p className="text-gray-600 text-xl py-1">
              Excel Demo Store, Demo store India 345-659
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <i className="pi pi-phone"></i>
            <p className="text-gray-600 text-xl py-1">
              Call Us: +234-904-965-689
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <i className="pi pi-envelope"></i>
            <p className="text-gray-600 text-xl py-1">
              Email Us: adedapotope57@gmai;.com
            </p>
          </div>
          <div className="flex  items-center gap-4">
            <i className="pi pi-mobile"></i>
            <p className="text-gray-600 text-xl py-1">Fax: 123456</p>
          </div>
          </div>
        </div>
      </div>
      <div className="flex w-[full] justify-between items-center bg-white p-8 px-30">
        <div><p className="text-xl text-gray-600">&copy; 2024-25  themeforest powered by adedapo</p></div>
        <div className="grid grid-cols-5 gap-5">
        {cards.map((item,index) =>(
          // eslint-disable-next-line react/jsx-key
          <div key={index}>
            <img src={item.image}alt="" />
          </div>
        ))}

      
      </div>
      </div>
      
    </div>
  );
}
