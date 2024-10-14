import About_Page from "../Pages/About_Page/About_Page"
import Article_Page from "../Pages/Article_Page/Article_Page"
import Blog_Page from "../Pages/Blog_Page/Blog_Page"
import Eow from "../Pages/Eow/Eow"
import Home from "../Pages/Home/Home"
import NotFound from "../Pages/NotFound/NotFound"
import Price_Page from "../Pages/Price_Page/Price_Page"
import Prodouct_Page from "../Pages/Prodouct_Page/Prodouct_Page"
import Team_Page from "../Pages/Team_Page/Team_Page"
import TeamMember from "../Pages/TeamMember/TeamMember"

const Routes = [
    {path:"/" , element:<Home/>},
    {path:"/about" , element:<About_Page/>},
    {path:"/prodouct" , element:<Prodouct_Page/>},
    {path:"/eow" , element:<Eow/>},
    {path:"/Price" , element:<Price_Page/>},
    {path:"/Blog" , element:<Blog_Page/>},
    {path:"/Blog/:id" , element:<Article_Page/>},
    {path:"/Team/" , element:<Team_Page/>},
    {path:"/Team/:id" , element:<TeamMember/>},
    {path:"*" , element:<NotFound/>},
]

export default Routes
 