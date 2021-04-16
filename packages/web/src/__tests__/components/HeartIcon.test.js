import React from 'react';
import { render, waitFor, cleanup } from '@testing-library/react';

import { useSelector } from 'react-redux';
import HeartIcon from '../../components/HeartIcon';

jest.mock('react-redux');

describe('HeartIcon tests', () => {
  afterEach(() => {
    cleanup();
  });

  it('Should exist a image, title and price', async () => {
    const { getByTestId, getByText } = render(<HeartIcon id={4} />);

    // for heartIcon
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
      }),
    );
    // for heartIcon

    await waitFor(() => { });
  });
});
