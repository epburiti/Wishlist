import reducer, { INITIAL_STATE } from '../../../Store/ducks/Search/index';
import * as Search from '../../../Store/ducks/Search/actions';

describe('Search reducers', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('@search/CHANGE_VALUE', () => {
    const state = reducer(
      INITIAL_STATE,
      Search.changeSearch({ searchValue: 'Node.js' }),
    );

    expect(state).toStrictEqual({ searchValue: { searchValue: 'Node.js' } });
  });
});
