import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Register = () => {
  const [info,setInfo] = useState({
    username:"", email:"", password:""
  })

  const handleChange =e =>{
    setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  console.log(info)

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" name="username" placeholder='username' onChange={handleChange}/>
        <input type="text" name="email" placeholder='email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <button>Login</button>
        <p>This is an error</p>
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>

    </div>
  )
}
