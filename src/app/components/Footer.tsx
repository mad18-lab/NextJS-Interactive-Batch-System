import React from 'react'
import Image from 'next/image'
import logo from '../../assets/Logo.png';
import Mail from '../../assets/mail.png';
import Phone from '../../assets/phone.png';

const Footer = () => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="flex flex-col gap-16 mx-auto pt-8 px-4 pb-6 md:flex md:flex-row">
        <div className="flex flex-col gap-5 items-start">
            <Image src={logo} alt='/'/>
            <div className="flex gap-2">
                <Image src={Mail} alt='/' className="object-contain"/>
                <p className="text-sm font-ClashDisplay-Medium">Help@Frybix.Com</p>
            </div>
            <div className="w-[160px] flex gap-2">
                <Image src={Phone} alt='/' className="object-contain"/>
                <p className="text-sm font-ClashDisplay-Medium">+1234 456 678 89</p>
            </div>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-4 md:items-start">
            <h1 className="text-2xl font-ClashDisplay-Semibold pb-1">Links</h1>
            <p className="text-sm font-ClashDisplay-Medium">Home</p>
            <p className="text-sm font-ClashDisplay-Medium">About Us</p>
            <p className="text-sm font-ClashDisplay-Medium">Bookings</p>
            <p className="text-sm font-ClashDisplay-Medium">Blog</p>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-4 md:items-start">
            <h1 className="text-2xl font-ClashDisplay-Semibold pb-1">Legal</h1>
            <p className="text-sm font-ClashDisplay-Medium">Terms of Use</p>
            <p className="text-sm font-ClashDisplay-Medium">Privacy Policy</p>
            <p className="text-sm font-ClashDisplay-Medium">Cookie Policy</p>
        </div>
        <div className="hidden md:flex md:flex-col md:gap-4 md:items-start">
            <h1 className="text-2xl font-ClashDisplay-Semibold pb-1">Product</h1>
            <p className="text-sm font-ClashDisplay-Medium">Take Tour</p>
            <p className="text-sm font-ClashDisplay-Medium">Live Chat</p>
            <p className="text-sm font-ClashDisplay-Medium">Reviews</p>
        </div>
        <div className="flex flex-col gap-4 items-start">
            <div className="hidden lg:flex lg:flex-col">
              <h1 className="text-2xl font-ClashDisplay-Semibold pb-1">Newsletter</h1>
              <p className="pb-6 text-sm font-ClashDisplay-Medium">Stay Up to Date</p>
            </div>
            <div className="flex font-ClashDisplay-Regular">
                <input className="pl-2 py-3 rounded" type="email" name="mail" id="mail" placeholder="Your email" />
                <button className="bg-black text-white text-center px-10 py-3 rounded">Subscribe</button>
            </div>
        </div>
      </div>
      <div className="relative w-full mx-auto my-10">
        <hr className="border-none h-[2px] w-full bg-custom-gradient shadow-custom-blur"></hr>
      </div>
      <div className="relative w-full mx-auto my-10">
        <h1 className="text-center font-ClashDisplay-Medium">Copyright 2024 Uifry.Com All Rights Reserved</h1>
      </div>
    </div>
  )
}

export default Footer
