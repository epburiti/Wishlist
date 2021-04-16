import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Products from '../../components/Products';

jest.mock('react-redux');

describe('Products tests', () => {
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
          loading: false,
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
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(
      <BrowserRouter>
        <Products />
      </BrowserRouter>,
    );

    expect(getByText('Camisa Nike Corinthians I')).toBeDefined();
  });
});
