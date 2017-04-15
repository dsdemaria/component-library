import React from 'react';
import classNames from 'classnames/bind';
import styles from './YearToggle.styles.css';

const cx = classNames.bind(styles);

// const className = cx({ base: true });

const YearToggle = () => (
  <div>2016</div>
);

YearToggle.displayName = '2016';

YearToggle.propTypes = {
  children: React.PropTypes.string,
  onClick: React.PropTypes.func,
};

export default YearToggle;
