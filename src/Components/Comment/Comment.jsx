import "./Comment.css";
import pic from '../../Assets/Pics/comment.png'
import Slider from "./Slider/Slider";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Comment = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Comment  ${theme} `}  data-aos="zoom-in-left" >
        <div className="Comment_Texts">
            <h6 className={`Comment_Cert ${theme} `}>گواهینامه ها</h6>
            <h2 className={`Comment_Header ${theme} `}>مشتری ها درباره ما چه می گویند؟</h2>
                <Slider/>
        </div>
        <div className="Comment_Pic">
            <img src={pic} alt="Comment_Pic" />
        </div>


    </div>
  )
}

export default Comment