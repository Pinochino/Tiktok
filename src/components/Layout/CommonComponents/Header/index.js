import styles from './Header.module.scss';
// import Tippy from '@tippyjs/react';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css'; 
import classNames from 'classnames/bind';
import images from '../../../../assets/images/index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);


function Header() {
    return <header className={cx('wrapper')}>
        <div className={cx('inner')}>
            <div className={cx('logo')}>
                <img src={images.logo} alt='Tiktok' />
            </div>
            <div className={cx('search')}>
                <input placeholder='Search accounts and videos' spellCheck={false} />
                <button className={cx('clear')}>
                    <FontAwesomeIcon icon={faCircleXmark} />
                </button>
                {/* Loading */}
                <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                <Tippy 
                render={attrs => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        Ket qua
                    </div>
                )}>
                    <button className={cx('search-btn')} tabIndex={-1}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </Tippy>
            </div>
            <div>
                <div className={cx('actions')}>

                </div>
            </div>
        </div>
    </header>;
}

export default Header;