import React from "react"
import {makeStyles} from "@mui/styles"

const useStyle=makeStyles({
     nav:{
          marginTop:10
     }
})



const Navbar = () =>{
     const style = useStyle()
     return(
          <div className={style.nav}>
               <h1>Hello Ticketing</h1>
          </div>
     )
}

export default Navbar;