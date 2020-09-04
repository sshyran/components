import React from 'react';
import PropTypes from 'prop-types';
import Provider from '../provider';
import style from './style.module.css';

export type TabContentProps = {
  tabTitle: string,
  hideContentBackground: boolean,
  children: React.ReactNode
};

const TabContent = (props: TabContentProps) => {
  const {tabTitle, hideContentBackground, children} = props;

  const backgroundClassName = hideContentBackground ? style.hiddenBackground : style.greyBackground;
  return (
    <div className={style.content}>
      <div className={style.contentTitle}>{tabTitle}</div>
      <div className={backgroundClassName}>{children}</div>
    </div>
  );
};

TabContent.contextTypes = {
  translate: Provider.childContextTypes.translate
};

TabContent.propTypes = {
  tabTitle: PropTypes.string,
  hideContentBackground: PropTypes.bool,
  children: PropTypes.node
};

export default TabContent;
