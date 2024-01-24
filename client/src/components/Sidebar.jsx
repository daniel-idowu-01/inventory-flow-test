import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaList, FaRegUser } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";

const Sidebar = () => {

  //  links on sidebar
  const sidebar_links = [
    {
      id: 1,
      icon: <MdDashboard />,
      name: 'Dashboard'
    },
    {
      id: 2,
      icon: <FaList />,
      name: 'Tables'
    },
    {
      id: 3,
      icon: <RiBillLine />,
      name: 'Billing'
    },
    {
      id: 4,
      icon: <FaRegUser />,
      name: 'Profile'
    },
    {
      id: 5,
      icon: <GoSignIn />,
      name: 'Sign In'
    },
    {
      id: 6,
      icon: <SiGnuprivacyguard />,
      name: 'Sign Up'
    },
  ]

  return (
    <section
      className='fixed bg-red-500 w-[20%] h-[90%] m-5 rounded-xl shadow-md p-10 text-white'
    >
      <p>GoodsBrite</p>

      <div>
        {
          sidebar_links.map(link => (
            <div key={link.id} className='flex items-center gap-1'>
              {link.icon}
              <p>{link.name}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Sidebar
