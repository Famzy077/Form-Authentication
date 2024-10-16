// import React from 'react'
import { useState } from 'react'
import './SignUp.css'
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'

const Signup = () => {
  const [username, Setusername] = useState('')
  const [email, Setemail] = useState('')
  const [password, Setpassword] = useState('')

  const navigate = useNavigate()
  const HandleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:4000/auth/signup', {
      username,
      email,
      password
    })
    .then(res =>{
      if(res.data.status){
        navigate('/login') 
      }
    })
    .catch(err => {
      console.error(err)
    })
  }
  return (
    <div className="contain">
      <div className="main-wrap">
      <div className="headText">
          <h1>Welcome to JoyVinco <br /> please sign up to continue</h1>
      </div>
      <form action="" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="fname">User Name:</label>
          <input type="text" onChange={(e) => Setusername(e.target.value)} placeholder="Enter your user name"/>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email"/>
        </div>
        <div className="special">
          <label htmlFor="gender">Gender:</label> <br/>
          <label className="labe_" htmlFor="male">Male</label>
          <input type="radio" name="gender"/>
          <label className="labe_" htmlFor="female">Female</label>
          <input type="radio" name="gender"/>
        </div>
        <div>
          <label htmlFor="pass">Password:</label>
          <input type="password" onChange={(e) => Setpassword(e.target.value)} placeholder="**********"/>
        </div>
        <div className="special">
          <label className='link' htmlFor="terms"><Link to={''}>Terms and Condition</Link></label>
          <input type="checkbox" />
        </div>
        <div className="btn">
          <input type="submit"/>
        </div>
        <p>Have an account? <Link to={'/login'}>Login</Link></p> 
      </form>
    </div>
    </div>
  )
}

export default Signup