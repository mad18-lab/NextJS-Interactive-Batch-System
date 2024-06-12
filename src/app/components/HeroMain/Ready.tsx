import React from 'react'
import apple from '../../../assets/apple.png';
import Image from 'next/image';

const Ready = () => {
  return (
    <div className="max-w-[1080px] mx-auto rounded mt-12 mb-12 bg-black">
        <div className="flex justify-between items-center">
            <div className="max-w-[550px] flex flex-col gap-3 text-white p-16">
                <h1 className="text-4xl font-ClashDisplay-Bold">Ready To Get Started?</h1>
                <p className="font-ClashDisplay-Light">Risus Habitant Leo Egestas Mauris Diam Eget Morbi Tempus Vulputate</p>
                <button className="bg-white flex font-ClashDisplay-Semibold gap-3 items-center text-black text-center px-5 py-3 rounded-sm max-w-[200px]">Download App <Image src={apple} alt='/'/></button>
            </div>
        </div>
    </div>
  )
}

export default Ready
