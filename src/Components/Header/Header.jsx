import "./Header.css";
import pic from '../../Assets/Pics/Hereimg.png'
import playbtn from '../../Assets/Pics/play.png'

const Header = () => {
  return (
    <div className='Header'   data-aos="zoom-in" >
        <div className="Header_Continer">
        <div className="Header_Left">
            <img src={pic} alt="HeroImage" />
        </div>
        <div className="Header_Right">
            <h1 class='Header_Topic'>باماخلاقیت و</h1>
            <h1 class='Header_Topic Header-Topic2   '>نوآوری را تجربه کنید</h1>
            <p className="Header_Desc">فرآیند ساخت و اصلاح مدل کسب و کار</p>
            <p className="Header_Desc">     . نوآوری مدل کسب و کار نیز نامیده می شود </p>
            <div className="Header_Buttons">
                <button className="Header_Btn">بیشتربخوانید</button>
                <button className="Header_Btn WatchVideo">
                    <img src={playbtn} alt="playbutton_icon" />
                    <span>تماشای ویدیو</span>

                </button>
            </div>
        </div>
        </div>
    </div>
  )
}



export default Header