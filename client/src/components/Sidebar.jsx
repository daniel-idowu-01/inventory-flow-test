import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaTableList, FaRegUser } from "react-icons/fa";
import { GoSignIn } from "react-icons/go";
import { SiGnuprivacyguard } from "react-icons/si";
import { RiBillLine } from "react-icons/ri";

const Sidebar = () => {

  const sidebar_links = [
    {
      id: 1,
      icon: <MdDashboard />,
      name: 'Dashboard'
    },
    {
      id: 2,
      icon: <FaTableList />,
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
    <section>
      <p>GoodsBrite</p>

      <div>
        {
          sidebar_links.map(link => (
            <p>{link.name}</p>
          ))
        }
      </div>
    </section>
  )
}

export default Sidebar
