import React from 'react';
import style from './style.module.css';

const notificationStyle = {
  warning: style.warning,
  error: style.error,
  success: style.success
};

export type NotificationComponentProps = {
  type: keyof typeof notificationStyle;
  message: string
}

const NotificationComponent = (props: NotificationComponentProps) => {
  const {type, message} = props;

  const className = type ? notificationStyle[type] : style.message;

  return (
    <div className={className}>
      <span>!</span>
      {message}
    </div>
  );
};

export default NotificationComponent;
