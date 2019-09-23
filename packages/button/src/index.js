import React from 'react';
import styles from './index.less';
import cn from 'classnames/bind';
const cx = cn.bind(styles);


const StatelessReactButton = ({ handleOnclick }) => {
  return <button className={cx(styles.button)} onClick={handleOnclick}>react stateless button</button>
};

export default StatelessReactButton;

