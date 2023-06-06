import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home'
import Login from '../components/Login/Login'
import SignUp from '../components/Signup/SignUp'
import RoomDetails from '../Pages/RoomDetails'
import PrivateRoute from './PrivateRoute'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/room/:id',
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      }
    ]
  },
  {
    path:'/login',
    element:<Login></Login>
  },
  {
    path:'/signup',
    element:<SignUp></SignUp>
  }
])
