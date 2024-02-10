import React from 'react'
import TableComp from '../components/TableComp'
import TopNav from '../components/TopNav'

const ManageInventory = () => {
  return (
    <main className='relative top-5 md:absolute md:left-20 lg:left-[25%] lg:top-10 h-full md:w-[75%]'>
      <TopNav />
      <div
        className='relative top-7 font-bold shadow-xl bg-cyan-500 w-[95%] mx-auto text-white p-5 rounded-md'
      >
          Manage Inventory
      </div>
      <TableComp />
    </main>
  )
}

export default ManageInventory
