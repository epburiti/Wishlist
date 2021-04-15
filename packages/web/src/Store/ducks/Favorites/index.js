import produce from 'immer';
import type from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case type.LOAD_FAVORITES_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });
    case type.LOAD_FAVORITES_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case type.LOAD_FAVORITES_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
};

export default reducer;
