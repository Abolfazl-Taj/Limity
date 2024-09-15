import "./Price_Page.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Help from "../../Components/Help/Help"
import Price from "../../Components/Price/Price"

const Price_Page = () => {
  return (
    <div className='Price_Page'>
        <Navbar/>
        <Help/>
        <Price/>
        <Footer/>
    </div>
  )
}

export default Price_Page