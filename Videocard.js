import React from 'react'

const Videocard = (props) => {

    const {info} = props;



    const {snippet ,statistics} = info;
        const {channelTitle, title, thumbnails} = snippet;

    console.log(props)
  return (
    <div className='p-2 m-2 w-78 shadow-lg cursor-pointer'>
                <img src={thumbnails.medium.url} className='rounded-lg w-[100%]'></img>
                <ul>
                    <li className='font-bold'>{title}</li>
                    <li>{channelTitle}</li>
                    <li>{statistics.viewCount} views</li>
                </ul>
    </div>
  )
}


export const Redbordervideocard = ({info}) => {

  
  return <div className='border border-red-500'> <Videocard info={info}/> </div>
}
export default Videocard;


