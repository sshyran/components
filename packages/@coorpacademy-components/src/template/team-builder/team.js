import React from 'react';

import map from 'lodash/fp/map';
import isEmpty from 'lodash/fp/isEmpty';
import Provider from '../../atom/provider';
import colors from '../app-racing/game/common-fixtures/colors';
import Member from './member';
import style from './team.css';

const Team = (props, context) => {
  const {name, members, numberSlotTaken, initial, number} = props;
  return (
    <div className={style.team}>
      <header
        style={{
          backgroundColor: colors[number]
        }}
      >
        <h1>{name}  :  {numberSlotTaken}  /  {members.length} </h1>
      </header>
      <div className={style.members}>
        {map(member => {
          if (isEmpty(member)) return null;
<<<<<<< 63b5615ba2fe229bcce32c16d8daa203aba9be87
<<<<<<< 85b9a5d4296991ed0e5cd17c7a8fb8fd2062d0a5
<<<<<<< d09599dd9a63193062fd18469a857ec04ede2372
          return <Member key={member.name} {...member} color={colors[number]} />;
=======
          return <Member key={member.name} number={number} {...member} />;
>>>>>>>  add  avatar Initial + color to the selected-team
=======
          return <Member key={member.name} intiial={initial} number={number} {...member} />;
>>>>>>>  initial + color for the winner window
=======
          return <Member key={member.name} initial={initial} number={number} {...member} />;
>>>>>>> adding numberslot taken/ freefor the team compo
        }, members)}
      </div>
    </div>
  );
};

Team.contextTypes = {
  skin: Provider.childContextTypes.skin
};

export default Team;
