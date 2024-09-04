import "./Navbar.css"
import bluelogo from '../../Assets/Pics/Blue_Whitelogo.png'
import Data_Navbar_Items from "../../Assets/Data/Data_Navbar_Items"
import {NavLink , Link} from 'react-router-dom'
import { useState } from "react"
const Navbar = () => {
  let [isscroll , setIsscroll] = useState(false)
  document.addEventListener("scroll" , ()=>{
    document.documentElement.scrollTop >= 150 ? setIsscroll(true) :setIsscroll(false)
  })
  return (
    <div className={isscroll ? 'Navbar   Navfix' : "Navbar"}>
            <div className="NavbarContiner continer">
                <div className="Navbar_Logo">
                    <img src={bluelogo} alt="" />
                </div>
                <ul className="Navbar_List">
                    {Data_Navbar_Items.map(item=> <NavLink to={`${item.id}`}  className="Navbar_Item"   >{item.name}</NavLink>  )}
                </ul>
            </div>

    </div>
  )
}

export default Navbar