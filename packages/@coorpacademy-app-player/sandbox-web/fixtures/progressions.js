import reduce from 'lodash/fp/reduce';
import set from 'lodash/fp/set';
import {createState} from '@coorpacademy/progression-engine';
import progressionsData from './data/progressions';

const progressionStore = reduce(
  (progressionMap, progression) => {
    const newState = createState(progression);
    progressionMap.set(progression._id, set('state', newState, progression));
    return progressionMap;
  },
  new Map(),
  progressionsData
);

// eslint-disable-next-line import/prefer-default-export, require-await
export const findById = async id => {
  if (!progressionStore.has(id)) throw new Error('Progression not found');
  return progressionStore.get(id);
};

export const saveProgression = progression => {
  progressionStore.set(progression._id, progression);
};