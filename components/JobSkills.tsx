import image1 from '@/public/image copy.png'
import image2 from '@/public/image copy 2.png'
import image3 from '@/public/image copy 3.png'
import Image from 'next/image'

export default function JobSkills(){
    return<div>
        <div className="px-10 mt-8 mb-5">
            <div className="grid grid-cols-5 text-sm">
                <div>
                    <div className='text-[#6E6D6D]'>
                        Skills Required
                    </div>
                    <div className='w-[66px] h-[24px] border rounded-md flex items-center mt-2 text-[12px] gap-x-1'>
                        <Image src={image1} alt='' className='w-[16px] h-[16px]'/>
                        Figma
                    </div>
                    <div className='w-[126.41px] h-[24px] border rounded-md flex items-center mt-2 text-[12px] gap-x-1'>
                        <Image src={image2} alt={''} className='w-[16px] h-[16px]'/>
                        Adobe Illustrator
                    </div>
                    <div className='w-[88.41px] h-[24px] border rounded-md flex items-center mt-2 text-[12px] gap-x-1'>
                        <Image src={image3} alt={''} className='w-[16px] h-[16px]'/>
                        Adobe XD
                    </div>
                </div>
                <div className='text-[#6E6D6D]'>
                    Preferred Language
                    <div className='text-[#3D3D3D] font-bold mt-2'>
                        English
                    </div>
                </div>
                <div className='text-[#6E6D6D]'>
                    Type
                    <div className='text-[#3D3D3D] font-bold mt-2'>
                        Full Time
                    </div>
                </div>
                <div>
                    Years of Experience
                    <div className='text-[#3D3D3D] font-bold mt-2'>
                        3+ Years of Experience
                    </div>
                </div>
            </div>
        </div>
    </div>
}