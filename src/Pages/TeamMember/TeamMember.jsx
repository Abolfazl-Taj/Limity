import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Data_Team_Info from '../../Assets/Data/Data_Team_Info'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import './TeamMember.css'
import { ThemeContext } from '../../App'
const TeamMember = () => {
  const [theme] = useContext(ThemeContext)
    const teamid =  useParams().id
    let [data, setData] = useState({})
    useEffect(()=>{
       setData(Data_Team_Info.find(item=> Number(teamid) === item.id))
    }, [])
  return (
    <div className={`Team_Page ${theme} `}>
        <Navbar/>
        <div className={`Team_Member ${theme}`} data-aos="zoom-in"data-aos-duration="500" data-aos-easing="ease-in-sine" >
            <img src={data.pic} alt="Team_Member" className='TeamM_Pic' />
            <div className="TeamM_Text">
                <h1 className="TeamM_Name">{data.head}</h1>
                <h6 className="TeamM_Job">{data.desc}</h6>
                <p className="TeamM_Desc">
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،.
                 و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است،
                 و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
                ، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد،
                 تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
                 در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، 
                و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی،
                 و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default TeamMember