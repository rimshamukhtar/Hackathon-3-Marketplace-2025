


import React from 'react'
import Image from 'next/image'
import Featuredpic from "../../public/Featuredpic.png"

const Featured = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 py-8">
  
      <h1 className='font-bold text-lg md:text-2xl lg:text-3xl ml-4 md:ml-0'>Featured</h1>
      
    
      <div className="flex justify-center mt-6">
        <Image
          src="/Featuredpic.png"
          alt="Featured Image"
          width={1200}
          height={600}
          className='w-full max-w-screen-lg h-auto object-cover rounded-md'
        />
      </div>
      
   
      <div className='text-center flex flex-col items-center gap-4 mt-8 px-4'>
        <h1 className='text-2xl md:text-4xl font-bold'>
          STEP INTO WHAT FEELS GOOD
        </h1>
        <p className='text-sm md:text-base max-w-lg'>
          Cause everyone should know the feeling of running in that perfect pair.
        </p>

     
        <div className="mt-4">
          <button className='rounded-full w-40 h-10 md:w-48 md:h-12 bg-black text-white text-sm md:text-base'>
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
