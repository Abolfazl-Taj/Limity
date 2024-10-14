import "./NotFound.css"
import notfoundpic from '../../Assets/Pics/NotFound.png'
import { Link } from "react-router-dom"
const NotFound = () => {
  return (
    <div className='NotFound'>
                    <div className="NotFound_Continer"  data-aos="zoom-out-down" data-aos-duration="500" >
                    <img src={notfoundpic} alt="" />
                    <div className="NotFound_Text">
                            <h1 className="Notfound_Header">
                                صفحه ی مورد نظر پیدا نشد  !
                            </h1>
                            <Link to="/" className="NotFound_Btn">  بازگشت به صفحه ی اصلی </Link>
                    </div>
                    </div>
    </div>
  )
}

export default NotFound