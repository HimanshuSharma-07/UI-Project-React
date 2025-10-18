import React from 'react'

import HeroText from './HeroText';
import Arrow from './Arrow';
const Left = () => {
    return (
        <div className='h-full w-1/4 text-xl flex flex-col justify-between '>
         <HeroText />       
         <Arrow />  

        </div>
    )
}

export default Left
