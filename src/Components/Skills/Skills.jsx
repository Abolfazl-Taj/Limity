import { useContext } from 'react'
import Data_Skills_Info from '../../Assets/Data/Data_Skills_Info'
import pic from '../../Assets/Pics/skill-img.png'
import "./Skills.css"
import { ThemeContext } from '../../App'
const Skills = () => {
    const [theme] = useContext(ThemeContext)
  return (
    <div className={`Skills ${theme} `}  data-aos="zoom-in-left" >
        <div className="Skills_Texts">
            <h1 className="Skills_Header">تخصص و مهارت ها</h1>
            <p className="Skills_Desc">مهارت توانایی انجام یک کار با نتایج مشخص اغلب در مدت زمان معین است. مهارت معمولاً به محرک‌ها و موقعیت‌های محیطی خاصی برای ارزیابی بیشتر از حد کافی نیاز دارد.</p>
            <div className="Skill_Continer">
                {Data_Skills_Info.map(data=>{
                    return(
                        <div className="Skill">
                            <div className="Skill_Text">
                                <p className="Skill_Number">{data.num}</p>
                                <h1 className="Skill_Header">{data.header}</h1>
                            </div>
                            <div className="Skill Info">
                                <div className="Skill_Border"></div>
                                <div className={`${data.class}`}></div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="Skills_Pic">
                <img src={pic} alt="Skill Pic" />
        </div>
    </div>
  )
}

export default Skills