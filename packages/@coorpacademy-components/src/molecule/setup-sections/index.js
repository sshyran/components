import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import SetupSection from '../setup-section';
import style from './style.css';

const SetupSections = (props, context) => {
  const { translate } = context;

  const {
    sections
  } = props;

  const sectionsView = sections.map((section, index) => {
    section.onUp = (index === 0) ? null : section.onUp;
    section.onDown = (index === sections.length - 1) ? null : section.onDown;

    return (
      <div key={section.id}
        className={style.section}
      >
        <SetupSection {...section} />
      </div>
    );
  });

  return (
    <div className={style.wrapper}>
      {sectionsView}
    </div>
  );
};

SetupSections.contextTypes = {
  translate: PropTypes.func
};

SetupSections.propTypes = {
  sections: PropTypes.array
};
export default SetupSections;
