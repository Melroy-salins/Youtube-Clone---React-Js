import React, { useEffect, useState } from 'react'
import { youtubeapi } from '../Constant Youtube Video/Constant';
import Videocard from './Videocard';
import { Link } from 'react-router-dom';
import {Redbordervideocard} from './Videocard';

const Videocontainner = () => {


  const [videos, setvideos] = useState([]);

  useEffect ( () => {

      getVideos();
     
  },[])

  const getVideos = async () => {

    const data = await fetch(youtubeapi);

    const response = await data.json();

    

    setvideos(response.items)

  }


  
  return (
    <div className='grid grid-cols-3'>
     { videos[0] && <Redbordervideocard info={videos[0]}/>}
      {
        
        videos.map((video)=> (
          <Link to={"/watch?v=" + video.id} key={video.id}> <Videocard key={video.id} info={video}/> </Link>
        ))
      }
      
    </div>
  )
}

export default Videocontainner