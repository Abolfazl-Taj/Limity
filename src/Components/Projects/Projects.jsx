import { useContext } from "react"
import Data_Project_Imgs from "../../Assets/Data/Data_Project_Imgs"
import "./Projects.css"
import { ThemeContext } from "../../App"

const Projects = () => {
    const [theme] =useContext(ThemeContext)
  return (
        <div class={`Projects  ${theme}_P `}   data-aos="zoom-in-right">
        <div className="continer  ">
            <h1 className="Prodcout_Header Project_Header">آخرین پروژه ها</h1>
            <p className="Prodcout_Desc">آخرین پروژه های انجام شده ما برای اطلاع شما</p>
            <p className="Prodcout_Desc Downtext">حاصل سالها فعالیت و تجربه قرار داده شده</p>
            <div className="Pj_Imges">
                    {Data_Project_Imgs.map(data=>{
                        return(
                            <div className="Project_Images">
                                <img src={data.img} alt="" />

                                <div className="Project_Info">
                                    <div className="Info_Texts">
                                    <h1 className="Project_Heder">عنوان پروژه</h1>
                                    <p className="Project_Desc">{data.brand}</p>
                                    </div>
                                </div>

                            </div>
                        )
                    })}

            </div>
        </div>
    </div>
  )
}

export default Projects