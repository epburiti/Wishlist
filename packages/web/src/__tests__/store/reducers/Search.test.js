import reducer, { INITIAL_STATE } from '../../../Store/ducks/Search/actions';
import * as Search from '../../../Store/ducks/Search/actions';

describe('Search reducers', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('ADD_TECH', () => {
    const state = reducer(INITIAL_STATE, Search.addTech('Node.js'));

    expect(state).toStrictEqual(['Node.js']);
  });
});
