import image from '@/public/image.png'
import Image from 'next/image'

export default function AboutCompany(){
    return (
        <div className='px-10 py-10'>
            <div className='flex items-center gap-x-2'>
                <div className=''>
                    <Image src={image} alt={''} className='w-[40px] h-[40px] rounded-md' />
                </div>
                <div className='text-[#4f4f4f] text-[20px] font-[500px]'>
                    Atlassian
                </div>
            </div>
            <div className='grid grid-cols-4'>
                <div className=''>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Company Size
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            1k - 2k Employees
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Sector
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            Information Technology, Infrastructure
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Founded In
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            2019
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Type
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            Private
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Funding
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            Bootstrapped
                        </div>
                    </div>
                    <div className='mt-8'>
                        <div className='text-[#6E6D6D] text-[14px]'>
                            Founded By
                        </div>
                        <div className='text-[16px] text-[#3D3D3D]'>
                            Scott Farquhar, Mike Cannon-Brookes
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}