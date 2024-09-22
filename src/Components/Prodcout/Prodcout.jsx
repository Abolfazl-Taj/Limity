import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import "./Prodcout.css"
import { Navigation} from 'swiper/modules';
import Data_Service_Items from '../../Assets/Data/Data_Service_Items';
import Info from './Info/Info';
import { useContext } from 'react';
import { ThemeContext } from '../../App';
const Prodcout = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div class={`Prodcout  ${theme} `} id='Prodouct'  data-aos="zoom-in-left" >
            <h1 className="Prodcout_Header">خدمات</h1>
            <p className="Prodcout_Desc">خدمات کسب و کار فعالیت هایی هستند که برخی موارد را ترکیب یا ادغام می کنند</p>
            <p className="Prodcout_Desc Downtext">خدمات پشتیبانی مورد نیاز در سطح سازمانی</p>
            <Swiper navigation={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={40}
            lazy={true}
            grabCursor={true}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 5,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 3,
                spaceBetween: 40,
              }
            }}



            modules={[Navigation]} className="mySwiper   Prodouct_Slider">
                {Data_Service_Items.map(data=>{
                    return(
                        <SwiperSlide   className={`swiper-slide Prodouct_Slid  ${theme} `}>
                            <img src={data.pic} alt="Service_Pic" />
                            <h1 className="Service_Header">{data.head}</h1>
                            <p className="Service_Desc">{data.desc}</p>
                        </SwiperSlide>                        
                    )
                })}
                        
      </Swiper>
        <Info/>
    </div>
  )
}

export default Prodcout