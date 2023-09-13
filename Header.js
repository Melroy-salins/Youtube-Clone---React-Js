import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { togglemenu } from '../utilities/Navslice';

import youtubesearchapi from '../Constant Youtube Video/Constant';

import {  cacheresult } from '../utilities/SearchSlice';

const Header = () => {

  const [searchquery , setsearchquery] = useState("");

  const [suggestions , setsuggestions] = useState([]);


  const [showsuggestions , setshowsuggestions] = useState(false);


  
  const cache = useSelector (( store) => store.search);




  const disptach = useDispatch ();

  

  useEffect ( () => {

    

    

 const timer = setTimeout ( ()=>{


      if(cache[searchquery]) {

        setsuggestions(cache[searchquery]);
      }
      else{

        apicallforsuggestion();
      }

 } ,200)
  

    

  return () => {

    clearTimeout(timer)
  }
  
  },[searchquery])


  const apicallforsuggestion = async () => {

    console.log( "Api call--"+ searchquery)

    const data = await fetch(youtubesearchapi + searchquery);

    const response = await data.json();

    setsuggestions(response[1]);

    //console.log(response[1]);


    disptach (  cacheresult({

      [searchquery] : response[1]

    }))

    
  }



  
  const togglemenuhandler = () =>{

    disptach(togglemenu())
   
    
  }




  return (
    <div className='grid  grid-flow-col shadow-lg p-5 m-2'>

        <div className='flex col-span-1 cursor-pointer'>
            <img  className='h-10' onClick={()=> togglemenuhandler()} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAATlBMVEXz9fQzMzP3+fi2t7YiIiIqKirk5uU/Pz+AgYHn6ej2+PdaWlpwcHAlJSUfHx8ZGBnc3t2UlpXu8O+jpKM2NjbMzMxVVVVOTk4vLi4TExOjM+vzAAABA0lEQVR4nO3bAXKCMBBA0UBrW1BEQRTvf9H2EtudWd67wZ8MhAnZ1gAAAAAAAAAAAAAAAAAAAAAASDD2scbsvrZ9xNpaauM4nD+jnYfMxPEyddGmS2bhcA0P7LrrkFk4/0PhnFnYnqfwwNMzM7Df9ukUa9q3PjXxdv+Jdb+lBsZv+PlbPgAAAFDFGCs7r/XLV6wl+yBqfX3Heq2py9iv8x58ILzPa+YqLo/owL/Ex5JYOLzDA7vunfnfov4a1n8O679LD7AftvrfNAAAAEAN5e+Xlr8jfIB73uXv6teft6g/M1N/7qn+7Fr9+cNWf4YUAAAAAAAAAAAAAAAAAAAAAOCgfgHY3y+u9Hc0OQAAAABJRU5ErkJggg=='></img>
            <img  className='h-11 mx-2'  src='https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500'></img>

        </div>

       
      
              <div className='flex  px-1 border border-slate-900 col-span-1 justify-between rounded-lg'>
              <div>
                  <input className='w-1/2 outline-none font-bold text-slate-800 border-none px-2' type='text' placeholder='Search here' value={searchquery} 
                  onChange={(e)=> setsearchquery(e.target.value)}

                  onFocus={()=>setshowsuggestions(true)}

                  onBlur={()=> setshowsuggestions(false)}
                  
                 
                  >

                  </input>
                  <button className='border border-gray-400 cursor-pointer p-2 px-2 py-2 border-r-0 rounded-l-lg bg-gray-200'>Search</button>
              </div>
              <div className='fixed  py-2 px-5 mt-14 w-[30rem]  rounded-md'>
                <ul className='bg-white shadow-md border border-t-orange-100'>{
                  
                 showsuggestions && suggestions.map((sugg) =>(

                    <li className=' hover:bg-slate-200 cursor-pointer p-2 rounded-md font-semibold' key={sugg}>{sugg} </li>

                  ))
                  
                  }
                  
                  
                </ul>
              </div>
        </div>


        <div className='flex col-span-1 justify-end'>
            <img className='h-8' src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="></img>
        </div>



    </div>
  )
}

export default Header