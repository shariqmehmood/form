// All Coponents
import Signup from "../Pages/Signup/index"
import Home from "../Pages/Home/index"
import Navbar from "../Pages/Navbar/index"
import Login from "../Pages/Login/index"

// All Paths
export const SIGNUPPATH = "/"
export const LOGINPATH ="/Login"
export const NAVBARPATH = "/Navbar"
export const HOMEPATH = "/Home"



export default [
 {
   path:LOGINPATH,
   component:Login
 },
  {
    path: SIGNUPPATH,
    component: Signup
  },
  {
    path: HOMEPATH,
    component: Home
  },
  {
    path: NAVBARPATH,
    component: Navbar
  }
]
