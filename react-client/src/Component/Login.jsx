// import React from 'react'
import Axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {

    const [email, Setemail] = useState('')
    const [password, Setpassword] = useState('')

    const navigate = useNavigate()

    Axios.defaults.withCredentials = true;
    const HandleSubmit = (e) => {
      e.preventDefault()
      Axios.post('http://localhost:4000/auth/login', {
        email,
        password
      })
      .then(res =>{
        if(res.data.status){
          navigate('/') 
        }
      })
      .catch(err => {
        console.log(err)
      })
    }

    // const HandleEmail = (e) => {
    //   Setemail(e.target.value)
    // }
    // const HandlePassword = (e) => {
    //   Setpassword(e.target.value)
    // }
  return (
      <div className="contain">
        <div className="main-wrap">
          <div className="headText">
              <h1>Welcome back to JoyVinco <br />Please Login</h1>
          </div>
          <form action="" onSubmit={HandleSubmit}>
            <div>
              <label htmlFor="email">Email:</label>
              <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email"/>
            </div>
            <div>
              <label htmlFor="pass">Password:</label>
              <input type="password" onChange={(e) => Setpassword(e.target.value)} placeholder="**********"/>
            </div>
            <div className="btn">
              <input type="submit" value='Login'/>
            </div>
            <main className='forgetpass'>
              <Link to={'/forgot-password'}>Forget password?</Link>
            </main>
            <p>Or create account? <Link to={'/signup'}>Sigup</Link></p> 
          </form>
        </div>
      </div>
  )
}

export default Login