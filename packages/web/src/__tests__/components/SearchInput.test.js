import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { useDispatch, useSelector } from 'react-redux';

import SearchInput from '../../components/SearchInput';

jest.mock('react-redux');

describe('SearchInput tests', () => {
  it('Should be able to change the value', async () => {
    useSelector.mockImplementation((cb) =>
      cb({
        Search: {
          searchValue: '',
        },
      }),
    );

    const dispatch = jest.fn();
    useDispatch.mockReturnValue(dispatch);
    const { getByTestId } = render(<SearchInput />);

    fireEvent.change(getByTestId('searchInputRef'), {
      target: { value: 'Node.js' },
    });
    console.log('aqui666: ', dispatch.mock.calls);
    expect(dispatch).toHaveBeenCalledWith({
      type: '@search/CHANGE_VALUE',
      searchValue: 'Node.js',
    });
  });
});
