import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
const Forgotpass = () => {
    const [email, Setemail] = useState('')

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4000/auth/forgot-password', {
            email
        }).then(res => {
            if(res.data.status){
              alert('Check your email for reset password link')
              navigate('/login')
            }
        }).catch(err => console.log(err)
        )
    }
  return (
    <div className="contain">
      <div className="main-wrap">
      <div className="headText">
          <h1>Forgot Password</h1>
      </div>
      <form action="" onSubmit={HandleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" onChange={(e) => Setemail(e.target.value)} autoComplete='off' placeholder="Enter your email"/>
        </div>
        <div className="btn">
          <input type="submit" value='Forgot Password'/>
        </div>
        <p className="pForget">Remember your password? <Link to={'/login'}>Login</Link></p> 
      </form>
    </div>
    </div>
  )
}

export default Forgotpass