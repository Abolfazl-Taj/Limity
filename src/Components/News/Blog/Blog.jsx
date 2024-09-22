import { Link } from "react-router-dom"
import "./Blog.css"
import { useContext } from "react"
import { ThemeContext } from "../../../App"

const Blog = (data) => {
  const [theme] = useContext(ThemeContext)
  return (
    <div className={`Blog  ${theme} `}>
        <img src={data.pic} alt="" />
        <div className="Blog_Text">
        <h6 className="Blog_Author">{data.autor}</h6>
        <h2 className="Blog_Header">{data.header}</h2>
        <p className="Blog_Desc">{data.desc}</p>
        <div className="Blog_More">
            <p className="Blog_Date">{data.date}</p>
            <p className="Blog_ReadMore"> <Link to={`/Blog/${data.id}`}>بیشتر بخوانید </Link>  </p>
        </div>
        </div>
    </div>
  )
}

export default Blog