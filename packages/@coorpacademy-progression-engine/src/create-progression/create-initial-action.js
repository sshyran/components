// @flow
import head from 'lodash/fp/head';
import type {AvailableContent, MoveAction, SlidePool} from '../types';
import type {ChapterRule} from '../rule-engine/types';
import selectInitialRule from './select-initial-rule';
import selectInitialSlide from './select-initial-slide';

const learnerInitialAction = (slidePools: Array<SlidePool>): MoveAction => {
  const slide = selectInitialSlide(slidePools);

  if (!slide) {
    throw new Error('');
  }

  return {
    type: 'move',
    payload: {
      nextContent: {
        type: 'slide',
        ref: slide._id
      }
    }
  };
};

const adaptiveInitialAction = (chapterRules: Array<ChapterRule>): MoveAction => {
  const rule = selectInitialRule(chapterRules);

  if (!rule) {
    throw new Error('');
  }

  const {instructions, destination} = rule;
  return {
    type: 'move',
    payload: {
      instructions,
      nextContent: destination
    }
  };
};

const createInitialAction = (availableContent: AvailableContent): MoveAction => {
  if (!availableContent) {
    throw new Error('');
  }

  const {chapterRulePool = [], slidePools} = availableContent;

  const firstChapterRule = head(chapterRulePool);

  if (firstChapterRule && firstChapterRule.rules) {
    return adaptiveInitialAction(firstChapterRule.rules);
  }

  if (!slidePools) {
    throw new Error('');
  }

  return learnerInitialAction(slidePools);
};

export default createInitialAction;
