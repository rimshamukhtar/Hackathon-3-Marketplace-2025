import React from 'react'

const Essentials = () => {
  return (
    <div className='h-96 mt-10'>
     <h1 className='font-bold ml-28'>The Essentials</h1>
     <div className='flex justify-center gap-4 mt-4'>
        <div className=' w-64 h-72 '>
            <img src="/Essential1.png" alt="" />
        </div>
        <div className=' w-64 h-72'>
        <img src="/Essential2.png" alt="" />
        </div>
        <div className=' w-64 h-72'>
        <img src="/Essential3.png" alt="" />
        </div>
     </div>
    </div>
  )
}

export default Essentials
