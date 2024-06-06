import React from 'react';
import { assets } from '../../assets/Assets';

const SideBar = () => {
    return (
        <div className='sideBar hidden custom-664:block  rounded-tl-[15px]  rounded-bl-[15px] pr-[19.22px] py-[19.22px] pl-[19.22px] bg-[#1e3586] text-white h-[100vh] w-[230px]'>
            <div className='sideBar-Container flex flex-col h-full justify-between'>
                <div className=' flex flex-col gap-[19.26px] '>
                    <div className=' flex'>
                        <img className=' pr-2' src={assets.Vector} alt="" />
                        <h1 className=' font-medium'>Dlex</h1>
                    </div>
                    <hr />
                    <div className=" rounded-md bg-indigo-500 pl-[11px] py-[13.18px]">
                        <div className='flex items-center gap-2'>
                            <div className=' flex gap-2  items-center'>
                                <div className=' p-1 bg-yellow-500 rounded-full'>DW </div>

                                <div className=' leading-3'>
                                    <p className=' font-medium text-[13px]'>Dlex Designs</p>
                                    <p className='text-xs text-[11px]'>general team</p>
                                </div>
                            </div>
                            <div>
                                <img src={assets.unfold_more} alt="" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <div>
                        <div className='flex items-center '>
                            <div className='mr-2'><img src={assets.Graph} alt="" /></div>
                            <p>Dashboard</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Chart} alt="" /></div>
                            <p>Overview</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Chat} alt="" /></div>
                            <p>Chat</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.User} alt="" /></div>
                            <p>Team</p>
                        </div>
                    </div>

                    <h2>SHORTCUT</h2>

                    <div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Document} alt="" /></div>
                            <p>Tasks</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex items-center'>
                            <div className=' mr-2'><img src={assets.Setting} alt="" /></div>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className=' flex flex-col gap-[9.23px]'>
                    <div className='  pr-[16.25px] pl-[16.25px] py-[16.05px] rounded-md bg-[#342BC2]'>
                        <div className='flex pb-[3.21px] justify-between items-center'>
                            <p className=' font-medium'>Storage</p>
                            <p className=' font-extralight text-sm'>Upgrade</p>
                        </div>
                        <p className=' text-xs'>3.4 GB <span className=''>of 15GB</span></p>
                        <div className=' bg-indigo-500 mt-[10.32px]'><hr className=' w-9' /></div>
                    </div>
                    <hr />
                    <div>
                        <div className='flex items-center  w-full '>
                            <div className=' flex items-center gap-3 mr-[14px]'>
                                <img src={assets.img} alt="" />
                                <p>Jane Smith</p>
                            </div>
                            <div><img src={assets.unfold_more} alt="" /></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default SideBar