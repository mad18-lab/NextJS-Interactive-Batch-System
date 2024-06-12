"use client";
import React from 'react';
import { useState } from 'react';
import logo from '../../assets/Logo.png';
import Image from 'next/image';
import { IoMdMenu, IoMdClose } from 'react-icons/io';

const Header = () => {
  const [isClicked, setClicked] = useState(false);

  const handleOnClick = () => {
    setClicked(!isClicked);
  }
  
  return (
    <div className="max-w-[1050px] mx-auto overflow-hidden">
      <div className="flex w-full mx-auto pt-8 px-4 justify-between">
        <div className="flex gap-12 items-center">
            <Image src={logo} alt='/' className="hover:cursor-pointer"/>
            <div className="hidden md:font-[ClashDisplay-Semibold] md:text-black md:flex md:gap-6">
                <h1 className="hover:text-[#f37a5c] hover:cursor-pointer">Home</h1>
                <h1 className="hover:text-[#f37a5c] hover:cursor-pointer">About Us</h1>
                <h1 className="hover:text-[#f37a5c] hover:cursor-pointer">Pricing</h1>
                <h1 className="hover:text-[#f37a5c] hover:cursor-pointer">Features</h1>
            </div>
        </div>
        <div className="hidden md:block">
            <button className="bg-black text-white font-ClashDisplay-Regular text-center px-10 py-3 rounded">Download</button>
        </div>
        <div onClick={handleOnClick} className="block md:hidden">
          {isClicked ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </div>
        <div className={isClicked ? 'md:hidden absolute left-0 bg-black top-0 border-r w-[60%] border-r-gray ease-in-out duration-500 translate-x-0' : 'fixed left-[-1000%]'}>
          <ul className='p-4 font-ClashDisplay-Semibold text-white'>
            <li className="hover:text-[#f37a5c] hover:cursor-pointer">Home</li>
            <li className="hover:text-[#f37a5c] hover:cursor-pointer">About Us</li>
            <li className="hover:text-[#f37a5c] hover:cursor-pointer">Pricing</li>
            <li className="hover:text-[#f37a5c] hover:cursor-pointer">Features</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
