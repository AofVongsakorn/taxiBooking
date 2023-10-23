
"use client"

import React, { useEffect, useState } from 'react'

function AutocompleteAddress() {

  const [source, setSource] = useState<any>()
  const [source2, setSource2] = useState<any>()

  const [box, setBox] = useState<any>(false)
  const [box2, setBox2] = useState<any>(false)

  const [addressList, setAddressList] = useState<any>([])
  const [addressList2, setAddressList2] = useState<any>([])

  useEffect(() => {

    const delayDebounceFn = setTimeout(() => {
      getAddressList();
      getAddressList2();
    }, 1000)

    return () => clearTimeout(delayDebounceFn)

  }, [source, source2])


  const getAddressList = async () => {
    const res = await fetch("api/search-address?q=" + source, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await res.json();
    setAddressList(result)

  }

  const getAddressList2 = async () => {
    const res = await fetch("api/search-address?q=" + source2, {
      headers: {
        "Content-Type": "application/json",
      }
    });
    const result = await res.json();
    setAddressList2(result)

  }


  return (
    <div className='mt-4'>
      <div className='relative'>
        <label className='text-gray-300'> Where From ?</label>
        <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
          value={source}
          onChange={(e) => {setSource(e.target.value);setBox(true)}} />
      </div>

      {addressList.suggestions&&box ? (
        <div className='shadow-md absolute bg-white z-10'>
          {addressList.suggestions.map((item: any, index: number) => (
            <div key={index} 
            className='p-3 hover:bg-gray-200 cursor-pointer'
            onClick={() => {setSource(item.full_address);setAddressList([]);setBox(false)}}
            >{item.full_address}</div>
          ))}
        </div>
      ) : null}

      <div className='mt-3 relative'>
        <label className='text-gray-300'> Where To ?</label>
        <input type="text" className='bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300'
          value={source2}
          onChange={(e) => {setSource2(e.target.value);setBox2(true)}}  />
      </div>
      {addressList2.suggestions&&box2?(
        <div className='shadow-md absolute bg-white z-10'>
          {addressList2.suggestions.map((item: any, index: number) => (
            <div key={index} 
            className='p-3 hover:bg-gray-200 cursor-pointer'
            onClick={() => {setSource2(item.full_address);setAddressList2([]);setBox2(false)}}
            >{item.full_address}</div>
          ))}
        </div>
      ) : null}


    </div>
  )
}

export default AutocompleteAddress