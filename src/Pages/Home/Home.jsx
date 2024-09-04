import Aboutus from "../../Components/Aboutus/Aboutus"
import Comment from "../../Components/Comment/Comment"
import Goals from "../../Components/Goals/Goals"
import Header from "../../Components/Header/Header"
import Help from "../../Components/Help/Help"
import Navbar from "../../Components/Navbar/Navbar"
import News from "../../Components/News/News"
import Price from "../../Components/Price/Price"
import Prodcout from "../../Components/Prodcout/Prodcout"
import Projects from "../../Components/Projects/Projects"
import Skills from "../../Components/Skills/Skills"
import Team from "../../Components/Team/Team"
import "./Home.css"

const Home = () => {
  return (
    <div className={`Home`}>
        <Navbar/>
        <Header/>
        <Goals/>
        <Aboutus/>
        <Prodcout/>
        <Projects/>
        <Skills/>
        <Team/>
        <Help/>
        <Price/>
        <News/>
        <Comment/>
    </div>
  )
}

export default Home