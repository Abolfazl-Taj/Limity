import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import "./Prodcout.css"
import { Navigation} from 'swiper/modules';
import Data_Service_Items from '../../Assets/Data/Data_Service_Items';
import Info from './Info/Info';
const Prodcout = () => {
  return (
    <div class="Prodcout continer" id='Prodouct'>
            <h1 className="Prodcout_Header">خدمات</h1>
            <p className="Prodcout_Desc">خدمات کسب و کار فعالیت هایی هستند که برخی موارد را ترکیب یا ادغام می کنند</p>
            <p className="Prodcout_Desc Downtext">خدمات پشتیبانی مورد نیاز در سطح سازمانی</p>
            <Swiper navigation={true}
            slidesPerView={3}
            loop={true}
            spaceBetween={40}
            lazy={true}
            grabCursor={true}
            modules={[Navigation]} className="mySwiper   Prodouct_Slider">
                {Data_Service_Items.map(data=>{
                    return(
                        <SwiperSlide   className="swiper-slide Prodouct_Slid">
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