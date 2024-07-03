import PropTypes from 'prop-types';
import { forwardRef, useState } from 'react';
import images from '../../assets/images';
import style from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(customFallback);
    };

    // eslint-disable-next-line jsx-a11y/alt-text
    return (
        <img
            className={classNames(style.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

Image.p

export default Image;
