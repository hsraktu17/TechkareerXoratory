import image1 from '@/public/image copy.png'
import Image from 'next/image'

export default function BiggerSection2(){
    return<div>
        <div className="px-10 ">
            <div className="grid grid-cols-4 text-sm">
                <div>
                    Skills Required
                    <div className='w-[66px] h-[24px] border rounded-md'>
                        <Image src={image1} alt={''} className='w-[16px] h-[16px]'/>
                    </div>
                </div>
                <div>
                    Preffered lang
                </div>
                <div>
                    Type
                </div>
                <div>
                    years of experience
                </div>
            </div>
        </div>
    </div>
}