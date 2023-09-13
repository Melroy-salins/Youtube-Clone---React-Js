import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux';
import Appstore from './utilities/Appstore';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Children } from 'react';
import MainContainner from './Components/MainContainner';
import WatchPage from './Components/WatchPage';
import Demo from './Components/Demo';
import Demo2 from './Components/Demo2';

const approuter = createBrowserRouter ([
  {
    path : "/",
    element : <Body/>,

    children : [
      {
        path : "/",
        element : <MainContainner/>
      },
      {

        path : "Demo2",
        element :<Demo2/>
      }
    ]
  }
])


const AppLayout = () => {


  return (
    <Provider store={Appstore}>
  <div>
     {/* <span className="text-lg font-bold text-slate-800">Hello</span> */}
    <Header/>
   <RouterProvider router={approuter}/>
   </div>
   </Provider> 
  )
}





export default AppLayout;