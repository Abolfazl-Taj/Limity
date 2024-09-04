import Data_Pice_Item from "../../Assets/Data/Data_Pice_Item"
import Holder from "./Holder/Holder"
import "./Price.css"

const Price = () => {
  return (
    <div class="Price continer">
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