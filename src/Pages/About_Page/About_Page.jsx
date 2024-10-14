import Aboutus from "../../Components/Aboutus/Aboutus"
import Footer from "../../Components/Footer/Footer"
import Goals from "../../Components/Goals/Goals"
import Navbar from "../../Components/Navbar/Navbar"
import "./About_Page.css"
import { ThemeContext } from "../../App"
import { useContext } from "react"
const About_Page = () => {
  const [theme] = useContext(ThemeContext)

  return (
    <div className={`About_Page   ${theme} `} data-aos="zoom-in"data-aos-duration="500" data-aos-easing="ease-in-sine">
        <Navbar/>
            <Goals/>
            <Aboutus/>
        <Footer/>
    </div>
  )
}

export default About_Page