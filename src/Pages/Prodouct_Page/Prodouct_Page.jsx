import "./Prodouct_Page.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Prodcout from '../../Components/Prodcout/Prodcout'
import Skills from '../../Components/Skills/Skills'

const Prodouct_Page = () => {
  return (
    <div className="Prodouct_Page"> 
        <Navbar/>
        <Prodcout/>
        <Skills/>
        <Footer/>
    </div>
  )
}

export default Prodouct_Page