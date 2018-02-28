import set from 'lodash/fp/set';
import {
  PROGRESSION_CREATE_ANSWER_REQUEST,
  PROGRESSION_CREATE_ANSWER_SUCCESS,
  PROGRESSION_CREATE_ANSWER_FAILURE,
  PROGRESSION_EXTRALIFEACCEPTED_REQUEST,
  PROGRESSION_EXTRALIFEACCEPTED_SUCCESS,
  PROGRESSION_EXTRALIFEACCEPTED_FAILURE,
  PROGRESSION_EXTRALIFEREFUSED_REQUEST,
  PROGRESSION_EXTRALIFEREFUSED_SUCCESS,
  PROGRESSION_EXTRALIFEREFUSED_FAILURE
} from '../../actions/api/progressions';

const uiMovingProgressionReducer = (state = {}, action = {}) => {
  switch (action.type) {
    case PROGRESSION_CREATE_ANSWER_REQUEST:
    case PROGRESSION_EXTRALIFEACCEPTED_REQUEST:
    case PROGRESSION_EXTRALIFEREFUSED_REQUEST:
      return set(action.meta.progressionId, true, state);
    case PROGRESSION_CREATE_ANSWER_SUCCESS:
    case PROGRESSION_CREATE_ANSWER_FAILURE:
    case PROGRESSION_EXTRALIFEACCEPTED_SUCCESS:
    case PROGRESSION_EXTRALIFEACCEPTED_FAILURE:
    case PROGRESSION_EXTRALIFEREFUSED_SUCCESS:
    case PROGRESSION_EXTRALIFEREFUSED_FAILURE:
      return set(action.meta.progressionId, false, state);
    default:
      return state;
  }
};

export default uiMovingProgressionReducer;
