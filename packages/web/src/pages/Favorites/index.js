import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';

import Breadcrumbs from '../../components/Breadcrumbs';
import CardProduct from '../../components/CardProduct';

import { Container } from './styles';

function Favorites() {
  const { loading, data } = useSelector((state) => state.Favorites);
  const searchValue = useSelector((state) => state.Search.searchValue);
  const [favoritesRef, setFavoritesRef] = useState([]);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadFavoritesRequest());
  }, []);

  useEffect(() => {
    setFavoritesRef(data);
  }, [data]);

  useEffect(() => {
    if (searchValue.trim() === '') {
      setFavoritesRef(data);
      return;
    }
    const ref = data.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase()),
    );
    setFavoritesRef(ref);
  }, [searchValue]);
  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Breadcrumbs favorite />
      <div className="container-favorites">
        {favoritesRef.length ? (
          favoritesRef.map((item) => <CardProduct {...item} key={item.id} />)
        ) : (
          <h5>Você não tem nenhum item salvo nos favoritos</h5>
        )}
      </div>
    </Container>
  );
}

export default Favorites;
