import { put } from 'redux-saga/effects';

import { loadFavoritesSuccess, loadFavoritesFail } from './actions';
import { getFavoritesData } from '../../../services/favorites';

export function* getFavorites() {
  try {
    const { data: myData } = yield getFavoritesData();
    yield put(loadFavoritesSuccess(myData));
  } catch (err) {
    yield put(loadFavoritesFail());
    console.error(err);
    alert('Houve ume erro');
  }
}
