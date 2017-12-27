import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Provider from '../../atom/provider';
import ResourceBrowser from '../../organism/resource-browser'
import style from './style.css';

const Feedback = (props, context) => {
  const {skin} = context;
  const {
    title,
    type,
    description,
    resources
  } = props;

  return (
    <div
      className={style.feedbackWrapper}
      data-name="feedback"
    >
      <div className={style.title}>{title}</div>
      <div className={style.descWrapper}>
        <div className={style.description}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{__html: description}}
        />
        <div className={style.resource}>
          <ResourceBrowser resource={resources[0]} />
        </div>
      </div>  
    </div>
  );
};

Feedback.contextTypes = {
  skin: Provider.childContextTypes.skin
};

Feedback.propTypes = {
  title: PropTypes.string,
  type: PropTypes.string,
  description: PropTypes.string,
  resources: PropTypes.checkPropTypes(ResourceBrowser.propTypes.resources)
};

export default Feedback;
