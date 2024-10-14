import Data_Goals_Items from "../../Assets/Data/Data_Goals_Items";
import Goal from "./Goal/Goal";
import "./Goals.css";

const Goals = () => {

  return (
    <div class="Goals continer"   data-aos="zoom-in-left" >
        {Data_Goals_Items.map(data=> <Goal  {...data}  />)}
    </div>
  )
}

export default Goals