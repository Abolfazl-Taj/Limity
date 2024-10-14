import "../Aboutus.css"
import dot from '../../../Assets/Pics/Dot.png'
const AList = ({data}) => {
  return (
    <li className="Aboutus_Item">
            <span>{data}</span>
            <img src={dot} alt=""  />
    </li>
  )
}

export default AList