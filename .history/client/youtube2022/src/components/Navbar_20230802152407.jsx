import React from 'react'
import Logo from "../image/logo.png"
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='container'>
            <div className='logo'><img src={Logo} alt=""></img></div>
            <div className='links'>
                <Link className='link'>ART</Link>
            </div>
        </div>
    </div>
  )
}
