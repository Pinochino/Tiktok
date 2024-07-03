import PropTypes from 'prop-types'
import classNames from "classnames/bind";
import styles from './Proper.module.scss';

const cx = classNames.bind(styles);

function Wrapper({children, className}) {
    return (  
        <div className={cx("wrapper", className)}>
            {children}
        </div>
    );
}

Wrapper.protoT

export default Wrapper;