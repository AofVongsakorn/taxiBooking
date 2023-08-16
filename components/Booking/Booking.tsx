import React from 'react'
import AutocompleteAddress from './AutocompleteAddress'

function Booking() {
 
  return (
    <div className='mt-5'>
      <h2 className='text-[20px]'>Booking</h2>
      <div className='border-[1px] p-5 rounded-md mt-3'>
        < AutocompleteAddress />
      </div>
    </div>
  )
}

export default Booking