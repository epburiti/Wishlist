import { runSaga } from '@redux-saga/core';
import MockDockAdapter from 'axios-mock-adapter';
import { getFavorites } from '../../../Store/ducks/Favorites/sagas';
import * as Favorites from '../../../Store/ducks/Favorites/actions';

import api from '../../../services/api';

const productsRef = [
  {
    id: 0,
    sku: 8552515751438644,
    title: 'Camisa Nike Corinthians I',
    description: '14/15 s/nº',
    availableSizes: {
      S: 100,
      G: 5,
      GG: 120,
      GGG: 12,
    },
    style: 'Branco com listras pretas',
    price: 229.9,
    installments: 9,
    currencyId: 'BRL',
    currencyFormat: 'R$',
    isFreeShipping: true,
    image: 'https://via.placeholder.com/300x300',
  },
];

const apiMock = new MockDockAdapter(api);
describe('techs reducers', () => {
  it('should be able to fetch favorites', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/favorites').reply(200, productsRef);
    await runSaga({ dispatch }, getFavorites).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      Favorites.loadFavoritesSuccess(productsRef),
    );
  });
  it('should be able to fail when fetch favorites', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/favorites').reply(500);
    await runSaga({ dispatch }, getFavorites).toPromise();

    expect(dispatch).toHaveBeenCalledWith(Favorites.loadFavoritesFail());
  });
});
