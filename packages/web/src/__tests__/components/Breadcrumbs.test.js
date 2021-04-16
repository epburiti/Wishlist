import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';

describe('Breadcrumbs tests', () => {
  it('Should exist the links and the text', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Breadcrumbs favorite />
      </BrowserRouter>,
    );

    const home = getByTestId('linkHome');
    expect(home).toHaveAttribute('href');
    expect(home.href).toBe('http://localhost/');
    expect(getByText('Home')).toBeDefined();

    const favorite = getByTestId('linkFavorites');
    expect(favorite).toHaveAttribute('href');
    expect(favorite.href).toBe('http://localhost/favorites');
    expect(getByText('Favorites')).toBeDefined();
  });
});
