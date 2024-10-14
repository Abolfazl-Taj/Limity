import { useContext } from "react"
import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import News from "../../Components/News/News"
import "./Blog_Page.css"
import { ThemeContext } from "../../App"

const Blog_Page = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Blog_Page ${theme} `}>
        <Navbar/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Blog_Page