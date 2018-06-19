// @flow
import test from 'ava';
import omit from 'lodash/fp/omit';
import filter from 'lodash/fp/filter';
import {getConfig} from '../../config';
import type {AvailableContent, Config, State} from '../../types';
import {computeNextStepOnAcceptExtraLife} from '..';
import allSlides from './fixtures/slides';
import {stateBeforeGettingNextContent} from './fixtures/states';

const config: Config = getConfig({ref: 'learner', version: '1'});
const state: State = {...stateBeforeGettingNextContent, lives: 0};
const authors = ['foo'];

test('should return an action linking to a new slide', t => {
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: null
    }
  ];
  const result = computeNextStepOnAcceptExtraLife(config, state, availableContent, authors);
  if (!result) {
    throw new Error('action should not be falsy');
  }
  t.deepEqual(omit(['payload.nextContent.ref'], result), {
    type: 'extraLifeAccepted',
    authors: ['foo'],
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {type: 'slide'},
      instructions: null
    }
  });
  t.regex(result.payload.nextContent.ref, /^1\.A1\.[2-9]+$/);
});

test('should return null if there is no available content', t => {
  const availableContent: AvailableContent = [];
  t.is(computeNextStepOnAcceptExtraLife(config, state, availableContent, authors), null);
});

test('should not apply the lives increment twice when switching chapters', t => {
  const availableContent: AvailableContent = [
    {
      ref: '1.A1',
      slides: filter({chapter_id: '1.A1'}, allSlides),
      rules: [
        {
          source: {
            type: 'slide',
            ref: '*'
          },
          destination: {
            type: 'chapter',
            ref: '2.A1'
          },
          instructions: [],
          conditions: [],
          priority: 10
        }
      ]
    },
    {
      ref: '2.A1',
      slides: filter({chapter_id: '2.A1'}, allSlides),
      rules: [
        {
          source: {
            type: 'slide',
            ref: ''
          },
          destination: {
            type: 'slide',
            ref: '2.A1.2'
          },
          instructions: [],
          conditions: [
            {
              target: {
                scope: 'variable',
                field: 'lives'
              },
              operator: 'EQUALS',
              values: [1]
            }
          ],
          priority: 10
        }
      ]
    }
  ];

  const result = computeNextStepOnAcceptExtraLife(config, state, availableContent, authors);
  t.deepEqual(result, {
    type: 'extraLifeAccepted',
    authors: ['foo'],
    payload: {
      content: {ref: 'extraLife', type: 'node'},
      nextContent: {type: 'slide', ref: '2.A1.2'},
      instructions: []
    }
  });
});
