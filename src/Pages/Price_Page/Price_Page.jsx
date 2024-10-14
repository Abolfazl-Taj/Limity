import "./Price_Page.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Help from "../../Components/Help/Help"
import Price from "../../Components/Price/Price"
import { useContext } from "react"
import { ThemeContext } from "../../App"

const Price_Page = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Price_Page ${theme} `}>
        <Navbar/>
        <Help/>
        <Price/>
        <Footer/>
    </div>
  )
}

export default Price_Page