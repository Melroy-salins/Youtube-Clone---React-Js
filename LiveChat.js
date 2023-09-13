import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage'
import { useDispatch, useSelector } from 'react-redux'
import { addmessages } from './Chatslice';


import { generatename, makeid } from './Helper';


const LiveChat = () => {

    const dispatch = useDispatch ();


    const [inputmessage , setinputmessage] = useState("");

    const mymessages = useSelector ((store) => store.chat. messages)

useEffect ( ()=> {

   const i =  setInterval(() => {
        
    dispatch(addmessages({

        name : generatename(),
        message: makeid(20)
    }))

    }, 2000);

    return () => {

       

        clearInterval(i)
    }

},[])


  return (
    <div className='m-2 p-2 border border-slate-500 bg-gray-400 rounded-lg flex-col-reverse'>

        <div>
        {

        mymessages.map((msg) => (
    
    
        <ChatMessage name={msg.name} message={msg.message} key={msg.name}/>

))

}
</div>

<form className='flex border border-slate-900' onSubmit={(e)=>e.preventDefault() }>

    <input type='text' placeholder='enter your message' className='p-2 w-[90%]'

     value={inputmessage} onChange={(e)=>{
        setinputmessage(e.target.value);


    }}></input>
    <button className='bg-slate-800 text-white w-10'onClick={()=>{

        dispatch(addmessages({
            name : "melroy",
            message :inputmessage
        }))
       setinputmessage(" ")
    }}>Send</button>
</form>



        


        </div>
  )
}

export default LiveChat