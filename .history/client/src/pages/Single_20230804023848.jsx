import React from 'react'
import Edit from '../image/edit.png'
import Delete from '../image/delete.png'
import { Link } from 'react-router-dom'
import {Menu} from "../components/Menu"

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
          <img src={Delete} alet=""/>
        </div>
        <p>
          <p>
          </p>  
        </p>
      </div>
      <Menu/>
    </div>
  )
}
