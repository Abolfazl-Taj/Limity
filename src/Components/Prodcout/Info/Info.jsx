import Data_Info_Items from "../../../Assets/Data/Data_Info_Items"
import CountUp from 'react-countup';
import "./Info.css"
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const Info = () => {
  const [theme] = useContext(ThemeContext)
  return (
    <div class={`Info`}>
            {Data_Info_Items.map(item=>{
                return(
                    <div className="Countup">
                        <span className="Border_Radius"></span>
                        <img src={item.icon} alt="Info Icon" className="Countup_Icon" />
                    <CountUp end={item.number}
                      duration={2.75}
                      enableScrollSpy={true}
                      className="Counter"
                      redraw={true}
                    />
                    <h2 className={`Countup_Header ${theme} `}>{item.header}</h2>
                    
                    
                    
                    
                    </div>
                )
            })}
    </div>
  )
}

export default Info