import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import News from "../../Components/News/News"
import "./Blog_Page.css"

const Blog_Page = () => {
  return (
    <div className="Blog_Page">
        <Navbar/>
        <News/>
        <Footer/>
    </div>
  )
}

export default Blog_Page