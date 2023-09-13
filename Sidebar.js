import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Sidebar = () => {

    const ismenuopen = useSelector ( (store) => store.app.ismenuopenflag )

    //this type of code is called early return 
    if(!ismenuopen) return null;

    


  return (
    <div className='p-5 shadow-lg w-12rem'>



<ul className='mb-7'>
            <Link to="/"><li className='mb-2'>Home</li></Link>
            <li className='mb-2'>Shorts</li>
            <li className='mb-2'>Movies</li>
            <li className='mb-2'>Sports</li>
        </ul>

<h1 className='font-bold'>Watch Later</h1>
        <ul className='mb-7'>
            <li className='mb-2'>Music</li>
            <li className='mb-2'>Games</li>
            <li className='mb-2'>Movies</li>
            <li className='mb-2'>Sports</li>
        </ul>

        <h1 className='font-bold'>Subscriptions</h1>
        <ul>
            <li className='mb-2'>Music</li>
            <li className='mb-2'>Games</li>
            <li className='mb-2'>Movies</li>
            <li className='mb-2'>Sports</li>
        </ul>
    </div>
  )
}

export default Sidebar