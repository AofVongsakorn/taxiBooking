import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'
import Cars from './Cars'

function Booking() {
 
  return (
    <div className='mt-5'>
      <h2 className='text-[20px]'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md mt-3'>
        < AutocompleteAddress />
        <Cars/>
      </div>
    </div>
  )
}

export default Booking