// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import type {Engine, EngineOptions, State} from '../../types';
import {computeNextStepAfterAnswer, type PartialAnswerAction} from '..';
import allSlides from './fixtures/slides';
import getSlide from './helpers/get-slide';
import {stateBeforeGettingNextContent} from './fixtures/states';

const engine: Engine = {
  ref: 'learner',
  version: '1'
};
const engineOptions: EngineOptions = {};
const slidePools = [
  {
    chapterId: '1.A1',
    slides: filter({chapter_id: '1.A1'}, allSlides)
  },
  {
    chapterId: '2.A1',
    slides: filter({chapter_id: '2.A1'}, allSlides)
  }
];

test('should switch chapters when user has answered `config.slidesToComplete` number of slides of a chapter', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    nextContent: {
      type: 'slide',
      ref: '1.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4']
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const availableContent = {slidePools};
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const result = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {type: 'slide'},
      instructions: null,
      isCorrect: true
    }
  });
  t.regex(result.payload.nextContent.ref, /^2\.A1\.\d+$/);
});

test('should return the success endpoint when user has answered `config.slidesToComplete` number of slides of every chapter', t => {
  const state: State = Object.freeze({
    ...stateBeforeGettingNextContent,
    nextContent: {
      type: 'slide',
      ref: '2.A1.4'
    },
    slides: ['1.A1.1', '1.A1.2', '1.A1.3', '1.A1.4', '2.A1.1', '2.A1.2', '2.A1.3', '2.A1.4']
  });
  const currentSlide = getSlide(allSlides, state.nextContent);
  const availableContent = {slidePools};
  const partialAction: PartialAnswerAction = {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true
    }
  };

  const result = computeNextStepAfterAnswer(
    engine,
    engineOptions,
    state,
    availableContent,
    currentSlide,
    partialAction
  );
  t.deepEqual(result, {
    type: 'answer',
    payload: {
      answer: [],
      content: state.nextContent,
      godMode: true,
      nextContent: {ref: 'successExitNode', type: 'success'},
      instructions: null,
      isCorrect: true
    }
  });
});
