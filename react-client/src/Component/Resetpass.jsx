import { Link, useNavigate, useParams } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"

const ResetPass = () => {
    const [password, Setpassword] = useState('')
    const {token} = useParams()

    const navigate = useNavigate()
    const HandleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4000/auth/resetPassword/'+token, {
            password
        }).then(res => {
            if(res.data.status){
                navigate('/login')
            }
            console.log(res.data)
        }).catch(err => console.log(err)
        )
    }
  return (
    <div className="contain">
      <div className="main-wrap">
      <div className="headText">
          <h1>Reset Password</h1>
      </div>
      <form action="" onSubmit={HandleSubmit}>
        <div>
            <label htmlFor="pass">Password:</label>
            <input type="password" onChange={(e) => Setpassword(e.target.value)} placeholder="**********"/>
        </div>
        <div className="btn">
          <input type="submit" value='Reset Password'/>
        </div>
        {/* <p className="pForget">Remember your password? <Link to={'/login'}>Login</Link></p>  */}
      </form>
    </div>
    </div>
  )
}

export default ResetPass