import React from 'react'
import star64 from '../../../assets/star64.png'
import Image from 'next/image'

const UserHeader = () => {
    return (
      <div className="max-w-[1080px] mx-auto relative">
        <Image src={star64} alt="/" className="hidden sm:absolute sm:-top-16 sm:right-32" />
        <div className="w-full flex flex-col gap-2 mx-auto pt-8 px-4 text-center">
          <h1 className="tracking-widest font-ClashDisplay-Medium text-lg">TESTIMONIAL</h1>
          <h1 className="text-4xl font-ClashDisplay-Bold">What Our Users <br></br> Say About Us?</h1>
        </div>
      </div>
    )
}

export default UserHeader
