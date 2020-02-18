import React from 'react';

import {
  NovaCompositionCoorpacademyEye as ViewIcon,
  NovaSolidContentEditionBin as DeleteIcon,
  NovaSolidContentEditionPencil1 as EditIcon
} from '@coorpacademy/nova-icons';
import Link from '../../atom/link';
// import Left from '../../molecule/boxLeft';
// import Middle from '../../molecule/boxMiddle';
// import Right from '../../molecule/boxRight';
// import style from './style.css';

const CartQuestion = (props, context) => {
  // return (
  //   <div className={style.parent}>
  //     <div className={style.left}>
  //       <Left title={'Actions'} />
  //     </div>
  //     <div className={style.middle}>
  //       <Middle />
  //     </div>
  //     <div className={style.right}>
  //       <Right />
  //     </div>
  //   </div>
  // );

  const pStyle = {
    marginBlockStart: '0.5em',
    marginBlockEnd: '0.5em'
  };

  const cellStyle = {
    padding: '0.5em'
  };

  const titleStyle = {
    color: 'rgba(0, 0, 0, 0.8)'
  };

  const iconStyle = {
    width: '1em',
    height: '1em'
  };

  const border = 'solid 1px rgba(0,0,0,.12)';

  return (
    <div
      style={{
        boxShadow:
          '0 2px 4px -1px rgba(0,0,0,.14),0 4px 5px 0 rgba(0,0,0,.098),0 1px 10px 0 rgba(0,0,0,.084)',
        display: 'flex',
        flexDirection: 'row'
      }}
    >
      <div
        style={{
          flexBasis: '400px',
          borderRight: border
        }}
      >
        <div
          style={{
            ...cellStyle,
            borderBottom: border
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>Action</p>
          <Link>
            <ViewIcon style={{...iconStyle}} />
          </Link>{' '}
          <Link>
            <EditIcon style={{...iconStyle}} />
          </Link>{' '}
          <Link>
            <DeleteIcon style={{...iconStyle, color: 'red'}} />
          </Link>
        </div>
        <div
          style={{
            ...cellStyle,
            borderBottom: border
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>Last modified</p>
          <img
            style={{width: '35px', height: '35px'}}
            className="avatar"
            ng-src="https://github.com/identicons/MarinPostel.png"
            src="https://github.com/identicons/MarinPostel.png"
          />
        </div>
        <div
          style={{
            ...cellStyle
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>Difficulty</p>
        </div>
      </div>
      <div
        style={
          {
            // flex: 'auto'
          }
        }
      >
        <div
          style={{
            borderBottom: border,
            display: 'flex'
          }}
        >
          {' '}
          <div
            style={{
              ...cellStyle,
              flexGrow: 1
            }}
          >
            <p style={{...pStyle, ...titleStyle}}>Ref / Slug</p>
            <p style={pStyle}>sli_NJCf9vkrU</p>
          </div>
          <div
            style={{
              ...cellStyle,
              flexGrow: 1
            }}
          >
            <p style={{...pStyle, ...titleStyle}}>Type</p>
            <p style={pStyle}>MCQ (multiple choice question)</p>
          </div>
        </div>
        <div
          style={{
            ...cellStyle,
            borderBottom: border
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>Question</p>
          <p style={pStyle}>
            {`De quelle discipline scientifique l'informatique quantique est-elle l'application ?`}
          </p>
        </div>
        <div
          style={{
            ...cellStyle,
            borderBottom: border
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>Key Point</p>
          <p style={pStyle}>
            {`L'informatique quantique est devenue l'une des principales applications de la physique
            quantique, une théorie scientifique qui décrit comment notre monde fonctionne au niveau
            le plus fondamental, à l'échelle atomique.`}
          </p>
        </div>
        <div
          style={{
            ...cellStyle
          }}
        >
          <p style={{...pStyle, ...titleStyle}}>DYK</p>
          <p style={pStyle}>
            {`La physique quantique, la mécanique quantique, la théorie quantique ou le modèle
            mécanique des ondes sont des termes différents qui désignent tous la même chose : la
            description de la nature à la plus petite échelle possible, celle des atomes et des
            particules subatomiques.`}
          </p>
        </div>
      </div>
    </div>
  );
};

CartQuestion.contextTypes = {};

CartQuestion.propTypes = {};

export default CartQuestion;
