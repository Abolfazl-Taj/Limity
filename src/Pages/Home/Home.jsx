import Aboutus from "../../Components/Aboutus/Aboutus"
import Comment from "../../Components/Comment/Comment"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import Goals from "../../Components/Goals/Goals"
import Header from "../../Components/Header/Header"
import Help from "../../Components/Help/Help"
import Join from "../../Components/Join/Join"
import Navbar from "../../Components/Navbar/Navbar"
import News from "../../Components/News/News"
import Price from "../../Components/Price/Price"
import Prodcout from "../../Components/Prodcout/Prodcout"
import Projects from "../../Components/Projects/Projects"
import Skills from "../../Components/Skills/Skills"
import Team from "../../Components/Team/Team"
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
  return (
    <div className={`Home`}>
        <Navbar    />
        <Header    />
        <Goals/>
        <Aboutus/>
        <Prodcout/>
        <Projects/>
        <Skills/>
        <Team    />
        <Help/>
        <Price/>
        <News/>
        <Comment/>
        <Contact/>
        <Join/>
        <Footer/>
    </div>
  )
}
AOS.init({
  duration: 500,
  mirror: true,
  easing: "ease-in-out"
});

export default Home