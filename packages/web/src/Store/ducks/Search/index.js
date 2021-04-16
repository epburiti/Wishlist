import { enableES5, produce } from 'immer';
import type from './types';

export const INITIAL_STATE = {
  searchValue: '',
};

const reducer = (state = INITIAL_STATE, action) => {
  enableES5();

  switch (action.type) {
    case type.CHANGE_VALUE:
      return produce(state, (draft) => {
        draft.searchValue = action.searchValue;
      });

    default:
      return state;
  }
};

export default reducer;
