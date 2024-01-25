import React from 'react'

const StatsComp = ({title, value, percent, time}) => {
  return (
    <article className='p-2 px-3 shadow-md border w-52 h-32 rounded-xl'>
      <section
        className='flex justify-end text-right '
      >
        <div></div>

        <div>
          <p>{title}</p>
          <p className='text-xl font-bold'>{value}</p>
        </div>
      </section>

      <hr className='w-[70%] mx-auto mt-3' />

      {time
        ?
        <p className='text-sm mt-3'>
          <span className='text-green-500'>
            {percent}% </span>
          than last {time}
        </p>
        :
        <p className='text-sm mt-3'>Just Updated</p>}
      
    </article>
  )
}

export default StatsComp
