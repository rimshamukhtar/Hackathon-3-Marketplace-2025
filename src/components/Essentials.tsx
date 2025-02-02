import React from 'react'

const Essentials = () => {
  return (
    <div className='h-auto mt-10 px-4 sm:px-10'>
      <h1 className='font-bold ml-0 sm:ml-28 text-center sm:text-left'>The Essentials</h1>
      <div className='flex flex-wrap justify-center gap-4 mt-4'>
        <div className='w-full sm:w-64 h-72'>
            <img src="/Essential1.png" alt="Essential 1" className="w-full h-full object-cover" />
        </div>
        <div className='w-full sm:w-64 h-72'>
          <img src="/Essential2.png" alt="Essential 2" className="w-full h-full object-cover" />
        </div>
        <div className='w-full sm:w-64 h-72'>
          <img src="/Essential3.png" alt="Essential 3" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  )
}

export default Essentials
