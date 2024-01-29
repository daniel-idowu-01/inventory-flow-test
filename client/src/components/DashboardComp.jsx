import React from 'react'
import StatsComp from './StatsComp'
import TopNav from './TopNav';
import { MdOutlineInventory2 } from "react-icons/md";
import { ImStatsBars } from "react-icons/im";
import { FaStoreAlt } from "react-icons/fa";
import { FiUserPlus } from "react-icons/fi";

const DashboardComp = () => {

  // data for top dashboard stats
  const dashboardStats = [
    {
      title: 'Bookings',
      value: '234',
      percent: '+55',
      time: 'week',
      icon: <MdOutlineInventory2 />,
      bg_color: 'bg-[#344767]'
    },
    {
      title: "Today's users",
      value: '43',
      percent: '+3',
      time: 'month',
      icon: <ImStatsBars />,
      bg_color: 'bg-blue-500'
    },
    {
      title: 'Revenue',
      value: '48k',
      percent: '+1',
      time: 'yesterday',
      icon: <FaStoreAlt />,
      bg_color: 'bg-green-500'
    },
    {
      title: 'Followers',
      value: '+82',
      percent: 'Just updated',
      time: '',
      icon: <FiUserPlus />,
      bg_color: 'bg-pink-500'
    },
  ]

  return (
    <section className='h-screen'>
      <div className='relative md:absolute md:left-[25%] top-5 md:top-10 h-full md:w-[75%]'>
        <TopNav />
        <article className='flex flex-col md:flex-row gap-4 justify-between p-10'>
          {
            dashboardStats.map(stat => (
              <StatsComp {...stat} />
            ))
          }
        </article>
      </div>
    </section>
  )
}

export default DashboardComp
