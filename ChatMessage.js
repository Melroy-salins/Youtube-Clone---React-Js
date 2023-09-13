import React from 'react'

const ChatMessage = ({name , message}) => {

    
  return (
    <div className='flex gap-2 items-center mb-3'>
        <img className='w-10 rounded-2xl bg-transparent' src='https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o='></img>
        <span className='font-medium text-xl'>{name}</span>
        <span className='justify-center ml-10'>{message}</span>
    </div>
  )
}

export default ChatMessage