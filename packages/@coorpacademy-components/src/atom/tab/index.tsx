import React, {useCallback} from 'react';
import {map} from 'lodash/fp';
import style from './style.module.css';

export type TabProps = {
  onClick: (targetContent: string) => void,
  links: Array<{[key: string]: string}>,
  title: string,
  targetContent: string
}

const Tab = ({onClick, links, title, targetContent}: TabProps) => {
  const handleTabClick = 
  useCallback<(event: React.MouseEvent) => void>(() => onClick(targetContent), [onClick, targetContent]);

  return (
    <div className={style.tab} onClick={handleTabClick}>
      <div className={style.title}>{title}</div>
      <div className={style.link}>
        {map(
          link => (
            <div key={link.title}>{link.title}</div>
          ),
          links
        )}
      </div>
    </div>
  );
};

export default Tab;
