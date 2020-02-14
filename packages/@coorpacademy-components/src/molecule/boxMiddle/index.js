import React from 'react';
import PropTypes from 'prop-types';
import style from './style.css';

const BoxMiddle = (props, context) => {
  return (
    <div className={style.parent}>
      <div className={style.vbox}>
        <div className={style.ref}>Ref</div>
        <div className={style.type}>Type</div>
      </div>
      <div className={style.hbox}>
        <div className={style.question}>Question</div>
        <div className={style.kp}>Key point</div>
        <div className={style.dyk}>Did you know </div>
      </div>
    </div>
  );
};

BoxMiddle.contextTypes = {};

BoxMiddle.propTypes = {
  ref: PropTypes.string,
  type: PropTypes.string,
  question: PropTypes.string,
  keyPoint: PropTypes.string,
  didYouKnow: PropTypes.string
};

export default BoxMiddle;
