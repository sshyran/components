import React from 'react';

import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../atom/provider';
import colors from '../app-racing/game/common-fixtures/colors';
import Member from './member';
import style from './team.css';

const Team = (props, context) => {
  const {name, members, number} = props;
  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: colors[number]
        }}
      >
        <h1>{name}</h1>
      </header>
      <div className={style.members}>
        {map(member => {
          if (isEmpty(member)) return null;
<<<<<<< d09599dd9a63193062fd18469a857ec04ede2372
          return <Member key={member.name} {...member} color={colors[number]} />;
=======
          return <Member key={member.name} number={number} {...member} />;
>>>>>>>  add  avatar Initial + color to the selected-team
        }, members)}
      </div>
    </div>
  );
};

Team.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Team;
