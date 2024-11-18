"use client"
import React, { useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="w-full h-auto p-4  sm:px-12 md:px-24 py-8 flex justify-between items-center">
      <div className="logo text-5xl cursor-default">Logo</div>
      <div className="nav-links hidden lg:flex gap-12 items-center">
        <ul className="flex gap-7 text-md cursor-pointer font-small">
          <li className=" hover:text-blue-500">Home</li>
          <li className=" hover:text-blue-500">About</li>
          <li className=" hover:text-blue-500">Contact</li>
        </ul>
        <button className="bg-zinc-700 text-white p-4 cursor-pointer rounded-md">
          Subcribe
        </button>
      </div>

      <div onClick={()=>setMenu(!menu)} className="menu-icon lg:hidden">
        {
            menu ? <IoCloseSharp size={30} /> :  <RiMenu3Fill size={30} />
        }
        
        

      </div>

      {
        menu ? <div className="fixed lg:hidden mt-24 h-fit bg-white inset-0 ">
        <ul className="flex gap-10 px-24 py-12 hover:text-primary flex-col items-start text-3xl sm:text-4xl cursor-pointer font-small text-black">
              <li >Home</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
        </div>
        :
        <div className="hidden"></div>
      }

    

    </div>
  );
};

export default Navbar;
