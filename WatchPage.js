import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { closemenu, togglemenu } from '../utilities/Navslice';
import { useParams, useSearchParams } from 'react-router-dom';
import CommentContainner from './CommentContainner';
import LiveChat from './LiveChat';



const WatchPage = () => {

   const [searchparams] = useSearchParams()

   

    const dispatch = useDispatch ();

   useEffect ( () => {

    dispatch(closemenu())
   })

  return (
    <div className='flex flex-col'>
    <div className='px-5'>
        <iframe width="1100" height="500" src={"https://www.youtube.com/embed/" + searchparams.get("v")} title="YouTube video player" allow="accelerometer; autoplay; 
        clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
    </div>
    <LiveChat/>
    </div>
  )
}

export default WatchPage