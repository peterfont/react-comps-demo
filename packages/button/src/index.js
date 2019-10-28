import React from 'react';
// import styles from './index.less';
import logo from './assests/logo.jpg';
import cn from 'classnames/bind';
// const cx = cn.bind(styles);
// className={cx(styles.button)} onClick={handleOnclick} style={{ background: `url(${logo})`}}
const StatelessReactButton = ({ handleOnclick }) => {
  return (
    <button >
      按钮
    </button>
  )
};

export default StatelessReactButton;

