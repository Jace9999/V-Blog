import React from 'react'

export const Login = () => {
  return (
    <div className='auth'>
      <h1>Login</h1>
      <form>
        <input type="text" placeholder='username'/>
        <input type="password" placeholder='password'/>
        <button>Login</button>
        <span>Don't you have an account? <Link to="/Register">Register</Link></span>
      </form>

    </div>
  )
}
