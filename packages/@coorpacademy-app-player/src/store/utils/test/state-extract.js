import test from 'ava';
import set from 'lodash/fp/set';
import pipe from 'lodash/fp/pipe';
import {
  getAnswer,
  getAnswerValue,
  getChoices,
  getClue,
  getCurrentClue,
  getCorrection,
  getCurrentContent,
  getCurrentCorrection,
  getCurrentExitNode,
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentSlide,
  getEngine,
  getLives,
  getPreviousSlide,
  getQuestionType,
  getStartRank,
  getStepContent,
  getEndRank,
  getBestScore,
  getResourceToPlay,
  getNextContent,
  hasViewedAResourceAtThisStep
} from '../state-extract';

test('getChoices should get choices from state', t => {
  const choices = ['foo', 'bar'];
  const plop = set('question.content.choices', choices, {});
  t.is(getChoices(plop), choices);
});

test("getCurrentProgressionId should get current progression's id from state", t => {
  const progressionId = '1234';
  const plop = set('ui.current.progressionId', progressionId, {});
  t.is(getCurrentProgressionId(plop), progressionId);
  t.is(getCurrentProgressionId({}), undefined);
});

test('getCurrentProgression should get current progression from state', t => {
  const progression = {foo: 'bar'};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentProgression(state), progression);
});

test('getAnswer should get answer from state', t => {
  const answer = {value: ['foo']};
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0', answer))({});

  t.is(getAnswer(state), answer);
});

test("getAnswerValue should get answer's values from state", t => {
  const slide = {
    question: {
      content: {
        defaultValue: 500
      }
    }
  };
  const answer = ['foo'];
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', answer))({});

  t.is(getAnswerValue(slide, state), answer);
});

test('getAnswerValue should return defaultValue from slide if available and answer are not in state', t => {
  const slide = {
    question: {
      content: {
        defaultValue: 500
      }
    }
  };
  const state = set('ui.current.progressionId', '0', {});

  t.deepEqual(getAnswerValue(slide, state), ['500']);
});

test('getAnswerValue should return undefined if answer are not in state and there is no default value for the slide', t => {
  const slide = {};
  const state = set('ui.current.progressionId', '0', {});

  t.is(getAnswerValue(slide, state), undefined);
});

test('getAnswerValue should not use defaultValue from slide if answer is an empty array', t => {
  const slide = {
    question: {
      content: {
        defaultValue: 500
      }
    }
  };
  const state = pipe(set('ui.current.progressionId', '0'), set('ui.answers.0.value', []))({});

  t.deepEqual(getAnswerValue(slide, state), []);
});

test("getQuestionType should get question's type from state", t => {
  const type = 'foo';
  const plop = set('question.type', type, {});
  t.is(getQuestionType(plop), type);
});

test('getCurrentSlide should get current slide from state', t => {
  const slide = {_id: '0'};
  const progression = {state: {nextContent: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.slide.entities', {'0': slide})
  )({});

  t.is(getCurrentSlide(state), slide);
});

test('getCurrentExitNode should get current exit node from state', t => {
  const exitNode = {ref: 'successExitNode'};
  const progression = {state: {nextContent: {ref: 'successExitNode'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.exitNodes.entities', {successExitNode: exitNode})
  )({});

  t.is(getCurrentExitNode(state), exitNode);
});

test('getPreviousSlide should get previous slide from state', t => {
  const slide = {_id: '0'};
  const progression = {state: {content: {ref: '0'}}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0', progression),
    set('data.contents.slide.entities.0', slide)
  )({});
  t.is(getPreviousSlide(state), slide);
});

test('getCurrentContent should get current content from state', t => {
  const content = {ref: '0', type: 'slide'};
  const progression = {content};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.contents.slide.entities.0', 'bar'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getCurrentContent(state), 'bar');
});

test('getStepContent should get progression.state.nextContent', t => {
  const content = {ref: '0', type: 'slide'};
  const progression = {state: {nextContent: content}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getStepContent(state), content);
});

test('hasViewedAResourceAtThisStep should get progression.state.hasViewedAResourceAtThisStep', t => {
  const progression = {state: {hasViewedAResourceAtThisStep: 'foo'}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(hasViewedAResourceAtThisStep(state), 'foo');
});

test('getCorrection should get correction from state', t => {
  const correction = ['Bonne réponse'];
  const state = set('data.answer.entities.foo.bar', correction)({});

  t.is(getCorrection('foo', 'bar')(state), correction);
});

test('getCurrentCorrection should get current correction from state', t => {
  const progression = pipe(set('_id', 'foo'), set('state.content.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const correction = ['Bonne réponse'];
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set(`data.answer.entities.${progression._id}.${slide._id}`, correction),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentCorrection(state), correction);
});

test('getClue should get clue from state', t => {
  const clue = 'Indice';
  const state = set('data.clues.entities.foo.bar', clue)({});

  t.is(getClue('foo', 'bar')(state), clue);
});

test('getStartRank should get rank.start from state', t => {
  const rank = 'foo';
  const state = set('data.rank.start', rank)({});
  t.is(getStartRank(state), rank);
});

test('getEndRank should get rank.end from state', t => {
  const rank = 'foo';
  const state = set('data.rank.end', rank)({});
  t.is(getEndRank(state), rank);
});

test('getBestScore should get bestScore from current content', t => {
  const bestScore = 'foo';
  const progression = {content: {ref: 'bar', type: 'chapter'}};
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression}),
    set('data.contents.chapter.entities.bar', {bestScore})
  )({});
  t.is(getBestScore(state), bestScore);
});

test('getCurrentClue should get current clue from state', t => {
  const progression = pipe(set('_id', 'foo'), set('state.nextContent.ref', 'bar'))({});
  const slide = {_id: 'bar'};
  const clue = 'Indice';
  const state = pipe(
    set(`data.progressions.entities.${progression._id}`, progression),
    set(`data.contents.slide.entities.${slide._id}`, slide),
    set(`data.clues.entities.${progression._id}.${slide._id}`, clue),
    set('ui.current.progressionId', 'foo')
  )({});

  t.is(getCurrentClue(state), clue);
});

test('getResourceToPlay should get resources to play from state', t => {
  const state = set('ui.corrections.playResource', true, {});

  t.true(getResourceToPlay(state));
});

test('getEngine should extract engine from state', t => {
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities.0.engine', 42)
  )({});

  t.is(getEngine(state), 42);
});

test('getLives should get lives from state', t => {
  const progression = {
    state: {lives: 100, livesDisabled: false}
  };
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getLives(state), 100);
});

test('getLives should return null if lives are disabled for the current progression', t => {
  const progression = {
    state: {lives: 100, livesDisabled: true}
  };
  const state = pipe(
    set('ui.current.progressionId', '0'),
    set('data.progressions.entities', {'0': progression})
  )({});

  t.is(getLives(state), null);
});

test('getNextContent should return nextChapter if microlearning progression', t => {
  const progression = {
    content: {ref: '1.B1', type: 'chapter'},
    state: {lives: 100, livesDisabled: true}
  };
  const state = pipe(
    set('ui.current.progressionId', 'id'),
    set('data.progressions.entities.id', progression),
    set('data.nextContent.entities.id', {ref: '1.B2'})
  )({});

  t.deepEqual(getNextContent(state), {ref: '1.B2'});
});

test('getNextContent should return nextChapter if learner progression', t => {
  const progression = {
    content: {ref: '1.B', type: 'level'},
    state: {lives: 100, livesDisabled: true}
  };
  const state = pipe(
    set('ui.current.progressionId', 'id'),
    set('data.progressions.entities.id', progression),
    set('data.nextContent.entities.id', {ref: '1.A'})
  )({});

  t.deepEqual(getNextContent(state), {ref: '1.A'});
});
