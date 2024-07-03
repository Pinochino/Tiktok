// Layouts
import { HeaderOnly } from '~/layout';

// Pages
import Upload from "../pages/Upload";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Search from "../pages/Search";
import routes from '~/config/routes';
import config from '~/config';



// public  route để cho những trang không cần đăng nhập 
const publicRoutes = [
   { path: routes.home, component: Home},
   { path: routes.following, component: Following},
   {path: routes.profile, component: Profile},
   { path: routes.upload, component: Upload, layout: HeaderOnly},
   { path: routes.search, component: Search, layout:null},
]

// public  route để cho những trang  cần đăng nhập thì nó sẽ tự động chuyển hướng mình đến trang đăng nhập
const privateRoutes = []

export { publicRoutes, privateRoutes }
