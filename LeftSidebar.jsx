import React from 'react'
import { useState } from 'react';

import assets from "../../assets/assets"

const LeftSidebar = () => {
   const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(prev=>!prev);
  };

  return (
    <div className="bg-[#001030] text-white h-[75vh] sm:ml-[230px] ">
      <div className="p-5 pl-5">
        <div className="flex items-center justify-between p-5">
          <img src={assets.logo} className='max-w-[140px]' alt="" />
          <div className="relative p-[10px_0px]">
             <img 
        src={assets.menu_icon} 
        className="max-h-[20px] opacity-[100] cursor-pointer" 
        alt="menu icon"
        onClick={toggleMenu} />

      {showMenu && (
        <div className="absolute top-[70%] right-4 w-[120px] h-[70px] 
         rounded-[5px_0px_5px_5px]
          bg-white text-black p-[10px_19px] shadow-md">
          
          <p className="cursor-pointer text-[14px]">Edit Profile</p>
          <hr className="border-none h-[1px] bg-[#a4a4a4] m-[8px_0px]" />
          <p className="cursor-pointer p-[4px] text-[14px]">Logout</p>
        </div>
      )}
    </div>
  

        </div>
        <div className="bg-[#002670] flex items-center gap-[15px] px-10 py-[12px] mt-[20px] rounded-xl ">
          <img src={assets.search_icon} alt="" className='w-[16px] ' />
          <input type="text" placeholder='Search here..' className='bg-transparent outline-none text-white text-base rounded-xl' />
        </div>
      </div>
      <div className="flex flex-col h-[70%] overflow-y-scroll">
        {Array(12).fill("").map((item,index)=>(
          <div key={index} className="flex items-center gap-[10px] cursor-pointer px-[10px] py-[20px] hover:bg-[#077EFF]">
          <img src={assets.profile_img} className='w-[35px] h-[35px] rounded-full' alt="" />
          <div className='flex flex-col'>
            <p>Richard Sanford</p>
            <span className='text-[#9f9f9f] font-[11px] hover:text-white'>Hello ,How are you?</span>
          </div>
        </div>
        ))}
      </div>
    </div>
  )
}

export default LeftSidebar
