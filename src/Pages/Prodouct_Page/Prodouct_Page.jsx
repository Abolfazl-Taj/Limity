import "./Prodouct_Page.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Prodcout from '../../Components/Prodcout/Prodcout'
import Skills from '../../Components/Skills/Skills'
 import { ThemeContext } from "../../App"
import { useContext } from "react"
const Prodouct_Page = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Prodouct_Page   ${theme} `}> 
        <Navbar/>
        <Prodcout/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Prodouct_Page