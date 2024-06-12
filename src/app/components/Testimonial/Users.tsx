import React from 'react'
import group from '../../../assets/group.png';
import users from '../../../assets/users.png';
import star48 from '../../../assets/star48.png'
import Image from 'next/image';

const Users = () => {
  return (
    <div className="max-w-[1080px] mx-auto">
      <div className="flex justify-between items-center">
        <div className="w-[50%] relative">
            <Image src={group} alt="/" />
            <Image src={star48} alt="/" className="absolute -left-32 bottom-10" />
        </div>
        <div className="flex flex-col gap-2 w-[50%] mt-12">
            <div className="flex flex-col gap-3 max-w-[505px] pb-4 items-start">
                <p className="flex gap-2 font-ClashDisplay-Bold text-xl sm:text-3xl">The Best Financial Accounting App Ever!</p>
                <p className="sm:text-lg text-base font-ClashDisplay-Medium text-[#797575]">"Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies.
                    In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et
                    blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit
                    nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien,
                suspendisse aliquam."</p>
                <Image src={users} alt='/' className="my-2"/>
                <p className="font-ClashDisplay-Bold">Nick Jonas</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Users
