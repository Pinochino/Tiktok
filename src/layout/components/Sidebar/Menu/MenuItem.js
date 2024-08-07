import classNames from 'classnames/bind';
import styles from './MenuSideBar.module.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function MenuItemSideBar({ title, to, icon }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
                <span className='icon'>{icon}</span>
                <span className={cx('title')}>{title}</span>

        </NavLink>
    );
}

MenuItemSideBar.propTypes = {
    title: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    icon: PropTypes.node.isRequired,
};

export default MenuItemSideBar;
