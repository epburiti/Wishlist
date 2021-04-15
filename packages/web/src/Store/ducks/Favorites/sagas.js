import { call, put } from 'redux-saga/effects';

import { loadFavoritesSuccess, loadFavoritesFail } from './actions';
import api from '../../../services/api';

export function* getFavorites() {
  try {
    const
      { data: myData }
        = yield call(
          api.get,
          `/favorites`,
        );
    console.log("resposta requisição favoritos: ", myData)
    yield put(loadFavoritesSuccess(myData));
  } catch (err) {
    console.error(err);
    alert('Houve ume erro');
    console.error(err);
    yield put(loadFavoritesFail());
  }
}
