import React from 'react'

const StatsComp = ({title, value, percent}) => {
  return (
    <article className='p-2 shadow-md border w-52 h-32 rounded-xl'>
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

      
      
    </article>
  )
}

export default StatsComp
