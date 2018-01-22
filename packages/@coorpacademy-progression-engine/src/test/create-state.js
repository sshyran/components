// @flow
import test from 'ava';
import createState from '../create-state';
import answerAction from '../reducers/test/fixtures/actions';

test('should...', t => {
  // TODO implement
  // $FlowFixMe
  t.deepEqual(createState({
    "engine": {
      "ref": "microlearning",
      "version": "1"
    },
    "content": {
      "ref": "5.C7",
      "type": "chapter"
    },
    "actions": [
      "answerAction"
    ]
    }), {
      lives: 1,
      livesDisabled: false,
      content: undefined,
      nextContent: undefined,
      isCorrect: true,
      slides: [],
      stars: 0,
      requestedClues: [],
      viewedResources: [],
      step: {
        current: 1
      },
      remainingLifeRequests: 1,
      hasViewedAResourceAtThisStep: false,
      allAnswers: [],
      variables: {}
  });
});
