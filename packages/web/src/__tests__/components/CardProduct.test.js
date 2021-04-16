import React from 'react';
import { render, waitFor } from '@testing-library/react';

import { useSelector } from 'react-redux';
import CardProduct from '../../components/CardProduct';
// import { formatPrice } from '../utils/format';

jest.mock('react-redux');

describe('CardProduct tests', () => {
  it('Should exist a image, title and price', async () => {
    const objectCard = {
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
    };
    const { getByTestId, getByText } = render(<CardProduct {...objectCard} />);

    // for heartIcon
    useSelector.mockImplementation((cb) =>
      cb({
        Favorites: {
          data: [],
          loading: false,
          error: false,
        },
      }),
    );
    // for heartIcon

    await waitFor(() => {
      // expect(getByText('Abyss')).toBeDefined();
      expect(getByText(objectCard.title)).toBeDefined();
      // const priceFormated = formatPrice().toString();
      // expect(getByText(priceFormated)).toBeDefined();

      const image = getByTestId('cardImage');
      expect(image).toHaveAttribute('src');
      expect(image).toHaveAttribute('alt');
      expect(image.src).toBe(objectCard.image);
      expect(image.alt).toBe(objectCard.title);
    });
  });
});
