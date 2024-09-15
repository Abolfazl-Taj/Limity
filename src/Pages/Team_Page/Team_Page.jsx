import Footer from "../../Components/Footer/Footer"
import Navbar from "../../Components/Navbar/Navbar"
import "./Team_Page.css"
import Team from "../../Components/Team/Team"
const Team_Page = () => {
  return (
    <div className="Team_Page">
        <Navbar/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Team_Page