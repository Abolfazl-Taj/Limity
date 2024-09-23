import { useContext } from "react"
import Contact from "../../Components/Contact/Contact"
import Footer from "../../Components/Footer/Footer"
import Header from "../../Components/Header/Header"
import Join from "../../Components/Join/Join"
import Navbar from "../../Components/Navbar/Navbar"
import "./Home.css"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {ThemeContext} from '../../App'
const Home = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Home  ${theme} `}>
        <Navbar    />
        <Header    />
        <Contact/>
        <Join/>
        <Footer/>
    </div>
  )
}
AOS.init({
  duration: 500,
  mirror: false,
  easing: "ease-in-out"
});

export default Home