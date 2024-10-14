import './Help.css';
import pic1 from '../../Assets/Pics/Help.png'
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Help = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Help ${theme}_Help `}   data-aos="zoom-in-left">
        <div className="continer">
                <div className="Help_Pic">
                    <img src={pic1} alt="Help_Picture" />
                </div>
                <div className="Help_Text">
                    <h1 className="Help_Header">یه وب سایت احتیاج دارید؟</h1>
                    <p className="Help_Desc">اگر می خواهید یک وب سایت جدید برای کسب و کار خود ایجاد کنید، همین امروز با ما تماس بگیرید. ما شما را برای ارائه همه نوع ایجاد کرده ایم</p>
                    <button className="Help_Btn Moreinfo_Btn">ارتباط با ما</button>
                </div>
        </div>
        <span  className=' Ball Ball1' ></span><span  className=' Ball Ball2' ></span><span  className=' Ball Ball3' ></span><span  className=' Ball Ball4' > </span>
        <span className="Squire Squire1 "></span><span className="Squire Squire2 "></span><span className="Squire Squire3 "></span><span className="Squire Squire4 "></span> <span className="Squire Squire5 "></span><span className="Squire Squire6 "></span><span className="Squire Squire7 "></span>
    </div>
  )
}

export default Help