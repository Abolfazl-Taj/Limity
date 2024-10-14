import "./Eow.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Projects from '../../Components/Projects/Projects'
import Comment from '../../Components/Comment/Comment'
import { useContext } from "react"
import { ThemeContext } from "../../App"

const Eow = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Eow ${theme} `} >
        <Navbar/>
        <Projects/>
        <Comment/>
        <Footer/>
    </div>
  )
}

export default Eow