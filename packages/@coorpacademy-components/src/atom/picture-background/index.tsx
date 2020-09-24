import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import {keys} from 'lodash/fp';
import cssStyle from './style.module.css';

const viewStyle = {
  cover: cssStyle.cover,
  contain: cssStyle.contain
} as const;

type srcObj = { mobile: string; desktop: string };

export type PictureBackgroundProps = {
  view: keyof typeof viewStyle;
  src: srcObj | string;
  style: Record<string, string | number>;
};

const PictureBackground = (props: PictureBackgroundProps) => {
  const {src, view, style} = props;
  let mobile:string = '', desktop: string = '';
  const isSrcObject = !(typeof src === 'string');
  if (isSrcObject) {
    mobile = (src as srcObj).mobile;
    desktop = (src as srcObj).desktop;
  }
  
  const bgStyle = viewStyle[view];

  const pictureView = isSrcObject ? (
    <div className={cssStyle.deviceView}>
      <div className={cssStyle.mobileContainer}>
        <div
          className={classnames(cssStyle.picture, bgStyle)}
          style={{
            backgroundImage: `url(${mobile})`
          }}
        />
      </div>
      <div className={cssStyle.desktopContainer}>
        <div
          className={classnames(cssStyle.picture, bgStyle)}
          style={{
            backgroundImage: `url(${desktop})`
          }}
        />
      </div>
    </div>
  ) : (
    <div
      className={classnames(cssStyle.default, bgStyle)}
      style={{backgroundImage: `url(${src})`}}
    />
  );

  return (
    <div className={cssStyle.wrapper} style={style}>
      {pictureView}
    </div>
  );
};

PictureBackground.propTypes = {
  view: PropTypes.oneOf(keys(viewStyle)),
  src: PropTypes.oneOfType([PropTypes.objectOf(PropTypes.string), PropTypes.string.isRequired]),
  style: PropTypes.objectOf(PropTypes.oneOfType([PropTypes.string, PropTypes.number]))
};

export default PictureBackground;
