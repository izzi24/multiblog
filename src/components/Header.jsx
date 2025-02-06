export default function Header() {
  return (
    <div className="bg-[#6c757d53] h-[8vh] flex sm:hidden md:hidden lg:flex justify-evenly items-center text-lg text-gray-400  ">
      <div className="gap-10 flex">
        
          <p className="">Welcome to Our store Multikart</p>
          <p className="">Call Us: 123 - 456 - 7890</p>
      
       
      </div>
      <div className="gap-9 flex ">
        <div className="flex items-center gap-3">
          <i className="pi pi-heart-fill ml-3 "></i>
          <p>Wishlist</p>
        </div>
        <div className="flex items-center relative cursor-pointer gap-3">
          <i className="pi pi-user "></i>
          <p className="">My Account</p>
          <div className="">
            <ul className="  border-gray-400 grid-cols-1 absolute left-0 top-full capitalize border gap-5 invisible  mt-2 w-[250px] h  px-3 py-5 text-lg text-[gold] bg-black rounded-md shadow-md  duration-300">
              <li>Login</li>
              <li>Register</li>
              <li>Logout</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
