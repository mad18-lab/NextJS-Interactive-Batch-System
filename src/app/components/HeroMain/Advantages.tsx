import React from 'react'
import bell from '../../../assets/bell.png';
import clever from '../../../assets/clever.png';
import coloradv from '../../../assets/coloradv.png'
import star64 from '../../../assets/star64.png'
import adom from '../../../assets/adom.png'
import Image from 'next/image';

const Advantages = () => {
  return (
    <div className="max-w-[1050px] mt-5 mb-5 mx-5 lg:mx-auto sm:mx-10 md:mx-20">
        <div className="md:flex md:justify-between md:items-center">
            <div className="flex flex-col gap-2 lg:w-[50%] w-full">
                <p className="text-red-600 font-ClashDisplay-Regular tracking-widest">ADVANTAGES</p>
                <h1 className="text-5xl pb-4 font-ClashDisplay-Bold">Why Choose Uifry?</h1>
                <div className="flex flex-col gap-3 max-w-[505px] pb-4">
                    <div className="flex items-center gap-4 my-2">
                        <div className="flex items-center justify-center p-3 bg-[#fc435c] rounded-full">
                            <Image src={bell} alt='/' />
                        </div>
                        <p className="flex gap-2 font-ClashDisplay-Bold text-xl sm:text-2xl">Clever Notifications</p>
                    </div> 
                    <p className="sm:text-lg text-base font-ClashDisplay-Medium text-[#797575]">Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
                    In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
                    blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
                    nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                    suspendisse aliquam.</p>
                </div>
            </div>
            <div className="hidden lg:block lg:relative lg:w-[50%]">
                <Image src={star64} alt="/" className="absolute right-0" />
                <Image src={clever} alt="/" className="relative" />
                <Image src={adom} alt="/" className="absolute left-52 top-[202px]" />
            </div>
        </div>
    </div>
  )
}

export default Advantages
