import React from 'react'



function TodoItem({arr , arrSearchInp , search}) {
  return (
    <ul className='w-full list'>
      {
        search ? (
          arrSearchInp?.map((item) => 
          {
           return(
             <li key={item.id} className='list-none mt-4 h-6'>
                 <div className='flex content-center'>
                   <div className='flex justify-center content-center'>
                     <strong className='text-black mr-2'>{item.id}.</strong>
                     <p className='truncate w-56'>{item.name}</p>
                   </div>
                   <input className='h-6' type="checkbox" />
                 </div>
             </li>
           )
          })
        )
        :
        (
          arr?.map((item) => 
          {
           return(
             <li key={item.id} className='list-none mt-4 h-6'>
                 <div className='flex content-center'>
                   <div className='flex justify-center content-center'>
                     <strong className='text-black mr-2'>{item.id}.</strong>
                     <p className='truncate w-56'>{item.name}</p>
                   </div>
                   <input className='h-6' type="checkbox" />
                 </div>
             </li>
           )
          })
        )
      }
    </ul>
  )
}

export default TodoItem