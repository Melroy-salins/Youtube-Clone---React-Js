import React, { useRef, useState } from 'react'

const Demo2 = () => {



   let y=0; let x =0;

    const [setx , increasex] = useState (0);


    const ref= useRef(0);

    console.log(ref)
    
  return (
    <div className='border border-slate-500 w-full p-2 flex flex-col'>Demo2
    
    <h1 className='font-bold'>{setx}</h1>
    <button className='bg-black text-white w-10 ' onClick={()=>{

       
        increasex(setx + 1);
       


       console.log("y---->" + y)

    }}>Add</button>

    <div className='flex gap-6 mt-10'>
        <span className='font-bold'>Ref :   {ref.current}</span>
        <button className='bg-red-300 p-2' onClick={()=>{

            ref.current +=1;

            console.log( "ref--->"+ ref.current)
        }}>incresease</button>
    </div>

    <div className='flex mt-10 gap-6'>
        <span>Let x : {x}</span>
        <button className='bg-black text-white' onClick={ ()=> {

            x = x+1;

            console.log("x--->" + x)

        }}>Increase x</button>
    </div>
    </div>
  )
}

export default Demo2