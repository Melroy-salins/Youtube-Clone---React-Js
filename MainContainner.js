import React from 'react'
import Buttonslist from './Buttonslist'
import Videocontainner from './Videocontainner'

const MainContainner = () => {
  return (
    <div className='basis-10/12'>
      <Buttonslist/>
        <Videocontainner/>
    </div>
  )
}

export default MainContainner