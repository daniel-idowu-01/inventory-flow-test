import React from 'react'
import StatsComp from './StatsComp'

const DashboardComp = () => {
  return (
    <section className='h-screen'>
      <div className='absolute left-[25%] h-full w-[70%]'>
        <article className='flex justify-between p-10'>
          <StatsComp title='Bookings' value='234' percent='+55' time='week' />
          <StatsComp title="Today's users" value='43' percent='+3' time='month' />
          <StatsComp title='Revenue' value='48k' percent='+1' time='yesterday' />
          <StatsComp title='Followers' value='+82' percent='Just updated' time='' />
        </article>
      </div>
    </section>
  )
}

export default DashboardComp
