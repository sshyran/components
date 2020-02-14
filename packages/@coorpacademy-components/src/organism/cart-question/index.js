import React from 'react';

import style from './style.css';
import Left from '../../molecule/boxLeft';
import Middle from '../../molecule/boxMiddle';
import Right from '../../molecule/boxRight';

const CartQuestion = (props, context) => {
  return (
    <div className={style.parent}>
      <div className={style.left}>
        <Left title={'Actions'} />
      </div>
      <div className={style.middle}>
        <Middle />
      </div>
      <div className={style.right}>
        <Right />
      </div>
    </div>
  );
};

CartQuestion.contextTypes = {};

CartQuestion.propTypes = {};

export default CartQuestion;
