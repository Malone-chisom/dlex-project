import React from 'react'
import { assets } from '../../assets/Assets'
import '../../index.css'

const Info = () => {
    return (
        <div className='  w-[22%]  flex-col justify-center items-center  place-items-end  h-[90vh] bg-[#F5F5F5] hidden py-8 custom-1233:block '>
            <div className='flex justify-around flex-col place-self-center  h-full  items-center'>
                <div className='flex flex-col items-center '>
                    <div className='flex items-center flex-col gap-1 '>
                        <div className='mb-2'><img src={assets.Group1002} alt="" /></div>
                        <h1 className='font-medium'>Harrison Philip</h1>
                        <p>Business analyst</p>
                    </div>
                </div>

                <div className=' flex sm:min-w-[95%] w-[80%] justify-co flex-col justify-between'>
                    <div className='border w-full rounded-md flex justify-between items-center py-3  pl-2'>
                        <div>
                            <p className='text-sm '>Get-10% sell price</p>
                            <p className=' text-sm'>for 'spanish Az' cours</p>
                        </div>
                        <div><img src={assets.keyboardarrow_right} alt="" /></div>
                    </div>
                    <h1 className=' font-medium  mb-5 mt-6'>Course Progress</h1>
                    <div className='flex flex-col gap-10 custom-1233:gap-5 md:gap-3 md:text-sm'>
                        <div className='border rounded-lg py-3 pl-2'>
                            <div className='flex items-center'>
                                <div className='text-[#4A4DE6] font-medium'>63%</div>
                                <div className=' mx-2'><img src={assets.Group1003} alt="" /></div>
                                <div>
                                    <h2 className=' font-medium'>Grammer</h2>
                                    <p className='text-sm font-thin'>Learn new rules</p>
                                </div>
                            </div>
                        </div>
                        <div className=' border rounded-lg py-3 pl-2'>
                            <div className='flex items-center'>
                                <div className='text-[#FF8F00] font-medium'>78%</div>
                                <div className=' mx-2'><img src={assets.Group1004} alt="" /></div>
                                <div>
                                    <h2 className=' font-medium'>Grammer</h2>
                                    <p className='text-sm font-thin'>Learn new rules</p>
                                </div>
                            </div>
                        </div>
                        <div className=' border rounded-lg py-3 pl-2'>
                            <div className='flex items-center'>
                                <div className='text-[#E83274] font-medium'>34%</div>
                                <div className=' mx-2'><img src={assets.Rectangle1033} alt="" /></div>
                                <div>
                                    <h2 className=' font-medium'>Grammer</h2>
                                    <p className='text-sm font-thin'>Learn new rules</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Info