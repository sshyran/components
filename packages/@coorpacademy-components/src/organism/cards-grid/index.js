import React, {PropTypes} from 'react';
import set from 'lodash/fp/set';
import map from 'lodash/fp/map';
import Card from '../../molecule/card';
import style from './style.css';

function CardsGrid(props) {
  const {
    list = []
  } = props;

  const cards = map(cardProps => {
    return (
      <Card
        {...cardProps}
      />
    );
  }, list);

  return (
    <div className={style.default}>
      {cards}
    </div>
  );
}

CardsGrid.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object)
};

export default CardsGrid;
