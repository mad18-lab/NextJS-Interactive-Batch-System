import React from 'react'
import headingSupport from '../../../assets/headingSupport.png'
import arrow from '../../../assets/arrow.png'
import play from '../../../assets/play.png'
import star48 from '../../../assets/star48.png'
import colorleft from '../../../assets/colorleft.png'
import colorright from '../../../assets/colorright.png'
import one from '../../../assets/1.png'
import two from '../../../assets/2.png'
import three from '../../../assets/3.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className="md:max-w-[1050px] max-w-[500px] mx-auto px-4 mb-96 mt-40">
      <div className="flex flex-col justify-between md:flex-row md:justify-between">
        <div className="flex flex-col gap-5 relative w-full md:w-[50%]">
            <Image src={star48} alt='/' className="absolute lg:-top-[80px] lg:-left-[150px] lg:-right-0 -top-24 -right-48" />
            <Image src={colorleft} alt='/' className="hidden absolute md:bottom-0 md:left-12 md:w-[420px] md:h-[420px]" />
            <h1 className="font-ClashDisplay-Bold md:text-left text-5xl text-center">Make The Best Financial Decisions</h1>
            <p className="text-[#797575] font-ClashDisplay-Medium">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet
            faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            <div className="md:flex md:gap-2 md:mx-0 mx-auto flex gap-2">
                <button className="bg-black flex gap-2 font-ClashDisplay-Regular items-center text-white text-center px-5 py-3 rounded">Get Started <Image src={arrow} alt='/'/></button>
                <button className="bg-white flex gap-2 font-ClashDisplay-Semibold items-center text-black text-center px-5 py-3 rounded"><Image src={play} alt='/'/> Watch Video</button>
            </div>
            <div className="relative">
              <Image src={star48} alt='/' className="absolute lg:top-16 lg:left-28" />
              <Image src={headingSupport} alt='/' className="md:scale-90 scale-75 md:top-0 top-15 lg:left-0 left-15 absolute lg:right-12" />
            </div>
        </div>
        <div className="hidden md:block md:mt-20 relative md:w-[50%]">
          <Image src={colorright} alt='/' className='absolute lg:-top-[220px]  lg:left-[120px]' />
          <Image src={three} alt='/' className='absolute lg:left-[120px] lg:-bottom-[330px]' />
          <Image src={two} alt='/' className='lg:scale-90 absolute lg:left-20 lg:-bottom-[300px]' />
          <Image src={one} alt='/' className='lg:scale-90 absolute lg:-left-0 lg:-bottom-[250px]' />
        </div>
      </div>
    </div>
  )
}

export default Hero
