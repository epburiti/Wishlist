import { runSaga } from '@redux-saga/core';
import MockDockAdapter from 'axios-mock-adapter';
import { getProducts } from '../../../Store/ducks/Products/sagas';
import * as Products from '../../../Store/ducks/Products/actions';

import api from '../../../services/api';

window.alert = jest.fn();

const productsRef = {
  products: [
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
  ],
};
const apiMock = new MockDockAdapter(api);
describe('Products reducers', () => {
  it('should be able to fetch Products', async () => {
    const dispatch = jest.fn();

    apiMock.onGet('/products').reply(200, productsRef);
    await runSaga({ dispatch }, getProducts).toPromise();

    expect(dispatch).toHaveBeenCalledWith(
      Products.loadProductsSuccess(productsRef.products),
    );
  });
  it('should be able to fail when fetch Products', async () => {
    window.alert.mockClear();
    const dispatch = jest.fn();

    apiMock.onGet('/products').reply(500);
    await runSaga({ dispatch }, getProducts).toPromise();
    expect(dispatch).toHaveBeenCalledWith(Products.loadProductsFail());
  });
});
