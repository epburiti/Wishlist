import React from 'react';
import { render } from '@testing-library/react';

import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from '../../components/Header';

jest.mock('react-redux');

describe('Header tests', () => {
  it('Should exist the links and the texts', async () => {
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>,
    );
    useSelector.mockImplementation((cb) =>
      cb({
        Search: {
          searchValue: '',
        },
      }),
    );

    const headerLinkHome = getByTestId('headerLinkHome');
    expect(headerLinkHome).toHaveAttribute('href');
    expect(headerLinkHome.href).toBe('http://localhost/');
    expect(getByText('MagaNets')).toBeDefined();

    const headerLinkFavorites = getByTestId('headerLinkFavorites');
    expect(headerLinkFavorites).toHaveAttribute('href');
    expect(headerLinkFavorites.href).toBe('http://localhost/favorites');
    expect(getByText('Lista de desejos')).toBeDefined();

    expect(getByText('Cidade: São paulo')).toBeDefined();
    expect(getByText('Central de atendimento')).toBeDefined();
    expect(getByText('Lista de desejos')).toBeDefined();
  });
});
