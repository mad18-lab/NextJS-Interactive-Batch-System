import React from 'react'
import Image from 'next/image'
import star64 from '../../../assets/star64.png'

const FAQHeader = () => {
    return (
      <div className="max-w-[1080px] mx-auto relative">
        <div className="w-full flex flex-col gap-2 mx-auto pt-8 px-4 mb-8">
          <h1 className="font-[ClashDisplay-Medium] tracking-wide text-lg text-red-600">FAQ</h1>
          <h1 className="text-4xl font-[ClashDisplay-Bold]">Frequently Asked <br></br> Questions</h1>
        </div>
        <Image src={star64} alt="/" className="absolute right-0 bottom-5 left-[600px]"/>
      </div>
    )
}

export default FAQHeader
