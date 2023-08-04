import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import axios from "axios"

export const Login = () => {
  const [info,setInfo] = useState({
    username:"", password:""
  })

  const [error, setError] = useState(null)

  const navigate = useNavigate();

  const handleChange =e =>{
    setInfo(prev=>({...prev,[e.target.name]:e.target.value}))
  }

  const handleSubmit = async e =>{
    e.preventDefault()
    try{
      await axios.post("/auth/login", info)
      navigate("/")
    }catch(err){
      setError(err.response.data)
    }
  }

  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" name="username" placeholder='username' onChange={handleChange}/>
        <input type="password" name="password" placeholder='password' onChange={handleChange}/>
        <button onClick={handleSubmit}>Login</button>
        {error && <p>{error}</p>}
        <span>Don't you have an account? <Link to="/register">Register</Link></span>
      </form>

    </div>
  )
}
