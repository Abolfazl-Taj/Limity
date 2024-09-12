import "./Footer.css"
import pic1 from '../../Assets/Pics/footer-logo.png'
import Data_Footer_Icons from '../../Assets/Data/Data_Footer_Icons'
const Footer = () => {
  return (
    <div className="Footer"   data-aos="zoom-out-up" >
        <div className="continer">
                <img src={pic1} alt="Footer-Logo" />
                <div className="Footer_Text">
                <p className="Prodcout_Desc">  ما می فهمیم و شما را در مسیر پیشرفت و توسعه راهنمایی و کمک خواهیم کرد.</p>
                <p className="Prodcout_Desc Downtext"> با قدرت و استفاده از تکنولوژی و تخصص متخصصین منتظر شما هستیم.</p>

                    <ul className="Footer_List">
                        {Data_Footer_Icons.map(data=>  <li className="Footer_Item"> <i>{data}</i>  </li>  )}
                    </ul>

                </div>

        </div>
    </div>
  )
}

export default Footer