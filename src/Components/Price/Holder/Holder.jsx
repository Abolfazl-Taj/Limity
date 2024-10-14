import { useContext } from "react"
import "./Holder.css"
import { ThemeContext } from "../../../App"

const Holder = (data) => {
  const [theme] = useContext(ThemeContext)
  return (
    <div class={`Holder ${theme}_Holder `}>
        <img src={data.pic} alt="Plan-Picture" />
        <h6 className="Holder_Header">{data.header}</h6>
        <h2 className="Holder_Price Price_B">{data.price}</h2>
        <ul className="Holder_List">
            {data.list.map(text=> <li className="Holder_Item">{text}</li>   )}
        </ul>
        <button className={`${data.btnClass}`}>خرید پلن</button>
    </div>
  )
}

export default Holder