import React, { useContext } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { CiSettings, CiUser } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import DataContext from '../context/DataContext';

const TopNav = () => {

  const { setSideBar, sideBar } = useContext(DataContext)
  
  return (
    <section className='text-2xl flex gap-3 absolute right-10'>
      <AiOutlineMenu
        className='md:hidden'
        onClick={() => setSideBar(!sideBar)}
      />

      <CiSettings
        className='hidden md:block'
      />

      <CiUser
        className='hidden md:block'
      />
      
      <IoIosNotificationsOutline
        className='hidden md:block'
      />
    </section>
  )
}

export default TopNav
