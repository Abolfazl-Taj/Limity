import "./Contact.css"
import { GiDirectionSigns } from "react-icons/gi";
import { IoMailSharp } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { TfiWorld } from "react-icons/tfi";
import { ThemeContext } from "../../App";
import { useContext } from "react";
const Contact = () => {
    const [theme] = useContext(ThemeContext)
        const datas= [
            {text:"ایران، تهران، شهرک غرب، بلوار ایران زمین، برج آسمان" , icon:<GiDirectionSigns/>},
            {text:"021888999666" , icon:<FaPhoneFlip/>},
            {text:"support@limty.com" , icon:<IoMailSharp/>},
            {text:"www.limty.com" , icon:<TfiWorld/>}
        ]
  return (
    <div className={`Contact ${theme} `}   data-aos="zoom-in-right">
        <div className={`continer ${theme} `}>
            <div className="Contact_Texts">
            <h1 className="Prodcout_Header">ارتباط باما</h1>
            <p className="Prodcout_Desc">وب‌سایت‌های خبری و وبلاگ‌ها منابع رایج برای فیدهای وب هستند، اما فیدها نیز            </p>
            <p className="Prodcout_Desc Downtext">برای ارائه ساختارمند استفاده می‌شوند</p>

            </div>
                <div className="Contact_Content">
                    <div className="Contact_Info">
                        <div className="Info_Number">
                            <h6 className="Contact_Header">اطلاعات تماس</h6>
                            <p className="Contact_Desc">تماس مهمترین بخش کسب و کار است. اگر به اطلاعاتی در مورد کسب و کار ما نیاز دارید، با اطلاعات ارائه شده در زیر تماس بگیرید                            </p>
                            <div className="Info_Adress">
                            <h6 className="Contact_Header">دفتر شرکت</h6>
                                <ul className="Contact_List">
                                    {datas.map(data=> <li className="Contact_Item">
                                        <span>{data.text}</span> <i>{data.icon}</i>
                                    </li>  )}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="Contact_Form">
                        <input  placeholder="نام شما" type="text" className="Contact_Input" />
                        <input  placeholder="آدرس ایمیل" type="text" className="Contact_Input" />
                        <input  placeholder="موضوع" type="text" className="Contact_Input" />
                        <textarea placeholder="پیام شما" className="Contact_TextArea" ></textarea>
                        <button className="Help_Btn Moreinfo_Btn">ارسال پیام</button>
                    </div>
                </div>

        </div>


    </div>
  )
}

export default Contact