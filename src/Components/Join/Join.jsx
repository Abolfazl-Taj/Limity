import "./Join.css"
import pic1 from '../../Assets/Pics/news-letter-img.png'
import pic2 from '../../Assets/Pics/bard1.png' 
import pic3 from '../../Assets/Pics/bard3.png' 

import { LiaTelegramPlane } from "react-icons/lia";
import { ThemeContext } from "../../App";
import { useContext } from "react";
const Join = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Join `}  data-aos="zoom-out-up">
        <div className="Join_Pic">
            <img src={pic1} alt="Letter" class="Mail"   />
            <img src={pic2} alt=""  class=" Bird Bird1"  /><img src={pic2} alt="" class=" Bird Bird2"   /> <img src={pic3} alt="" class=" Bird Bird3"   />
        </div>
        <div className="Join_Form">
                <h6 className={`Join_Header  ${theme}` }>فقط یک لحظه</h6>
                <h1 className={`Join_Heder  ${theme}` }>به خبرنامه ما بپیوندید!</h1>
                <p className={`Join_Desc  ${theme}` }>عضو خبرنامه ما شوید و از آخرین اخبار و آخرین محصولات ما به سرعت باخبر شوید.</p>
                <div className="Join_Sign">
                    <input type="text" className={`Join_Input ${theme} `} placeholder="آدرس ایمیل خود را وارد کنید" />
                    <button className={`Join_Btn ${theme} `}>    <i> <LiaTelegramPlane/> </i>  </button>
                </div>
        </div>

    </div>
  )
}

export default Join