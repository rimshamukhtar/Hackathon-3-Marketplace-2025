


import React from 'react'
import Image from 'next/image'
import DontMisspic from "../../public/Don'tmiss.png"

const Dontmiss = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
   
      <h1 className='font-bold text-lg md:text-2xl lg:text-3xl ml-4 md:ml-0'>Don't Miss</h1>
  
      <div className="flex justify-center mt-6">
        <Image
          src="/Don'tmiss.png"
          alt="Don't Miss"
          width={1200}
          height={600}
          className='w-full max-w-screen-lg h-auto object-cover rounded-md'
        />
      </div>
      
  
      <div className='text-center flex flex-col items-center gap-6 mt-8 px-4'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          FLIGHT ESSENTIALS
        </h1>
        <p className='text-sm md:text-base max-w-lg'>
          Your built-to-last, all-week wears—but with style only Jordan Brand can deliver.
        </p>

     
        <div className="mt-4">
          <button className='rounded-full w-36 h-10 md:w-44 md:h-12 bg-black text-white text-sm md:text-base'>
            Shop
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dontmiss



