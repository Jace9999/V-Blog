import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

export const Single = () => {
  return (
    <div className='single'>
      <div className='content'>
          <img src= ""/>
        <div className='user'>
          <img src= ""/>
        </div>
        <div className='info'>
          <span>Jace</span>
          <p>Posted 2 days ago</p>
        </div>
        <div className='edit'>
          <Link to={`/write?edit=2`}>
            <img src={Edit} alet=""/>
          </Link>
          <Link to={`/write?delete=2`}>
            <img src={Delete} alet=""/>
          </Link>
        </div>
        <p>
          <p>
          </p>  
        </p>
      </div>
      
    </div>
  )
}
