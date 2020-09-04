import React from 'react';
import {spinner, doubleBounce1, doubleBounce2} from './style.module.css';

const Spinner = () => {
  return (
    <div className={spinner}>
      <div className={doubleBounce1} />
      <div className={doubleBounce2} />
    </div>
  );
};

export default Spinner;
