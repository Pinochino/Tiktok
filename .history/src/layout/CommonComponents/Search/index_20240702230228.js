// import styles from './Search.module.scss';
// import HeadlessTippy from '@tippyjs/react/headless';
// import classNames from 'classnames/bind';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
// import { useEffect, useRef, useState } from 'react';
// import { useDebounce } from '~/hooks';
// import AccountItem from '~/components/AccountItem';
// import { SearchIcon } from '~/components/Icons';

// import { Wrapper as PopperWrapper } from '../../../components/Proper';
// import * as searchServices from '../../../services/searchServices';


// const cx = classNames.bind(styles);
// function Search() {
//     const [searchValue, setSearchValue] = useState('');
//     const [searchResult, setSearchResult] = useState([]);
//     const [showResult, setShowResult] = useState(true);
//     const [loading, setLoading] = useState(false);

//     const debounced = useDebounce(searchValue, 500);

//     const inputRef = useRef(null);

//     useEffect(() => {
//         if (!debounced.trim()) {
//             setSearchResult([]);
//             return;
//         }

//         const fetchApi = async () => {
//             setLoading(true);

//             const result = await searchServices.search(debounced);
//             setSearchResult(result);

//             setLoading(false);
//         };
//         fetchApi();
//     }, [debounced]);

//     const handleClear = () => {
//         setSearchValue('');
//         setSearchResult([]);
//         inputRef.current.focus();
//     };

//     const handleHideResult = () => {
//         setShowResult(false);
//     };


//     const handleChange = (e) => {
//         const searchValue = e.target.value;
//         if (!searchValue.startsWith(' ') && searchValue.trim()) {
//             setSearchValue(searchValue);
//         }
//     }
    
//     return (
//        <div>
//             <HeadlessTippy
//                 interactive
//                 appendTo={() => document.body}
//                 visible={showResult && searchResult.length > 0}
//                 render={(attrs) => (
//                     <div className={cx('search-result')} tabIndex="-1" {...attrs}>
//                         <PopperWrapper>
//                             <h4 className={cx('search-title')}>Accounts</h4>
//                             {searchResult.map((result) => (
//                                 <AccountItem key={result.id} data={result} />
//                             ))}
//                         </PopperWrapper>
//                     </div>
//                 )}
//                 onClickOutside={handleHideResult}
//             >
//                 <div className={cx('search')}>
//                     <input
//                         value={searchValue}
//                         ref={inputRef}
//                         placeholder="Search accounts and videos"
//                         spellCheck={false}
//                         onChange={handleChange}
//                         onFocus={() => setShowResult(true)}
//                     />
//                     {!!searchValue && !loading && (
//                         <button className={cx('clear')} onClick={handleClear}>
//                             <FontAwesomeIcon icon={faCircleXmark} />
//                         </button>
//                     )}
//                     {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
//                     <button className={cx('search-btn')} tabIndex={-1}
//                     onMouseDown={(e) => e.preventDefault()}
//                     >
//                         <SearchIcon />
//                     </button>
//                 </div>
//             </HeadlessTippy>
//        </div>
//     );
// }

// export default Search;
import styles from './Search.module.scss';
import HeadlessTippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useRef, useState } from 'react';
import { Wrapper as PopperWrapper } from '../../../components/Proper';
import AccountItem from '../../../components/AccountItem';
import { SearchIcon } from '../../../components/Icons';
import { useDebounce } from '../../../hooks';
import * as searchServices from '../../../services/searchServices';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const debounced = useDebounce(searchValue, 500);
    const inputRef = useRef(null);

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }

        const fetchApi = async () => {
            setLoading(true);
            try {
                const result = await searchServices.search(debounced);
                // Kiểm tra nếu result không phải là mảng
                if (Array.isArray(result)) {
                    setSearchResult(result);
                } else {
                    console.warn('Search result is not an array:', result);
                    setSearchResult([]);
                }
            } catch (error) {
                console.error('Failed to fetch search results:', error);
                setSearchResult([]);
            } finally {
                setLoading(false);
            }
        };

        fetchApi();
    }, [debounced]);

    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };

    const handleHideResult = () => {
        setShowResult(false);
    };

    const handleChange = (e) => {
        const searchValue = e.target.value;
        if (!searchValue.startsWith(' ') && searchValue.trim()) {
            setSearchValue(searchValue);
        }
    };

    return (
        <div>
            <HeadlessTippy
                interactive
                appendTo={() => document.body}
                visible={showResult && searchResult.length > 0}
                render={(attrs) => (
                    <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                            <h4 className={cx('search-title')}>Accounts</h4>
                            {Array.isArray(searchResult) && searchResult.length > 0 ? (
                                searchResult.map((result) => (
                                    <AccountItem key={result.id} data={result} />
                                ))
                            ) : (
                                <p className={cx('no-results')}>No results found</p>
                            )}
                        </PopperWrapper>
                    </div>
                )}
                onClickOutside={handleHideResult}
            >
                <div className={cx('search')}>
                    <input
                        value={searchValue}
                        ref={inputRef}
                        placeholder="Search accounts and videos"
                        spellCheck={false}
                        onChange={handleChange}
                        onFocus={() => setShowResult(true)}
                    />
                    {!!searchValue && !loading && (
                        <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                    )}
                    {loading && <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />}
                    <button className={cx('search-btn')} tabIndex={-1} onMouseDown={(e) => e.preventDefault()}>
                        <SearchIcon />
                    </button>
                </div>
            </HeadlessTippy>
        </div>
    );
}

export default Search;
