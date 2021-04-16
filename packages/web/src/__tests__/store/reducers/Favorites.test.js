import reducer, { INITIAL_STATE } from '../../../Store/ducks/Favorites/index';
import * as Favorites from '../../../Store/ducks/Favorites/actions';

describe('Favorites reducers', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('@favorites/LOAD_Favorites_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Favorites.loadFavoritesRequest());

    expect(state).toStrictEqual({
      data: [],
      loading: true,
      error: false,
    });
  });
  it('@favorites/LOAD_FAVORITES_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Favorites.loadFavoritesSuccess([]));

    expect(state).toStrictEqual({
      data: [],
      loading: false,
      error: false,
    });
  });
  it('@favorites/LOAD_FAVORITES_FAIL', () => {
    const state = reducer(INITIAL_STATE, Favorites.loadFavoritesFail());

    expect(state).toStrictEqual({
      data: [],
      loading: false,
      error: true,
    });
  });
});
