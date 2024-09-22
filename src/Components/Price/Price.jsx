import { useContext } from "react"
import Data_Pice_Item from "../../Assets/Data/Data_Pice_Item"
import Holder from "./Holder/Holder"
import "./Price.css"
import { ThemeContext } from "../../App"

const Price = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div class={`Price ${theme} `}  data-aos="zoom-in-right" >
    <h1 className="Prodcout_Header">قیمت ها</h1>
    <p className="Prodcout_Desc">استراتژی قیمت‌گذاری که در آن قیمت فروش با افزودن یک</p>
    <p className="Prodcout_Desc Downtext">مبلغ مشخص به هزینه واحد محصول تعیین می‌شود</p>
        <div className="Plans">
        {Data_Pice_Item.map(item=> <Holder {...item} />)}
        </div>
    </div>
  )
}

export default Price