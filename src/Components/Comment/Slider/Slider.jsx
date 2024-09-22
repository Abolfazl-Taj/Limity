import { FaQuoteRight } from "react-icons/fa";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import './Slider.css';

// import required modules
import {EffectFade ,Navigation , Autoplay} from 'swiper/modules';
import Data_SLider_Comment from '../../../Assets/Data/Data_SLider_Comment';
import { useContext } from "react";
import { ThemeContext } from "../../../App";

export default function Slider() {
  const [theme] = useContext(ThemeContext)
  return (
    <>
      <Swiper navigation={true} modules={[Autoplay ,EffectFade ,Navigation]} className="mySwiper Comment_Slider"
    loop={true}
    grabCursor={true}
    effect={'fade'}
    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      >
        {Data_SLider_Comment.map(data=>{
            return(
                <SwiperSlide className={`swiper-slide Comment_Slide ${theme} `}>
                        <h2 className="Comment_Quet">  <i><FaQuoteRight/></i>  </h2>
                        <p className="Comment_Desc">{data.comment}</p>
                        <div className="Comment_Autor">
                            <p className="Autor_Name">{data.author}</p>
                            <p className="Autor_Job">{data.job}</p>
                        </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </>
  );
}
