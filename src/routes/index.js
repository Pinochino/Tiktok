// Layouts
import { HeaderOnly } from "../components/Layout";


// Pages
import Upload from "../pages/Upload";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";


// public  route để cho những trang không cần đăng nhập 
const publicRoutes = [
   { path: '/', component: Home},
   { path: '/following', component: Following},
   {path: '/@:nickname', component: Profile},
   { path: '/upload', component: Upload, layout: HeaderOnly},
   { path: '/search', component: Search, layout:null},
]

// public  route để cho những trang  cần đăng nhập thì nó sẽ tự động chuyển hướng mình đến trang đăng nhập
const privateRoutes = []

export { publicRoutes, privateRoutes }
