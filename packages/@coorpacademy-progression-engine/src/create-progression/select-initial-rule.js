// @flow
import find from 'lodash/fp/find';
import type {ChapterRule} from '../rule-engine/types';

const selectRule = (rules: Array<ChapterRule>): ?ChapterRule => {
  return find({source: {type: 'slide', ref: ''}}, rules) || null;
};

export default selectRule;
