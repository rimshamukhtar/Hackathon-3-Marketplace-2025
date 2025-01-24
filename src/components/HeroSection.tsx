


import React from 'react'
import Image from 'next/image'


const HeroSection = () => {
  return (
    <div className='flex flex-col items-center justify-center px-4 md:px-8'>
    
      <div className='bg-neutral-100 w-screen text-center '>
        <h1 className='font-bold text-2xl md:text-4xl'>Hello Nike App</h1>
        <p className=' text-base md:text-lg'>
          Download the app to access everything Nike. 
          <span className='font-bold hover:underline cursor-pointer'> Get Your Great</span>
        </p>
      </div>

   
      <div className='w-full max-w-screen-lg '>
        <Image
          src="/Heroimage.png"
          alt='Nike Hero'
          width={1200}
          height={700}
          className='w-full h-auto object-cover'
        />
      </div>

      <div className='text-center mt-10 flex flex-col items-center gap-6 px-4'>
        <h3 className='font-bold text-lg md:text-xl'>First Look</h3>
        <h1 className='text-2xl md:text-4xl font-bold'>Nike Air Max Pulse</h1>
        <p className='max-w-md md:max-w-lg text-sm md:text-base'>
          Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse
          —designed to push you past your limits and help you go to the max.
        </p>

      
        <div className='flex flex-col md:flex-row justify-center gap-4'>
          <button className='rounded-full w-32 h-10 bg-black text-white text-sm md:w-36 md:h-12'>
            Notify Me
          </button>
          <button className='rounded-full w-36 h-10 bg-black text-white text-sm md:w-40 md:h-12'>
            Shop Air Max
          </button>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
