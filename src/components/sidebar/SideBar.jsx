import React from 'react';
import { assets } from '../../assets/Assets';

const SideBar = () => {
    return (
        <div className='sideBar rounded-tl-[15px]  rounded-bl-[15px] pr-[19.22px] py-[19.22px] pl-[19.22px] bg-[#183087] text-white h-[100vh] w-[199px]'>
            <div className='sideBar-Container flex flex-col h-full justify-between'>
                <div className=' flex flex-col gap-[19.26px] '>
                    <div className=' flex'>
                        <img className=' pr-2' src={assets.Vector} alt="" />
                        <h1 className=' font-medium'>Dlex</h1>
                    </div>
                    <hr />
                    <div className="  bg-indigo-500">
                        <div className='flex'>
                            <div className='  '>
                                <img src={assets.Avater} alt="" />
                            </div>
                            <div>
                                <p>Dlex Designs</p>
                                <p>general team</p>
                            </div>
                            <div>
                                <img src={assets.unfold_more} alt="" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    <idv>
                        <div className='flex'>
                            <div>                            <img src={assets.Graph} alt="" /></div>
                            <p>Dashboard</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.Chart} alt="" /></div>
                            <p>Overview</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.Chat} alt="" /></div>
                            <p>Chat</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.User} alt="" /></div>
                            <p>Team</p>
                        </div>
                    </idv>

                    <h2>SHORTCUT</h2>

                    <div>
                        <div className='flex'>
                            <div><img src={assets.Document} alt="" /></div>
                            <p>Tasks</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.Danger} alt="" /></div>
                            <p>Reports</p>
                        </div>
                        <div className='flex'>
                            <div><img src={assets.Setting} alt="" /></div>
                            <p>Settings</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
                <div className=' flex flex-col gap-[9.23px]'>
                    <div className='  pr-[16.25px] pl-[16.25px] py-[16.05px] rounded-md bg-[#342BC2]'>
                        <div className='flex pb-[3.21px] justify-between'>
                            <p className=' font-medium'>Storage</p>
                            <p className=' font-thin'>Upgrade</p>
                        </div>
                        <p className=' text-xs'>3.4 GB <span className=''>of 15GB</span></p>
                        <div className=' bg-indigo-500 '><hr className=' w-9' /></div>
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