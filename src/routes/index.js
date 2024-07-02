// Layouts
import { HeaderOnly } from '../layout';
import routeConfig from '../config/routes';

// Pages
import Upload from "../pages/Upload";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";


// public  route để cho những trang không cần đăng nhập 
const publicRoutes = [
   { path: routeConfig.home, component: Home},
   { path: routeConfig.following, component: Following},
   {path: routeConfig.profile, component: Profile},
   { path: routeConfig.upload, component: Upload, layout: HeaderOnly},
   { path: routeConfig.search, component: Search, layout:null},
]

// public  route để cho những trang  cần đăng nhập thì nó sẽ tự động chuyển hướng mình đến trang đăng nhập
const privateRoutes = []

export { publicRoutes, privateRoutes }
