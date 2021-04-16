import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Store from '../../pages/Store';

jest.mock('react-redux');

describe('Store tests', () => {
  it('Should be able to find a CardProdct on screen', async () => {
    useSelector.mockImplementation((cb) =>
      cb({
        Favorites: {
          data: [],
          loading: false,
          error: false,
        },
        Search: {
          searchValue: '',
        },
        Products: {
          data: [
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
          loading: false,
          error: false,
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(
      <BrowserRouter>
        <Store />
      </BrowserRouter>,
    );

    expect(getByText('Camisa Nike Corinthians I')).toBeDefined();
  });
});
