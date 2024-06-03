import React from 'react';
import { assets } from '../../assets/Assets';

const SideBar = () => {
    return (
        <div className='sideBar rounded-tl-[15px]  rounded-bl-[15px] pr-[19.22px] py-[19.22px] pl-[19.22px] bg-[#183087] text-white h-[100vh] w-[199px]'>
            <div className='sideBar-Container '>
                <div className=' flex'>
                    <img className=' pr-2' src={assets.Vector} alt="" />
                    <h1 className=' font-medium'>Dlex</h1>
                </div>
                <hr />
                <div>
                    <div className='flex'>
                        <div className=' rounded-full p-2 bg-yellow-500 '>DW</div>
                        <div>
                            <p>Dlex Designs</p>
                            <p>general team</p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default SideBar