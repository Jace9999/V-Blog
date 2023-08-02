import React from 'react'
import Logo from "../image/logo.png"

export const Footer = () => {
  return (
    <footer>
        <img src={Logo} alt=""/>
        <span>
            Made with Jace and <b>React.js</b>
        </span>
    </footer>
  )
}
