import React from 'react';
import {map} from 'lodash/fp';

import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../../atom/provider';
import colors from '../../app-racing/game/common-fixtures/colors';

import Avatar from '../avatar';

import style from './style.css';

const TeamAvatar = (props, context) => {
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
          return (
<<<<<<< d09599dd9a63193062fd18469a857ec04ede2372
            <div className={style.avatar} key={`${number}_${member.name}`}>
              <Avatar {...member} color={colors[number]} />
=======
            <div className={style.avatar} key={member.name}>
              {' '}
              <Avatar key={member.name} color={colors[number]} initial={member.initial} />{' '}
>>>>>>>  add  avatar Initial + color to the selected-team
            </div>
          );
        }, members)}
      </div>
    </div>
  );
};

TeamAvatar.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default TeamAvatar;
