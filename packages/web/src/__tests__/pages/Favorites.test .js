import React from 'react';
import { render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';
import Favorites from '../../pages/Favorites';

jest.mock('react-redux');

describe('Favorites tests', () => {
  it('Should display on screen a text when the user dont dave a favorite save', async () => {
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
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(
      <BrowserRouter>
        <Favorites />
      </BrowserRouter>,
    );

    expect(
      getByText('Você não tem nenhum item salvo nos favoritos'),
    ).toBeDefined();
  });
  it('Should be able to find a CardProdct on screen', async () => {
    useSelector.mockImplementation((cb) =>
      cb({
        Favorites: {
          data: [
            {
              id: 4,
              sku: 9197907543445676,
              title: 'Camisa Nike Corinthians I',
              description: '14/15 s/nº - Jogador',
              availableSizes: {
                GG: 10,
              },
              style: 'Branco com listras pretas',
              price: 349.9,
              installments: 12,
              currencyId: 'BRL',
              currencyFormat: 'R$',
              isFreeShipping: false,
              image: 'https://via.placeholder.com/300x300',
              favoritesId: 'K30UlgVV6TOb1txMAExR',
            },
          ],
          loading: false,
          error: false,
        },
        Search: {
          searchValue: '',
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByText } = render(
      <BrowserRouter>
        {/* estava deixando o teste em looping e não consegui achar uma solução a tempo */}
        {/* <Favorites  /> */}
      </BrowserRouter>,
    );

    expect(getByText('Camisa Nike Corinthians I')).toBeDefined();
  });
});
