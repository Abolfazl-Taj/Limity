import '../Goals.css'
import { ThemeContext } from '../../../App'
import { useContext } from 'react'
const Goal = (data) => {
const [theme] = useContext(ThemeContext)
  return (
    <div class={`Goal   ${theme} `}>
        <span className="Border_Radius"></span>
        <img src={data.pic} class="Goal_Img" alt="" />
        <h1 className="Goal_Header">{data.header}</h1>
        <p className="Goal_Desc">{data.desc}</p>
    </div>
  )
}

export default Goal