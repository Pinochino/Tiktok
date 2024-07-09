import classNames from "classnames/bind";
import style from './Accounts.module.scss';
import PropTypes from 'prop-types';
import AccountItem from "./AccountItem";


const cx = classNames.bind(style);

function Accounts({heading}) {
    return (
    <div className={cx('wrapper')}>
        <span className={cx('heading')}>{heading}</span>
        <div className="body">
            <AccountItem />
            <AccountItem />
            <AccountItem />
            <p className={cx('more-btn')}>See all...</p>
        </div>
    </div> );
}

Accounts.propTypes = {
    heading: PropTypes.string.isRequired,
    
}

export default Accounts;