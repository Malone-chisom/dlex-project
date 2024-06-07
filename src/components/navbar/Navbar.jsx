import React, { useContext, useState } from 'react'
import { assets } from '../../assets/Assets'
import SideBar from '../sidebar/SideBar'
import { AppContext } from '../../appContext/AppContext'


const Navbar = () => {

    const { setOn, on } = useContext(AppContext)

    return (
        <div className=' w-full shadow-md z-20 bg-white sticky top-0 left-0 px-7  py-2' >
            <div className='flex items-center  w-full justify-between'>
                <div className=' flex gap-6'>
                    <div onClick={() => setOn(!on)} className=' cursor-pointer '>
                        <img title='Menu' src={assets.Icon_Button} alt="" />

                    </div>
                    <div className=' cursor-pointer'>
                        <img title='Search' src={assets.search} alt="" />
                    </div>
                </div>
                <div className='flex items-center gap-6'>
                    <div className=' cursor-pointer'>
                        <img title=' England' src={assets.uk} alt="" />
                    </div>
                    <div title='Profile' className=' h-11 w-11 rounded-full overflow-hidden cursor-pointer'>
                        <img className=' w-full h-full object-cover' src={assets.profile_pic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar