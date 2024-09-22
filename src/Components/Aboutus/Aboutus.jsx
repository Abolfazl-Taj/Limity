import React, { useContext } from 'react'
import Data_About_Items from '../../Assets/Data/Data_About_Items'
import AList from './AList/AList'
import aboutuspic from '../../Assets/Pics/AboutImg.png'
import { ThemeContext } from '../../App'
const Aboutus = () => {
  const [theme] = useContext(ThemeContext)
  return (
      <div class={`Aboutus continer   ${theme} `}    data-aos="zoom-in-right" >
        <div className="Aboutus_Text">
            <h6 className="Aboutus_Header">درباره ما</h6>
            <h2 className={`Aboutus_Topic  ${theme} `} >     ما یک تیم کاری عالی برای رویای تجاری شما هستیم               </h2>
            <p className="Aboutus_Desc">  کسب و کار فعالیتی است که برای امرار معاش یا کسب درآمد انجام می شود. یک تجارت با دیگری معامله تجاری انجام می دهد. یک نهاد تجاری، نهادی است که بر اساس یک شرکت تشکیل شده و اداره می شود     </p>
            <ul className="Aboutus_List">
              {Data_About_Items.map(data => <AList  data={data}  />)}
            </ul>
            <button class="Moreinfo_Btn">اطلاعات بیشتر</button>
        </div>
        <div className="Aboutus_Pic">
          <img src={aboutuspic} alt="" />
        </div>
    </div>
  )
}

export default Aboutus