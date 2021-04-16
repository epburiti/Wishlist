import React from 'react';
import { fireEvent, render } from '@testing-library/react';

import { useDispatch, useSelector } from 'react-redux';
import HeartIcon from '../../components/HeartIcon';

jest.mock('react-redux');
const favorites = [
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
  {
    id: 1,
    sku: 18644119330491310,
    title: 'Camisa Nike Corinthians II',
    description: '14/15 s/nº',
    availableSizes: {
      S: 100,
      G: 5,
      GG: 120,
      GGG: 12,
    },
    style: 'Preta com listras brancas',
    price: 229.9,
    installments: 9,
    currencyId: 'BRL',
    currencyFormat: 'R$',
    isFreeShipping: true,
    image: 'https://via.placeholder.com/300x300',
    favoritesId: 'TZAEW1VfUSRCulsrIh3c',
  },
];
describe('HeartIcon tests', () => {
  it('Should add to favorite', async () => {
    useSelector.mockImplementation((cb) =>
      cb({
        Favorites: {
          data: favorites,
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);

    const { getByTestId } = render(<HeartIcon id={8} />);

    fireEvent.click(getByTestId('HeartIconAdd'));
    expect(dispatch).toHaveBeenCalledWith({
      type: '@favorites/LOAD_FAVORITES_REQUEST',
    });
  });
});
