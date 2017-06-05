import pipe from 'lodash/fp/pipe';
import get from 'lodash/fp/get';
import {createElement} from 'react';
import Provider from '@coorpacademy/components/es/atom/provider';
import Player from '@coorpacademy/components/es/template/app-player/player';
import {
  getCurrentProgression,
  getCurrentSlide,
  getProgressionId,
  getAnswers
} from '../utils/state-extract';
import {validateAnswer} from '../actions/ui/answers';
import getAnswerProps from './answer-props';

const toHeader = state => {
  return {
    primary: {
      title: 'Du management classique au nouveau blablabla'
    },
    lives: {
      count: get('state.lives')(getCurrentProgression(state))
    }
  };
};

const toPlayer = (state, dispatch) => {
  const progression = getCurrentProgression(state);
  const slide = getCurrentSlide(state);
  const answer = getAnswerProps(state, slide, dispatch);

  return {
    step: get('state.step')(progression),
    question: get('question.header')(slide),
    cta: {
      submitValue: 'Validate',
      onClick: () => {
        dispatch(
          validateAnswer(getProgressionId(state), {
            answers: getAnswers(state),
            slideId: slide._id
          })
        );
      },
      light: false,
      small: false,
      secondary: false
    },
    help: 'Select something below',
    answer,
    buttons: [
      {
        title: 'Media',
        type: 'media'
      },
      {
        title: 'Clue',
        type: 'clue'
      },
      {
        title: 'Coach',
        type: 'coach'
      }
    ]
  };
};

const createMapStateToProps = ({api}) => dispatch => state => {
  return {
    header: toHeader(state),
    player: toPlayer(state, dispatch)
  };
};

export {createMapStateToProps};

const wrapInProvider = options => vNode => createElement(Provider, options, vNode);

export default options => dispatch => {
  const mapStateToProps = createMapStateToProps(options)(dispatch);

  return pipe(mapStateToProps, Player, wrapInProvider(options));
};
