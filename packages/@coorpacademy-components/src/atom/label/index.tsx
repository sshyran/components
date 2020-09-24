import React from 'react';
import style from './style.module.css';

const Label = ({children}: {children: JSX.Element[] | JSX.Element}) => {
  return <span className={style.default}>{children}</span>;
};

export default Label;
