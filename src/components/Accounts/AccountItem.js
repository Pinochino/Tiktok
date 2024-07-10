import classNames from 'classnames/bind';
import style from './Accounts.module.scss';
import PropTypes from 'prop-types';
import Tippy from '@tippyjs/react';

import { FaRegCheckCircle } from 'react-icons/fa';
import { Wrapper as PopperWrapper } from '~/components/Proper';
import AccountPreview from '../AccountItem/AccountPreview/AccountPreview';

const cx = classNames.bind(style);

function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive delay={[800, 0]} offset={[-25, 0]}  render={renderPreview} placement="bottom">
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
            </Tippy>
        </div>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
