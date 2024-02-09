import React from 'react'
import TableComp from '../components/TableComp'

const ManageInventory = () => {
  return (
    <section className='h-screen'>
      <div className='relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%]'>
        <TableComp />
        <p>Hello</p>
      </div>
    </section>
  )
}

export default ManageInventory
