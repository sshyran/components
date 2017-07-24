import get from 'lodash/fp/get';
import {fetchProgression, fetchBestProgression} from '../api/progressions';
import {fetchSlide} from '../api/slides';
import {fetchEndRank, fetchStartRank} from '../api/rank';
import {fetchExitNode} from '../api/exit-nodes';
import {fetchChapter} from '../api/chapters';
import {fetchRecommendations} from '../api/recommendations';
import {
  getCurrentProgression,
  getCurrentProgressionId,
  getCurrentContent
} from '../../utils/state-extract';

export const UI_SELECT_PROGRESSION = '@@ui/SELECT_PROGRESSION';

export const selectProgression = id => async (dispatch, getState) => {
  await dispatch({
    type: UI_SELECT_PROGRESSION,
    payload: {
      id
    }
  });

  const progressionId = getCurrentProgressionId(getState());
  const response = await dispatch(fetchProgression(progressionId));
  if (response.error) return response;

  const progression = getCurrentProgression(getState());
  const {ref, type} = getCurrentContent(getState());
  const chapterRef = get('content.ref', progression);

  await dispatch(fetchStartRank());
  await dispatch(fetchChapter(chapterRef));
  await dispatch(fetchBestProgression(chapterRef));

  switch (type) {
    case 'slide': {
      return dispatch(fetchSlide(ref));
    }
    case 'success':
    case 'failure': {
      await dispatch(fetchEndRank(progressionId));
      await dispatch(fetchRecommendations(progressionId));
      return dispatch(fetchExitNode(ref));
    }
  }
};
