import React from 'react';
import classnames from 'classnames';
import style from './style.module.css';

const Loader = ({className}: {className: string}) => {
  return (
    <div data-name="loader" className={classnames(style.container, className)}>
      <div className={style.dots}>
        <div className={style.red} />
        <div className={style.blue} />
        <div className={style.green} />
        <div className={style.yellow} />
      </div>
    </div>
  );
};

export default Loader;
