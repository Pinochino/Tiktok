import classNames from 'classnames/bind';
import styles from './AccountPreview.module.scss';
import Button from '~/components/Button';
import { FaRegCheckCircle } from 'react-icons/fa';


const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
           <div className={cx('header')}>
                <img
                    className={cx('avatar')}
                    src={`https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/f9e050f8a1308b23b9c9937b9a2de8aa.jpeg?lk3s=a5d48078&nonce=2193&refresh_token=5880b4ca0db8106030f0301634788cd8&x-expires=1720702800&x-signature=VyB5tdVD%2FWgZsBg%2BiVHXA5hBRYI%3D&shp=a5d48078&shcp=81f88b70`}
                    alt="avatar"
                />
                <Button className={cx('follow-btn')} primary>Following</Button>
           </div>
            <div className={cx('body')}>
            <p className={cx('nickname')}>
                            <strong>nguyenphuquoc</strong>
                            <FaRegCheckCircle className={cx('check')} />
                        </p>
                        <p className={cx('name')}>Anh Hung dep zai nhat tren doi</p>
            <p className={cx('analytics')}>
                <strong className={cx('value')}>8.2M </strong>
                <span className={cx('label')}>Followers</span>
                <strong className={cx('value')}>288.2M </strong>
                <span className={cx('label')}>Likes</span>
            </p>
            </div>

        </div>
    );
}

export default AccountPreview;
