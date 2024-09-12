import "./Navbar.css"
import bluelogo from '../../Assets/Pics/Blue_Whitelogo.png'
import Data_Navbar_Items from "../../Assets/Data/Data_Navbar_Items"
import { RxHamburgerMenu } from "react-icons/rx";

import {NavLink} from 'react-router-dom'
import { useEffect, useState } from "react"
const Navbar = () => {
  let [isscroll , setIsscroll] = useState(false)
  let [isopen , setIsopen] = useState(false)
  document.addEventListener("scroll" , ()=>{
    document.documentElement.scrollTop >= 150 ? setIsscroll(true) :setIsscroll(false)
  })


  const clickhandler = ()=>{    
    isopen ? setIsopen(false) : setIsopen(true)
  }
  useEffect(()=>{

  } , [isopen])


  return (
    <div className={isscroll ? 'Navbar   Navfix' : "Navbar"}>
            <div className="NavbarContiner continer">
                <div className="Navbar_Logo">
                    <img src={bluelogo} alt="" />
                </div>
                <ul className={isopen ? "Navbar_List show" :"Navbar_List"}>
                    {Data_Navbar_Items.map(item=> <NavLink to={`${item.id}`}  className="Navbar_Item"   >{item.name}</NavLink>  )}
                </ul>
                  <button className="HameMenu"  onClick={clickhandler} > <RxHamburgerMenu/>  </button>
            </div>

    </div>
  )
}

export default Navbar