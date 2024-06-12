import React from 'react'
import premium from '../../../assets/premium.png';
import star_lit from '../../../assets/star_lit.png';
import wheel from '../../../assets/wheel.png';
import cube from '../../../assets/cube.png';
import premiumleft from '../../../assets/premiumleft.png'
import star48 from '../../../assets/star48.png'
import premiumright from '../../../assets/premiumright.png'
import Image from 'next/image';

const Premium = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[50%] relative">
          <Image src={premiumleft} alt='/' className='absolute lg:top-0 right-10 top-[100px]' />
          <Image src={star48} alt='/' className='absolute lg:top-[150px] top-[100px]' />
          <Image src={premium} alt='/' className="relative"/>
        </div>
        <div className="flex flex-col gap-2 w-[50%] relative">
            <p className="text-red-600 font-ClashDisplay-Regular tracking-widest">FEATURES</p>
            <h1 className="text-4xl pb-4 font-ClashDisplay-Bold">Uifry Premium</h1>
            <div className="flex flex-col gap-3 max-w-[505px] pb-4">
                <p className="flex gap-2 font-ClashDisplay-Bold"><Image src={star_lit} alt='/' className="object-contain" /> Budgeting Intervals </p>
                <p className="text-sm font-ClashDisplay-Medium text-[#797575]">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br></br>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="flex flex-col gap-3 max-w-[505px] pb-4">
                <p className="flex gap-2 font-ClashDisplay-Bold"><Image src={wheel} alt='/' className="object-contain" /> Budgeting Intervals </p>
                <p className="text-sm font-ClashDisplay-Medium text-[#797575]">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br></br>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="flex flex-col gap-3 max-w-[505px] pb-4">
                <p className="flex gap-2 font-ClashDisplay-Bold"><Image src={cube} alt='/' className="object-contain" /> Budgeting Intervals </p>
                <p className="text-sm font-ClashDisplay-Medium text-[#797575]">Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br></br>
                faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
