import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadFavoritesRequest = () => ({
  type: Types.LOAD_FAVORITES_REQUEST,
});

export const loadFavoritesSuccess = (object) => ({
  type: Types.LOAD_FAVORITES_SUCCESS,
  payload: object,
});
export const loadFavoritesFail = () => ({
  type: Types.LOAD_FAVORITES_FAIL,
});
