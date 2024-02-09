import React from 'react'
import TableComp from '../components/TableComp'

const ManageInventory = () => {
  return (
    <section className='h-screen'>
      <div className='relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%]'>
        <div className='relative top-5 shadow-xl bg-blue-500 w-[90%] mx-auto text-white p-5 rounded-md'>
          Manage Inventory
        </div>
        <TableComp />
      </div>
    </section>
  )
}

export default ManageInventory
