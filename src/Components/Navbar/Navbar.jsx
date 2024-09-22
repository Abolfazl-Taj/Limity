import "./Navbar.css"
import bluelogo from '../../Assets/Pics/Blue_Whitelogo.png'
import darklogo from '../../Assets/Pics/dark_Logo.png'
import Data_Navbar_Items from "../../Assets/Data/Data_Navbar_Items"
import { RxHamburgerMenu } from "react-icons/rx";
import { FaMoon  , FaSun} from "react-icons/fa";

import {NavLink} from 'react-router-dom'
import { useContext, useEffect, useState } from "react"
import {ThemeContext} from '../../App'
const Navbar = () => {
  const  [theme , setTheme] = useContext(ThemeContext)
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
  const ThemeHandler = ()=>{
     theme ==="light"? setTheme("dark") : setTheme("light")
  }

  return (
    <div className={isscroll ? `Navbar   Navfix ${theme}`   : `Navbar  ${theme} `}>
            <div className="NavbarContiner continer">
                <div className="Navbar_Logo">
                    <img src={theme === "dark" ? darklogo : bluelogo} alt="" />
                </div>
                <i  className={theme === "light"  ? "LightTheme" : "DarkThem"}  onClick={ThemeHandler} >
                {
                      theme === "light"  ? <FaSun/> : <FaMoon/>
                }
                </i>
                <ul className={isopen ? "Navbar_List show" :"Navbar_List"}>
                    {Data_Navbar_Items.map(item=> <NavLink to={`${item.id}`}  className={`Navbar_Item ${theme}`}   >{item.name}</NavLink>  )}
                </ul>
                  <button className="HameMenu"  onClick={clickhandler} > <RxHamburgerMenu/>  </button>
            </div>

    </div>
  )
}

export default Navbar