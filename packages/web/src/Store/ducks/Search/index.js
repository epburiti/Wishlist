import type from './types';
import produce from 'immer';

const INITIAL_STATE = {
  searchValue: "",
}

const reducer = (state = INITIAL_STATE, action) => {
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
