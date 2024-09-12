import Data_News_Item from '../../Assets/Data/Data_News_Item'
import Blog from './Blog/Blog'
import './News.css'

const News = () => {
  return (
    <div class="News"  data-aos="zoom-in-left" >
        <div className="continer">
        <h1 className="Prodcout_Header">آخرین اخبار </h1>
            <p className="Prodcout_Desc">وب‌سایت‌ها و وبلاگ‌های خبری منابع رایج برای فیدهای وب هستند، اما فیدها </p>
            <p className="Prodcout_Desc Downtext">برای ارائه ساختاریافته نیز استفاده می‌شوند</p>

            <div className="Blogs">
            {Data_News_Item.map(data=> <Blog {...data} />)}
            </div>
        </div>
    </div>
  )
}

export default News
