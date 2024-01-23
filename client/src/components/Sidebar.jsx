import React from 'react'
import { MdDashboard } from 'react-icons/md'
import { FaTableList } from "react-icons/fa";

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
      icon: <MdDashboard />,
      name: 'Billing'
    },
    {
      id: 4,
      icon: <MdDashboard />,
      name: 'Profile'
    },
    {
      id: 5,
      icon: <MdDashboard />,
      name: 'Sign In'
    },
    {
      id: 6,
      icon: <MdDashboard />,
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
