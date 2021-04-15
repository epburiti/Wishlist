import { all, takeLatest } from 'redux-saga/effects';
import ProductTypes from './Products/types';
import FavoritesTypes from './Favorites/types';
import { getProducts } from './Products/sagas';
import { getFavorites } from './Favorites/sagas';

export default function* rootSaga() {
  return yield all([
    takeLatest(ProductTypes.LOAD_PRODUCTS_REQUEST, getProducts),
    takeLatest(FavoritesTypes.LOAD_FAVORITES_REQUEST, getFavorites),
  ]);
}
