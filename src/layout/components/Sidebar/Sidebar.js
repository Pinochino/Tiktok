import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import config from "~/config";
import { MenuItemSideBar, MenuSideBar } from "./Menu";

// import icons 
import { IoHomeOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";



const cx = classNames.bind(styles);
function Sidebar() {
    return <aside className={cx("wrapper")}>
        <MenuSideBar>
            <MenuItemSideBar title="For You" to={config.routes.home} icon={<IoHomeOutline className='icon' />}/>
            <MenuItemSideBar title="Following" to={config.routes.following} icon={<RiLiveLine className='icon'/>}/>
            <MenuItemSideBar title="LIVE" to={config.routes.profile} icon={<FaUserGroup  className='icon'/>}/>
        </MenuSideBar>
    </aside>
}

export default Sidebar;