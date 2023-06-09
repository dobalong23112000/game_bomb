import React from 'react'
import classNames from 'classnames/bind'
import styles from './styles.module.scss'
import {SpinnerCircular} from 'spinners-react'

const cx = classNames.bind(styles)
const Loader = () => {
 
    return (
        <div className={cx('Loader','d-flex align-items-center justify-content-center')}>
            <SpinnerCircular size={68} thickness={116} speed={163} color="rgba(121, 217, 255, 1)" secondaryColor="rgba(121, 217, 255, 0.31)" />

        </div>
    )
}

export default Loader