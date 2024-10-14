import { useParams } from "react-router-dom"
import "./Article_Page.css"
import { useContext, useEffect, useState } from "react"
import Data_News_Item from "../../Assets/Data/Data_News_Item"
import Navbar from "../../Components/Navbar/Navbar"
import Footer from "../../Components/Footer/Footer"
import { ThemeContext } from "../../App"

const Article_Page = () => {
    const [theme] = useContext(ThemeContext)
    const [data , setData] = useState({})
    const articleid = useParams().id
    useEffect(()=>{
        setData(Data_News_Item.find(item=> item.id === Number(articleid)))
    },[])

  return (
      <div className={`Article_Page ${theme} `}>
        <Navbar/>
        <div className="Article" data-aos="zoom-in"data-aos-duration="500" data-aos-easing="ease-in-sine">
            <div className="Article_Athuor">
                <h6 className="Article_Writer">{data.autor}</h6>
            </div>
            <div className="Article_Content">

                <img src={data.pic} alt="Article_Pic" className="Article_Pic" />
                <div className="Article_Text">
                        <h2 className="Article_Header">{data.header}</h2>
                        <p className="Articell_Desc">{data.desc}</p>
                        <p className="Articel_Desc">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
                </div>
                <div className="Article_Date"> <span>منتشر شده در:</span> {data.date}</div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Article_Page