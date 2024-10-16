import {Link} from 'react-router-dom'

const ErrorPage = () => {
  return (
    <div>
        <h1><span>404</span> Page Not Found</h1>
    <Link to={'/'}>Go Back To Home Page 👈</Link>
    </div>
  )
}

export default ErrorPage