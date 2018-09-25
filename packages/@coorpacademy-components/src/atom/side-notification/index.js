import React from 'react';
import PropTypes from 'prop-types';
import getOr from 'lodash/fp/getOr';
import {container, content, closeCross} from './style.css';

const SideNotificationComponent = (
  {header, message, imageUrl, roomURL, onClick, onClose},
  context
) => {
  const {skin} = context;

  const color = getOr('#00b0ff', 'common.primary', skin);

  return (
    <div onClick={() => onClick()} className={container} style={{border: `1px solid ${color} `}}>
      <img src={imageUrl} alt="block-image" />
      <span
        onClick={e => {
          e.stopPropagation();
          onClose();
        }}
        className={closeCross}
      >
        {' '}
        x{' '}
      </span>
      <div className={content}>
        <h5 style={{color}}> {header} </h5>
        <p>
          {' '}
          <a href={roomURL}> {message} </a>{' '}
        </p>
      </div>
    </div>
  );
};

SideNotificationComponent.prototype = {
  header: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  roomURL: PropTypes.string.isRequired
};
export default SideNotificationComponent;
