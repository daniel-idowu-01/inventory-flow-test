import React from 'react'
import StatsComp from './StatsComp'
import TopNav from './TopNav';
import BarChartComp from './BarChartComp';
import LineChartComp from './LineChartComp';
import { MdOutlineTimer } from "react-icons/md";
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
      <div className='relative top-5 md:absolute md:left-[28%] lg:left-[25%] lg:top-10 h-full md:w-[75%]'>
        <TopNav />
        <section>
          {/* Top dashboard stats */}
          <article
            className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-stretch md:place-items-center p-10'
          >
            {
              dashboardStats.map(stat => (
                <StatsComp {...stat} />
              ))
            }
          </article>

          {/* Bar and Line Chart */}
          <main
            className='grid grid-cols-1 md:grid-cols-2 place-items-center md:place-items-center gap-10 px-10 pb-10'
          >
            {/* bar chart component */}
            <article>
              <div className='bg-blue-500 w-fit p-5 shadow-md rounded-t-xl'>
                <BarChartComp />
              </div>

              <div className='shadow-xl px-10 py-5 rounded-b-xl'>
                <p className='text-lg font-bold opacity-80'>Website Views</p>
                <p className='opacity-50'>Last Campaign Performance</p>
                <hr className='w-[80%] mx-auto my-3' />
                <div className='flex items-center gap-1 opacity-30'>
                  <MdOutlineTimer />
                  <p>campaign sent 2 days ago</p>
                </div>
              </div>
            </article>

            {/* line chart component */}
            <article>
              <div className='bg-green-500 w-fit p-5 shadow-md rounded-t-xl'>
                <LineChartComp />
              </div>

                <div className='shadow-xl px-10 py-5 rounded-b-xl'>
                  <p className='text-lg font-bold opacity-80'>Daily Sales</p>
                <p className='opacity-50'>(+15%) increase in today's sales</p>
                <hr className='w-[80%] mx-auto my-3' />
                <div className='flex items-center gap-1 opacity-30'>
                  <MdOutlineTimer />
                  <p>updated 4 minutes ago</p>
                </div>
              </div>
            </article>
          </main>
        </section>
      </div>
    </section>
  )
}

export default DashboardComp
