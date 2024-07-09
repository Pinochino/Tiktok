import classNames from 'classnames/bind';
import style from './Accounts.module.scss';
import PropTypes from 'prop-types';

import { FaRegCheckCircle } from 'react-icons/fa';

const cx = classNames.bind(style);

function AccountItem() {
    return (
       <div>
            <div className={cx('account-item')}>
                <img
                    className={cx('avatar')}
                    alt="avatar"
                    src={`https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f9e050f8a1308b23b9c9937b9a2de8aa.jpeg?lk3s=a5d48078&nonce=2193&refresh_token=5880b4ca0db8106030f0301634788cd8&x-expires=1720702800&x-signature=VyB5tdVD%2FWgZsBg%2BiVHXA5hBRYI%3D&shp=a5d48078&shcp=81f88b70`}
                ></img>
                <div className={cx('item-info')}>
                    <p className={cx('nickname')}>
                        <strong>nguyenphuquoc</strong>
                        <FaRegCheckCircle className={cx('check')} />
                    </p>
                    <p className={cx('name')}>Anh Hung dep zai nhat tren doi</p>
                </div>
    
            </div>
               
       </div>
    );
}
AccountItem.propTypes = {};

export default AccountItem;
