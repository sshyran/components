import React from 'react';
import PropTypes from 'prop-types';
import VideoIframe from '../video-iframe';
import JWPlayer from './jwplayer';

const VideoPlayer = props => {
  const {mimeType, id, url, width = '100%', height = '400px', onPlay, onPause, onEnded} = props;

  switch (mimeType) {
    case 'application/vimeo':
    case 'application/youtube':
    case 'application/kontiki':
      return (
        <VideoIframe
          type={mimeType.split('application/')[1]}
          id={id}
          url={url}
          width={width}
          height={height}
          frameBorder={0}
          allowFullScreen
          onPlay={onPlay}
          onPause={onPause}
          onEnded={onEnded}
        />
      );

    case 'video/mp4':
      return <JWPlayer {...props} />;
  }
};

VideoPlayer.propTypes = {
  id: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
  onPlay: PropTypes.func,
  onPause: PropTypes.func,
  onEnded: PropTypes.func,
  mimeType: PropTypes.oneOf([
    'application/kontiki',
    'application/vimeo',
    'application/youtube',
    'video/mp4'
  ]).isRequired
};

export default VideoPlayer;
