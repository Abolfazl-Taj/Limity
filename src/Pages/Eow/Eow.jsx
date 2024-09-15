import "./Eow.css"
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import Projects from '../../Components/Projects/Projects'
import Comment from '../../Components/Comment/Comment'

const Eow = () => {
  return (
    <div className='Eow'>
        <Navbar/>
        <Projects/>
        <Comment/>
        <Footer/>
    </div>
  )
}

export default Eow