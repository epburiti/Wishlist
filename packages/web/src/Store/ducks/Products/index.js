import { enableES5, produce } from 'immer';

import type from './types';

const INITIAL_STATE = {
  data: [],
  loading: false,
  error: false,
};
const reducer = (state = INITIAL_STATE, action) => {
  enableES5();

  switch (action.type) {
    case type.LOAD_PRODUCTS_REQUEST:
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = false;
      });
    case type.LOAD_PRODUCTS_SUCCESS:
      return produce(state, (draft) => {
        draft.data = action.payload;
        draft.loading = false;
        draft.error = false;
      });
    case type.LOAD_PRODUCTS_FAIL:
      return produce(state, (draft) => {
        draft.loading = false;
        draft.error = true;
      });

    default:
      return state;
  }
};

export default reducer;
