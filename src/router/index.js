import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "../pages/Home"

const AppRouter=()=>{
     return(
          <BrowserRouter>
               <Routes>
                    <Route index path='/' element={<Home/>}></Route>
                    <Route  path='/projet/:projetId' element={<Home/>}></Route>
               </Routes>
          </BrowserRouter>

     )
}

export default AppRouter;