import React from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/fp/map';
import InputCheckbox from '../../atom/input-checkbox';
import Button from '../../atom/button';
import style from './style.css';

const InputSplitScreen = props => {
  const {leftSection, rightSection, buttons} = props;
  const criteriaList = map.convert({cap: false})((criterion, key) => {
    return (
      <div className={style.field} key={key}>
        <InputCheckbox {...criterion} />
      </div>
    );
  }, leftSection.values);
  const collectionList = map.convert({cap: false})((collection, key) => {
    return (
      <div className={style.field} key={key}>
        <InputCheckbox {...collection} />
      </div>
    );
  }, rightSection.values);
  const buttonList = map.convert({cap: false})((button, key) => {
    return (
      <div className={style.button} key={key}>
        <Button {...button} />
      </div>
    );
  }, buttons);
  return (
    <div>
      <div className={style.splitDefault}>
        <div className={style.splitLeft}>
          <p className={style.title}>{leftSection.title}</p>
          {criteriaList}
        </div>
        <div className={style.splitRight}>
          <p className={style.title}>{rightSection.title}</p>
          {collectionList}
        </div>
      </div>
      <div className={style.buttonGroup}>{buttonList}</div>
    </div>
  );
};

InputSplitScreen.propTypes = {
  leftSection: PropTypes.shape({}),
  rightSection: PropTypes.shape({})
};

const SetupCohortItem = props => {
  const {field} = props;

  return (
    <div className={style.wrapper}>
      <InputSplitScreen {...field} />
    </div>
  );
};

SetupCohortItem.defaultProps = {
  field: {}
};

SetupCohortItem.propTypes = {
  field: PropTypes.shape({
    ...InputSplitScreen.propTypes
  })
};
export default SetupCohortItem;