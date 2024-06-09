import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
    <div className={cx('Wrapper')}>
        <img className={cx('avatar')} src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ac6e26237f2fe824a49d34617c2b4fba.jpeg?lk3s=a5d48078&nonce=21545&refresh_token=ccae3a6660a056a552b610c145a26e0a&x-expires=1717977600&x-signature=hR%2FZor8SRgugXxkTvztlf1HcEjo%3D&shp=a5d48078&shcp=81f88b70' alt=''/>
        <div className={cx('infor')}>
            <h4 className={cx('name')}>
                <span>Pinochino</span>
                <FontAwesomeIcon className={cx('check')}icon={faCheckCircle}/>
            </h4>
            <span className={cx('username')}>Tran Dinh Hung</span>
        </div>
    </div>  
    );
}

export default AccountItem;