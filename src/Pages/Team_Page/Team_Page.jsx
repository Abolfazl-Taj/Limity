import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import "./Team_Page.css"
import Team from "../../Components/Team/Team"
import { useContext } from "react"
import { ThemeContext } from "../../App"
const Team_Page = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Team_Page  ${theme} `}>
        <Navbar/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Team_Page