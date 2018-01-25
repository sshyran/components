// @flow
import type {NewProgression, State, Engine} from './types';
import getConfig from './config';
import updateState from './update-state';
// import answerAction from './reducers/test/fixtures/actions';

const createState = (progression: NewProgression): State => {
  // TODO Implement function
  // $FlowFixMe
  const config = getConfig({ref: progression.engine.ref, version: progression.engine.version});

  const initialState: State = {
    lives: config.lives,
    livesDisabled: config.livesDisabled,
    isCorrect: true,
    slides: [],
    stars: 0,
    requestedClues: [],
    viewedResources: [],
    step: {
      current: 1
    },
    remainingLifeRequests: config.remainingLifeRequests,
    hasViewedAResourceAtThisStep: false,
    allAnswers: [],
    variables: {}
  };

  // 2 pour chacune des actions de progression, appeler l'updateState
  const state = updateState(progression.engine, initialState, progression.actions);
  // console.log('state: ', state);

  return state;
};

export default createState;
