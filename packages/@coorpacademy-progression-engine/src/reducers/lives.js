// @flow

import isEmpty from 'lodash/fp/isEmpty';
import type {Action, Config, State} from '../types';

export default function lives(config: Config): (number, Action, State) => number {
  return (amount: number = config.lives, action: Action, state: State): number => {
    if (state.livesDisabled) {
      return amount;
    }
    if (!isEmpty(action.payload.instructions))
      return amount;

    switch (action.type) {
      case 'answer':
        return action.payload.isCorrect === false
          ? amount - 1
          : amount;
      case 'extraLifeAccepted':
        return state.remainingLifeRequests > 0
          ? amount + 1
          : amount;
      default:
        return amount;
    }
  };
}
