import classNames from 'classnames/bind';
import images from '~/assets/images';
import styles from './Header.module.scss';
import {
    faCircleQuestion,
    faCoins,
    faEarthAfrica,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faRightFromBracket,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Tippy from '@tippyjs/react';
import Image from '~/components/Image';
import Button from '~/components/Button';
import Menu from '~/components/Proper/Menu';
import Search from '../Search';
import config from '~/config';

const cx = classNames.bind(styles);

const MENU_ITEM = [
    {
        icon: <FontAwesomeIcon icon={faEarthAfrica} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                // Add other languages as needed
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'jp',
                    title: 'Japan',
                },
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and Help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    // Handle Logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                // Handle change language
                break;
            default:
                break;
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@hoaa',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Setting',
            to: '/setting',
        },
        ...MENU_ITEM,
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok" />
                    </Link>
                </div>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <button className={cx('action-btn')}>
                        <MessageIcon />
                    </button>
                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 200]} content="Upload video" placement="bottom" hideOnClick=''>
                                <button className={cx('action-btn')}>
                                    <UploadIcon />
                                </button>
                            </Tippy>
                        
                            <button className={cx('action-btn', 'inbox-icon')}>
                                <InboxIcon />
                                <span>12</span>
                            </button>
                            <Menu items={userMenu} onChange={handleMenuChange}>
                                <Image
                                    className={cx('user-avatar')}
                                    src="https://avatars.githubusercontent.com/u/139600392?s=96&v=4"
                                    alt="username"
                                    fallback="https://fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                                />
                            </Menu>
                        </>
                    ) : (
                        <>
                            <Button text>Upload</Button>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    {!currentUser && (
                        <Menu items={MENU_ITEM} onChange={handleMenuChange}>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                        </Menu>
                    )}
                </div>
            </div>
        </header>
    );
}

export default Header;
