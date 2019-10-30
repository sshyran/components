import get from 'lodash/fp/get';
import reduce from 'lodash/fp/reduce';
import chapterRulesData from './data/chapter-rules';

const toMapByChapterRef = reduce((m, object) => m.set(object.chapterRef, object));
const chapterRules = toMapByChapterRef(new Map(), chapterRulesData);

const getChapterRulesByContent = ref => {
  return Promise.resolve(get('rules', chapterRules.get(ref)));
};

export {getChapterRulesByContent};
