import React, { useState } from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import axios from "axios"

export const Register = () => {
  const [info,setInfo] = useState({
    username:"", email:"", password:""
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleChange =e =>{
    setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async (e) =>{
    e.preventDefault()
    try{
      await axios.post("localhost:8800/api/auth/register", info)
      navigate("/login")
    }catch(err){
      console.log(err)
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Register</h1>
      <form>
        <input type="text" name="username" placeholder='username' onChange={handleChange}/>
        <input type="text" name="email" placeholder='email' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Register</button>
        {error && <p>{error}</p>}
        <span>Do you have an account? <Link to="/login">Login</Link></span>
      </form>

    </div>
  )
}
