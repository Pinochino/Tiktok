//Layouts
import { HeaderOnly } from "../components/Layout";

import Upload from "../pages/Upload";
import Following from "../pages/Following";
import Home from "../pages/Home";
import Profile from "../pages/Profile";




// public  route để cho những trang không cần đăng nhập 
const publicRoutes = [
   { path: '/', component: Home},
   { path: '/following', component: Following},
   { path: '/profile', component: Profile},
   { path: '/upload', component: Upload, layout: HeaderOnly},


]

// public  route để cho những trang  cần đăng nhập thì nó sẽ tự động chuyển hướng mình đến trang đăng nhập

const privateRoutes = []

export { publicRoutes, privateRoutes }
