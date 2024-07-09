import classNames from "classnames/bind";
import styles from './Sidebar.module.scss';
import config from "~/config";
import { MenuItemSideBar, MenuSideBar } from "./Menu";

// import icons 
import { FaHome } from "react-icons/fa";
import { RiLiveFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { IoHomeOutline } from "react-icons/io5";
import { RiLiveLine } from "react-icons/ri";
import Accounts from "~/components/Accounts";




const cx = classNames.bind(styles);
function Sidebar() {
    
    return <aside className={cx("wrapper")}>
        <MenuSideBar>
            <MenuItemSideBar title="For You" to={config.routes.home} icon={<IoHomeOutline className='icon' />} activeIcon={<FaHome className='active-icon' />}/>
            <MenuItemSideBar title="Following" to={config.routes.following} icon={<FaUserGroup className='icon'/>}/>
            <MenuItemSideBar title="LIVE" to={config.routes.upload} icon={<RiLiveLine  className='icon'/>} activeIcon={<RiLiveFill  className='active-icon'/>}/>
        </MenuSideBar>
        <Accounts heading="Suggested Accounts"/>
        <Accounts heading="Following Accounts"/>
    </aside>
}

export default Sidebar;