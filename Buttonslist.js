import React from 'react'
import Button from './Button'


const list= ["All" ,"Music","Sports","Games","Live","Cricket","Football","Trending"  ,"Moon" , "Music",'C++'];

let count = 0;

const Buttonslist = () => {
  return (
    <div className='flex'>
      
        {
          

            list.map ((ele) => <Button  key={count++} data={ele} />)
            
        }
    </div>
  )
}

export default Buttonslist