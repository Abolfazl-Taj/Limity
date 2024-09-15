import "./Comment.css";
import pic from '../../Assets/Pics/comment.png'
import Slider from "./Slider/Slider";

const Comment = () => {
  return (
    <div className="Comment "  data-aos="zoom-in-left" >
        <div className="Comment_Texts">
            <h6 className="Comment_Cert">گواهینامه ها</h6>
            <h2 className="Comment_Header">مشتری ها درباره ما چه می گویند؟</h2>
                <Slider/>
        </div>
        <div className="Comment_Pic">
            <img src={pic} alt="Comment_Pic" />
        </div>


    </div>
  )
}

export default Comment