import React from 'react'
import { MoveRight } from 'lucide-react';
    
const RightCardContent = () => {
  return (
    <div className='absolute top-0 left-0 h-full w-80  p-10 flex flex-col justify-between '>
        <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
        <div>
          <p className='text-xl leading-normal text-white mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, eaque? Nisi earum distinctio similique reiciendis.</p>
          <div className='flex justify-between items-center '>
            <button className='bg-blue-600 text-white font-medium px-8 py-2 rounded-full'>Satisfied</button>
            <button className='bg-blue-600 text-white font-medium px-4 py-2 rounded-full'><MoveRight /></button>
          </div>
        </div>
      </div>
  )
}

export default RightCardContent
