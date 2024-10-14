import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import "./Team.css"
import Data_Team_Info from '../../Assets/Data/Data_Team_Info';
import { FaTwitter , FaLinkedin  , FaInstagram , FaGithub  } from "react-icons/fa";
import {Link} from "react-router-dom"
import { useContext } from 'react';
import { ThemeContext } from '../../App';

const Team = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div class={`Team  ${theme} `}   data-aos="zoom-in-right">
            <h1 className="Prodcout_Header">تیم خلاق</h1>
            <p className="Prodcout_Desc">اعضای تیم باید یاد بگیرند که چگونه به یکدیگر کمک کنند. یک تیم با یک حس قوی</p>
            <p className="Prodcout_Desc Downtext"> تر از مجموعه ای از افراد می شود</p>
            <Swiper navigation={true}
            slidesPerView={4}
            loop={true}
            spaceBetween={40}
            lazy={true}
            grabCursor={true}
            modules={[Navigation]} className={`mySwiper   Prodouct_Slider ${theme} `}>
                {Data_Team_Info.map(data=>{
                    return(
                        <SwiperSlide   className={`swiper-slide Prodouct_Slid Team_Slide  ${theme} `}>
                          <Link to={`/Team/${data.id}`}  className='Team_To'>
                          <img src={data.pic} alt="Service_Pic" />
                            <h1 className="Service_Header">{data.head}</h1>
                            <p className="Service_Desc">{data.desc}</p>
                            <div className="Team_Socials">
                                <i><FaGithub/></i><i><FaLinkedin/></i><i><FaInstagram/></i><i><FaTwitter/></i>
                            </div>
                          </Link>
                        </SwiperSlide>                        
                    )
                })}
                        
      </Swiper>





    </div>
  )
}

export default Team