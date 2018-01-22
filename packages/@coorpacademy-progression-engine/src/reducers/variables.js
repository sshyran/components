// @flow

import type {Action, State, Config} from '../types';
import updateVariables from '../rule-engine/apply-instructions';

// eslint-disable-next-line import/no-anonymous-default-export
export default (config: Config) => (state: State, action: Action): State => {
  switch (action.type) {
    case 'answer':
    case 'move': {
      const {instructions} = action.payload;
      if (!instructions) return state;
      return updateVariables(instructions)(state);
    }
    default: {
      return state;
    }
  }
};