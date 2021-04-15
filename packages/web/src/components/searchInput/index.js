import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './styles';
import * as SearchActions from '../../Store/ducks/Search/actions';

function searchInput() {
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.Search.searchValue);
  return (
    <Container>
      <FaSearch size={15} color="black" className="custom-icon" />
      <input
        type="text"
        placeholder="Busca"
        value={searchValue}
        onChange={(event) => {
          dispatch(SearchActions.changeSearch(event.target.value));
        }}
      />
    </Container>
  );
}

export default searchInput;
