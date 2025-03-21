import React from 'react';
import PropTypes from 'prop-types';
import {NovaCompositionCoorpacademyMagicWand as MagicWand} from '@coorpacademy/nova-icons';
import {get} from 'lodash/fp';
import Button from '../../atom/button';
import style from './style.css';

const Header = ({step, header, subHeader}) => (
  <div className={style.headerContainer}>
    {step ? (
      <div className={style.headerWrapper}>
        <h1 className={style.step}>{step}</h1>
        <h1 className={style.header}>{header}</h1>
      </div>
    ) : (
      <h1 className={style.header}>{header} </h1>
    )}
    {subHeader ? <h4 className={style.subHeader}>{subHeader} </h4> : null}
  </div>
);

Header.propTypes = {
  step: PropTypes.string,
  header: PropTypes.string,
  subHeader: PropTypes.string
};

const QrCodeImage = ({
  showMobileAppAccess,
  qrCodeImageUrl,
  preMessage,
  linkMessage,
  endMessage
}) => {
  return (
    <div className={style.qrcodeWrapper}>
      <img src={qrCodeImageUrl} />
      {showMobileAppAccess ? (
        <div className={style.qrcodeOverlay}>
          <div className={style.qrcodeModal}>
            <span>{preMessage} </span>
            <a href="mailto:assistance@coorpacademy.com" className={style.qrcodeModalLink}>
              <span>{linkMessage} </span>
            </a>
            <span>{endMessage} </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};
QrCodeImage.propTypes = {
  showMobileAppAccess: PropTypes.bool,
  qrCodeImageUrl: PropTypes.string,
  preMessage: PropTypes.string,
  linkMessage: PropTypes.string,
  endMessage: PropTypes.string
};

const MagicLink = ({disabled, submitValue, magicLinkUrl, color}) => {
  return (
    <div className={style.buttonWrapper}>
      <Button
        color={color}
        disabled={disabled}
        isLinkDisabled={disabled}
        href={magicLinkUrl}
        type="link"
        submitValue={null}
      >
        <div className={style.iconWrapper}>
          <MagicWand className={style.magicLinkIcon} />
          <p>{submitValue}</p>
        </div>
      </Button>
    </div>
  );
};

MagicLink.propTypes = {
  magicLinkUrl: PropTypes.string,
  disabled: PropTypes.bool,
  submitValue: PropTypes.string
};

const StoresLinks = ({
  onAppStoreButtonClick,
  appStoreButtonImageUrl,
  playStoreButtonImageUrl,
  onPlayStoreButtonClick
}) => (
  <div className={style.storeLinksContainer}>
    <img className={style.img} src={appStoreButtonImageUrl} onClick={onAppStoreButtonClick} />
    <img className={style.img} src={playStoreButtonImageUrl} onClick={onPlayStoreButtonClick} />
  </div>
);

StoresLinks.propTypes = {
  onAppStoreButtonClick: PropTypes.func,
  appStoreButtonImageUrl: PropTypes.string,
  playStoreButtonImageUrl: PropTypes.string,
  onPlayStoreButtonClick: PropTypes.func
};

const Divider = ({word}) => (
  <div className={style.dividerWrapper}>
    <div className={style.divider} />
    <p>{word}</p>
    <div className={style.divider} />
  </div>
);

Divider.propTypes = {
  word: PropTypes.string
};

const GetTheApp = (props, context) => {
  const {
    onAppStoreButtonClick,
    appStoreButtonImageUrl,
    playStoreButtonImageUrl,
    onPlayStoreButtonClick,
    storeStep,
    connectionStep,
    qrCodeStep,
    magicLinkStep,
    diviserWord,
    qrCodeImageUrl,
    magicLinkUrl,
    disabled,
    showMobileAppAccess,
    submitValue,
    preMessage,
    linkMessage,
    endMessage
  } = props;
  const {skin} = context;
  const primaryColor = get('common.primary', skin);
  return (
    <div className={style.container}>
      <div className={style.store}>
        <Header {...storeStep} />
        <StoresLinks
          onAppStoreButtonClick={onAppStoreButtonClick}
          appStoreButtonImageUrl={appStoreButtonImageUrl}
          playStoreButtonImageUrl={playStoreButtonImageUrl}
          onPlayStoreButtonClick={onPlayStoreButtonClick}
        />
      </div>
      <div className={style.secondStepWrapper}>
        <Header {...connectionStep} />
        <div className={style.connectionWrapper}>
          <div className={style.wrapper}>
            <Header {...qrCodeStep} />
            <QrCodeImage
              showMobileAppAccess={showMobileAppAccess}
              qrCodeImageUrl={qrCodeImageUrl}
              preMessage={preMessage}
              linkMessage={linkMessage}
              endMessage={endMessage}
            />
          </div>
          <Divider word={diviserWord} />
          <div className={style.wrapper}>
            <Header {...magicLinkStep} />
            <MagicLink
              color={primaryColor}
              submitValue={submitValue}
              disabled={disabled}
              magicLinkUrl={magicLinkUrl}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

GetTheApp.propTypes = {
  ...StoresLinks.propTypes,
  storeStep: PropTypes.shape(Header.propTypes),
  connectionStep: PropTypes.shape(Header.propTypes),
  qrCodeStep: PropTypes.shape(Header.propTypes),
  magicLinkStep: PropTypes.shape(Header.propTypes),
  ...QrCodeImage.propTypes,
  diviserWord: Divider.propTypes.word,
  ...MagicLink.propTypes
};

export default GetTheApp;
