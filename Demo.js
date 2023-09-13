import React, { useMemo, useState } from 'react'
import { findNthPrime } from './Helper';

const Demo = () => {

    const [message , setmessage] = useState(0);

    const[isdarktheme , setdarktheme] = useState(false);


    const prime = useMemo ( () => findNthPrime(message) ,[message] )


    const prime2 = () => findNthPrime(message)

    
        

    console.log('rendering..')

  return (
    <div className= {'flex border border-black w-[70%] ' +  ( isdarktheme && 'bg-green-600')}>

   
    
    <input type='text' className='border border-black 0 h-11 mt-10' 
    value={message}

    onChange={ (e) => setmessage(e.target.value)}
    
    
    ></input>

    <button className='bg-red-400 text-white h-10 mt-36 ' onClick={()=>{

        setdarktheme(!isdarktheme)
    }}>Toggle</button>


    <div>
        <h1 className='font-bold'>nth Prime : {prime}</h1>
    </div>
    </div>
  )
}

export default Demo