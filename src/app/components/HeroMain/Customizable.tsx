import React from 'react'
import custom from '../../../assets/custom.png';
import blade from '../../../assets/blade.png';
import star48 from '../../../assets/star48.png'
import visa from '../../../assets/visa.png'
import Image from 'next/image';

const Premium = () => {
  return (
    <div className="max-w-[1050px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="relative w-[50%]">
            <Image src={star48} alt="/" className="absolute right-0" />
            <Image src={custom} alt="/" className="relative" />
            <Image src={visa} alt="/" className="hidden lg:block lg:absolute lg:top-[174px] lg:left-48 lg:w-[40%]" />
        </div>
        <div className="flex flex-col gap-2 w-[50%]">
            <div className="flex flex-col gap-3 max-w-[505px] pb-4">
                <div className="flex items-center gap-4">
                    <div className="flex items-center justify-center p-3 bg-[#fc435c] rounded-full">
                        <Image src={blade} alt='/' />
                    </div>
                    <p className="flex gap-2 font-ClashDisplay-Bold text-xl sm:text-2xl">Fully Customizable</p>
                </div> 
                <p className="sm:text-lg text-base font-ClashDisplay-Medium text-[#797575]">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
                    In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
                    blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
                    nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                suspendisse aliquam.</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Premium
