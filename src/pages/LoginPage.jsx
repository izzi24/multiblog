import { Link } from "react-router-dom";
import Footer from "../components/Footer";
// import Header from "../components/Header";
import Header2 from "../components/Header2";

export default function Login() {
  return (
    <div>
      {/* <Header /> */}
      <Header2 />
      <div className="flex justify-center items-center px-20 bg-gray-300 h-[10vh]">
        <div className="font-bold text-gray-700 text-xl ">LOGIN</div>
       
      </div>
      <div className="text-center">
          <ul className="flex gap-5 justify-center items-center font-bold text-gray-500 text-xl">
            <Link className="" to="/">HOME</Link>
            <Link>/</Link>
            <Link>LOGIN</Link>
          </ul>
        </div>
      <div className=" lg:flex w-full gap-10 hidden capitalizen px-20  pb-10 justify-between mt-20  text-start">
        <div className=" w-[100%]  text-gray-800 text-2xl">
          <p className="font-bold py-3">LOGIN</p>
          <div className=" px-10 py-10 border  w-[100%]">
            <p className="py-3 font-bold capitalize">email</p>
            <input
              className="w-full py-5 border px-5 "
              type="Email"
              placeholder="Email"
            />
            <p className="py-3 capitalize font-bold">password</p>
            <input
              className="w-full border py-5 px-5 "
              type="password"
              placeholder="password"
            />
            <div className="py-3">
              <button className="py-4 px-8 border-2 border-white bg-[#ff4000] text-xl text-white font-bold">
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className=" text-gray-800 w-[100%] text-2xl">
          <p className="text-2xl font-bold py-3">NEW CUSTOMER</p>
          <div className=" px-10 py-10 border  w-[100%]  ">
            <p className="py-3 font-bold capitalize">CREATE AN ACCOUNT</p>
            <p className="text-lg tracking-wider">
              Sign up for a free account at our store. Registration is quick and
              easy. It allows you to be able to order from our shop. To start
              shopping click register.
            </p>
            <div className="py-3">
              <button className="py-4 px-8 border-2 border-white bg-[#ff4000] text-xl text-white font-bold">
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:hidden w-full gap-10 grid grid-cols-1 capitalizen px-5  pb-10 justify-between mt-10  text-start">
        <div className=" w-[100%]  text-gray-800 text-2xl">
          <p className="font-bold py-3">LOGIN</p>
          <div className=" px-5 py-4 border  w-[100%]">
            <p className="py-3 font-bold capitalize">email</p>
            <input
              className="w-full py-5 border px-3 "
              type="Email"
              placeholder="Email"
            />
            <p className="py-3 capitalize font-bold">password</p>
            <input
              className="w-full border py-5 px-3 "
              type="password"
              placeholder="password"
            />
            <div className="py-3">
              <button className="py-4 px-8 border-2 border-white bg-[#ff4000] text-xl text-white font-bold">
                LOGIN
              </button>
            </div>
          </div>
        </div>
        <div className=" text-gray-800 w-[100%] text-xl">
          <p className="text-2xl font-bold py-3">NEW CUSTOMER</p>
          <div className=" px-5 py-5 border  w-[100%]  ">
            <p className="py-3 font-bold capitalize">CREATE AN ACCOUNT</p>
            <p className="text-lg tracking-wider">
              Sign up for a free account at our store. Registration is quick and
              easy. It allows you to be able to order from our shop. To start
              shopping click register.
            </p>
            <div className="py-3">
              <button className="py-4 px-8 border-2 border-white bg-[#ff4000] text-xl text-white font-bold">
                CREATE ACCOUNT
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
