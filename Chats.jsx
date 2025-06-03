import React from 'react'
import './Chats.css'
import LeftSidebar from '../../components/LeftSidebar/LeftSidebar'
import RightSidebar from '../../components/RightSidebar/RightSidebar'
import ChatBox from '../../components/ChatBox/ChatBox'

const Chats = () => {
  return (
    <div className="min-h-screen bg-gradient-to-t from-sky-200 to-indigo-500 flex items-center ">
      <div className="h-[75vh]  bg-white grid grid-cols-[1fr_2fr_1fr] shadow-lg  overflow-hidden">
        <LeftSidebar/>
        <ChatBox />
        <RightSidebar />
      </div>
    </div>
  )
}

export default Chats
