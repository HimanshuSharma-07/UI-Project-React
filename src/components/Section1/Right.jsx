import React from 'react'

import RigthContent from '../../../../card-project/RigthContent';

const value = [
{
  img : "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=688",
}

]
 
const Right = () => {
  return (
    <div className='h-full w-2/3 flex  relative overflow-hidden  '>
      {value.map(function(elem, idx){
        return <div key={idx}> 
        
          <RigthContent img = {elem.img} />
          <RigthContent />
          <RigthContent />
        </div>
      })}
      

    </div>
  )
}

export default Right
