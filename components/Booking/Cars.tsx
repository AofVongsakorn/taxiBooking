import React from 'react'
import CarsList from '@/data/CarsList'
import Image from 'next/image'

const Cars = () => {
    return (
        <div>
            <h2 className='font-semibold'>Select Cars</h2>
            <div className='grid grid-cols-3 md:grid-cols-2 lg:grid-cols-3'>
                {CarsList.map((item, index) => (
                    <div key={index} >
                        <Image
                            src={item.image}
                            width={75}
                            height={90}
                            alt={item.name}
                            className='w-full'
                        />

                    </div>

                ))}
            </div>
        </div>
    )
}

export default Cars