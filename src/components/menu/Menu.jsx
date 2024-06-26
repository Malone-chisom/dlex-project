import React from 'react';
import { assets } from '../../assets/Assets';


const Menu = () => {
    return (
        <div style={{}} className='sideBar z-10 absolute left-0  transition-all translate-x-0 animate-fadeIn  text-sm  rounded-tl-[15px] pr-[19.22px] py-[19.22px] pl-[19.22px] bg-[#1e3586] text-white h-full w-[230px]'>
            <div className=' flex flex-col h-full justify-between'>
                <div className=' flex flex-col gap-[19.26px] '>
                    <div className=' flex items-center'>
                        <img className=' pr-2' src={assets.Vector} alt="" />
                        <h1 className='  cursor-pointer text-xl'>Dlex</h1>
                    </div>
                    <hr />
                    <div className=" rounded-md bg-indigo-500 pl-[11px] py-[13.18px]">
                        <div className='flex items-center gap-2'>
                            <div className=' flex gap-2  items-center'>
                                <div className=' p-1 bg-yellow-500 rounded-full cursor-pointer'>DW </div>

                                <div className=' leading-3'>
                                    <p className=' font-medium text-[13px] cursor-pointer'>Dlex Designs</p>
                                    <p className='text-xs text-[11px] cursor-pointer'>general team</p>
                                </div>
                            </div>
                            <div className='cursor-pointer'>
                                <img src={assets.unfold_more} alt="" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='flex items-center cursor-pointer'>
                            <div className='mr-2 cursor-pointer'><img src={assets.Graph} alt="" /></div>
                            <p>Dashboard</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.Chart} alt="" /></div>
                            <p>Overview</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.Chat} alt="" /></div>
                            <p>Chat</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.User} alt="" /></div>
                            <p>Team</p>
                        </div>
                    </div>

                    <h2>SHORTCUT</h2>

                    <div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.Document} alt="" /></div>
                            <p>Tasks</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex items-center cursor-pointer'>
                            <div className=' mr-2'><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex items-center cursor-pointer text-xs '>
                            <div className=' mr-2'><img src={assets.Setting} alt="" /></div>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className=' flex flex-col gap-[9.23px]'>
                    <div className='  pr-[16.25px] pl-[16.25px] py-[16.05px] rounded-md bg-[#342BC2]'>
                        <div className='flex pb-[3.21px] justify-between items-center cursor-pointer'>
                            <p className=' font-medium'>Storage</p>
                            <p className=' font-extralight text-sm'>Upgrade</p>
                        </div>
                        <p className=' text-xs'>3.4 GB <span className=''>of 15GB</span></p>
                        <div className=' bg-indigo-500 mt-[10.32px]'><hr className=' w-9' /></div>
                    </div>
                    <hr />
                    <div>
                        <div className='flex items-center  w-full '>
                            <div className=' flex items-center gap-3 mr-[14px] cursor-pointer'>
                                <img src={assets.img} alt="" />
                                <p >Jane Smith</p>
                            </div>
                            <div><img src={assets.unfold_more} alt="" /></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Menu