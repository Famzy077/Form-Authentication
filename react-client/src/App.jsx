import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Signup from './Component/Signup'
import ErrorPage from './Component/ErrorPage'
import Login from './Component/Login'
import Home from './Component/home'
import Forgotpass from './Component/Forgotpass'
import ResetPass from './Component/Resetpass'
const App = () => {
  const router = createBrowserRouter([
    {
      path:'/signup',
      element: <Signup/>
    }, 
    {
      path: '/Login',
      element: <Login/>
    },
    {
      path: '/',
      element: <Home/>,
      errorElement: <ErrorPage/>
    },
    {
      path: '/forgot-password',
      element: <Forgotpass/>
    },
    {
      path: '/resetPassword/:token',
      element: <ResetPass/>
    }
  ])
  return(
    <RouterProvider router={router}/>
  )
}
export default App