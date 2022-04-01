import React from 'react'
import { BrowserRouter,  Routes, Route } from "react-router-dom";
import NavigationArray from "../Navigation/paths"
const Navigation = () => {

  return (
    
    <BrowserRouter>
      <Routes>
        {NavigationArray.map((route,index)=>{
          return(
            <Route key={index} path={route.path} element={<route.component/>} />

          )
        })}
      </Routes>
    </BrowserRouter>
  )
}

export default Navigation