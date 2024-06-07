import React, { useContext, useState } from 'react'
import { assets } from '../../assets/Assets'
import Info from '../info/Info'
import "../../index.css"
import Navbar from '../navbar/Navbar'
import SideBar from '../sidebar/SideBar'
import { AppContext } from '../../appContext/AppContext'
import Menu from '../menu/Menu'

const Card = () => {

  // const [on, setOn] = useState(false)
  const { on, setOn } = useContext(AppContext)


  return (



    <div className=' relative *:text-sm grid h-screen animate-fadeIn w-[99%] verflow-y-scroll '>
      <div className=' block mobile-L:hidden sticky top-0 left-0  w-full z-20'>
        <Navbar />
      </div>
      <span onClick={() => setOn(!on)}>
        {on ? (
          < Menu className=" absolute" />

        ) : ("")}
      </span>

      <div className=' w-full small:max-sm:bg-black   px-5 place-self-center flex flex-col'>
        <span className=' absolute right-28 right top-1 z-1 '>

        </span>
        {/* <info /> */}
        <div className=' flex flex-col gap-9 medium:gap-10 place-items-center '>
          <div className=' w-full flex items-center justify-between px-5'>
            <h1 className=" text-xl font-bold mb-[] cursor-pointer">Professional Dashboard</h1>
            <span className=' w-1/12  block custom-1233:hidden  mb-[-2%] cursor-pointer'>
              {/* {on ? (
                "hellow"
              ) : (<img src={assets.Group1002} alt="" />)} */}
            </span>
          </div>
          <div className=' flex flex-wrap w-full justify-between '>
            <div className='first-child  hover:translate-y-[-2px]  hover:duration-300  medium:w-[49%] w-[100%] transition-width-2000  h-auto  rounded-md px-5 py-[2vh] bg-[#28439D] flex flex-col '>
              <div className="flex flex-col gap-[2px] mb-[3vh]">
                <p className='text-[#FFFFFFB3] cursor-pointer'>DEADlINE 12:00</p>
                <h2 className='text-white  cursor-pointer font-medium'>Exam - Unit 5 </h2>
                <p className='cursor-pointer text-[#FFFFFFB3]'>Spanish for beginners</p>
              </div>
              <div className='cursor-pointer'>
                <img src={assets.groupedavatars} alt="" />
              </div>

            </div>
            <div className='second  mt-[4vh] trans medium:mt-0  medium:w-[49%] w-[100%] h-auto justify-between rounded-md flex'>
              <div className=' px-5 bg-[#d8d0d0]  hover:translate-y-[-2px]  hover:duration-300 rounded-md w-[49%] py-5'>
                <div  >
                  <div className='cursor-pointer'><img src={assets.check_circle_outline} alt="" /></div>
                  <h2 className=' font-medium cursor-pointer'>Homework</h2>
                  <p className=' text-[#030101b3] cursor-pointer'>For today's lesson</p>
                </div>
                <h2 className='cursor-pointer'>35 MIN AGO</h2>
              </div>
              <div className=' px-5 bg-[#E1F5FD] rounded-md  hover:translate-y-[-2px]  hover:duration-300 w-[49%] py-5'>
                <div >
                  <div><img src={assets.Vector_} alt="" /></div>
                  <h2 className='font-medium cursor-pointer'>Reading</h2>
                  <p className='text-[#FFFFFFB3] cursor-pointer'>24 words per week</p>
                </div>
                <h2 className='cursor-pointer'>2H AGO</h2>
              </div>

            </div>
          </div>
          <div className='flex  cursor-pointer flex-wrap justify-between w-full'>
            <div className=' mobile:w-[49%] w-[100%]  hover:translate-y-[-2px]  hover:duration-300 h-auto border rounded-md px-5 py-[2vh]'>
              <div >
                <div className='flex justify-between'>
                  <div className='mb-[1vh]'>
                    <p className='mb-[0.80%] cursor-pointer font-medium'>Group info</p>
                    <p className='cursor-pointer text-xs'>13 students in the group</p>
                  </div>

                  <div><img src={assets.Vec_tor} alt="" /></div>
                </div>
                <div className=' bg-[#FF9365] px-5 py-[2vh] flex  rounded-md items-center justify-between'>
                  <div className='text-[#FFFFFFB3]' >
                    <h2 className='cursor-pointer' >Group homework</h2>
                    <p className='cursor-pointer'>4 student from your group </p>
                    <p className='cursor-pointer'>online now</p>
                  </div>
                  <div className='cursor-pointer'><img src={assets.keyboard_arrow_right} alt="" /></div>
                </div>

                <h2 className='mb-[] cursor-pointer mt-[5.13px] font-medium'>Today's lesson </h2>
                <p className='text-xs cursor-pointer'>unit 6 - Article</p>
              </div>


            </div>
            <div className='  mobile:w-[49%] mt-[4vh] mobile:mt-0   hover:translate-y-[-2px]  hover:duration-300  w-[100%] cursor-pointer h-auto rounded-md flex flex-col  px-5 border py-[2vh]'>
              <div className='h-full relative '>
                <h2 className='mb-[2vh] font-medium'> Overall progress</h2>
                <div className='flex justify-between'>
                  <div className='mb-[18.59px]'>
                    <p className=' font-medium text-xs'>Germiny for</p>
                    <p className=' font-medium text-xs'> beginners</p>
                  </div>
                  <div className=''>
                    <img src={assets.Group1006} alt="" />
                  </div>
                </div>
                <div className='flex flex-col gap-[11.44px]'>
                  <div>
                    <div><img src={assets.Group883} className='w-full' alt="" /></div>
                  </div>
                  <p className=' font-medium'>75%</p>
                </div>
                <div className=' absolute bottom-0 w-full'>
                  <div className=' align-bottom mt-3 border-t-4 items-center  flex text-[#3855B3] justify-end'>
                    <p className=' font-medium'>Exlore more </p>
                    <div><img src={assets.keyboardarrow_right} alt="" /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='flex flex-wrap cursor-pointer justify-between w-full'>
            <div className='flex rounded-md  px-[22.95px]  hover:translate-y-[-2px]  hover:duration-300  h-auto  mobile:w-[49%] w-[100%] justify-between border'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex items-center'>
                  <div><img src={assets.Group1008} alt="" /></div>
                  <div>
                    <h2 className=' font-medium'>Grammer</h2>
                    <p className='text-xs'>+30 grammer rules</p>
                  </div>
                </div>
                <div><img src={assets.keyboardarrow_right} alt="" /></div>
              </div>
            </div>
            <div className='flex cursor-pointer rounded-md  hover:translate-y-[-2px]  hover:duration-300  py-[1vh] px-5 h-auto my-[2vh] mobile:w-[49%] w-[100%] justify-between border'>
              <div className='flex w-full items-center justify-between'>
                <div className='flex items-center'>
                  <div><img src={assets.Group1007} alt="" /></div>
                  <div>
                    <h2 className=' font-medium'>Dictionary</h2>
                    <p className='text-xs'>+10 new words</p>
                  </div>
                </div>
                <div><img src={assets.keyboardarrow_right} alt="" /></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Card