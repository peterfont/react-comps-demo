import React from 'react';
import styles from './index.less';
import logo from './assests/logo.jpg';
import cn from 'classnames/bind';

const cx = cn.bind(styles);
const StatelessReactButton = ({ handleOnclick }) => {
  return (
    <button className={cx(styles.button)} onClick={handleOnclick} style={{ background: `url(${logo})`}}>
      react stateless button
    </button>
  )
};

export default StatelessReactButton;

