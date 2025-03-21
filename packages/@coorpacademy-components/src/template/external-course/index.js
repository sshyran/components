import React from 'react';
import {NovaSolidInterfaceFeedbackInterfaceQuestionMark as QuestionIcon} from '@coorpacademy/nova-icons';
import {convert} from 'css-color-function';
import classnames from 'classnames';
import {get, getOr, keys, identity, isNil} from 'lodash/fp';
import PropTypes from 'prop-types';
import {EXTERNAL_CONTENT_ICONS} from '../../util/external-content';
import Provider from '../../atom/provider';
import Loader from '../../atom/loader';
import Button from '../../atom/button';
import ExternalContentViewer from '../../molecule/external-content-viewer';
import style from './style.css';

const defaultWrapperStyle = {
  default: style.default,
  cockpit: style.defaultCockpit
};

class ExternalCourse extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(keys(EXTERNAL_CONTENT_ICONS)),
    url: PropTypes.string.isRequired,
    quit: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func
    }),
    complete: PropTypes.shape({
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
      onClick: PropTypes.func
    }),
    warning: PropTypes.shape({
      label: PropTypes.string.isRequired,
      onClick: PropTypes.func
    }),
    loading: PropTypes.bool,
    backgroundImageUrl: PropTypes.string,
    contentType: PropTypes.string,
    mode: PropTypes.string
  };

  static contextTypes = {
    skin: Provider.childContextTypes.skin
  };

  handleOnClick = field => e => {
    e.stopPropagation();
    e.preventDefault();
    const onClick = get('onClick', field);
    return onClick && onClick(e);
  };

  render() {
    const {
      name,
      type,
      url,
      warning,
      complete,
      quit,
      loading,
      backgroundImageUrl,
      contentType,
      mode = 'default'
    } = this.props;
    const {skin} = this.context;
    const primary = getOr('#00B0FF', 'common.primary', skin);
    const IconType = EXTERNAL_CONTENT_ICONS[type].icon;
    const IconColor = EXTERNAL_CONTENT_ICONS[type].color;

    const mainContentSlot = loading ? (
      <div className={style.loader}>
        <Loader />
      </div>
    ) : (
      <ExternalContentViewer
        url={url}
        backgroundImageUrl={backgroundImageUrl}
        contentType={contentType}
      />
    );

    const completeButton = !isNil(complete) ? (
      <Button
        type="button"
        disabled={loading ? true : complete.disabled}
        onClick={loading ? identity : this.handleOnClick(complete)}
        submitValue={complete.label}
        style={{
          backgroundColor:
            complete.disabled || loading ? convert(`color(${primary} a(-50%))`) : primary,
          cursor: loading ? 'progress' : 'pointer'
        }}
        className={classnames(
          style.completeCta,
          complete.disabled || loading ? style.disabled : null,
          loading ? style.loading : null
        )}
      />
    ) : null;

    return (
      <div className={defaultWrapperStyle[mode]}>
        <div className={style.header}>
          <div className={style.leftSection}>
            <span
              className={classnames(style.quitCta, loading ? style.loading : null)}
              onClick={loading ? identity : this.handleOnClick(quit)}
            >
              {quit.label}
            </span>
          </div>
          <div className={classnames(style.iconLabel, style.title)}>
            <div className={style.oval} style={{backgroundColor: IconColor}}>
              <IconType className={style.iconHeader} />
            </div>
            <span>{name}</span>
          </div>
          <div className={style.rightSection} />
        </div>
        {mainContentSlot}
        <div className={style.footer}>
          <div className={style.leftSection}>
            <div
              onClick={this.handleOnClick(warning)}
              className={classnames(style.iconLabel, style.link)}
            >
              <QuestionIcon className={style.iconQuestion} width={24} height={24} />
              <span>{warning.label}</span>
            </div>
          </div>
          {completeButton}
          <div className={style.rightSection} />
        </div>
      </div>
    );
  }
}

export default ExternalCourse;
