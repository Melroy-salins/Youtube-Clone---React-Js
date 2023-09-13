import React from 'react'

const Button = ({data}) => {
  return (
   <div>
     <button className='px-2 m-2 border border-slate-500 rounded-lg bg-slate-400 '>{data}</button>
   
   </div>
  )
}

export default Button