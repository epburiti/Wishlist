import React, { useEffect } from 'react';

import Header from '../../components/Header';
import Loader from '../../components/Loader';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';

import { useDispatch, useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs';
import CardProduct from '../../components/CardProduct';

import { Container } from './styles';

function Favorites() {
  const { loading, data } = useSelector(state => state.Favorites);
  const dispatch = useDispatch();
  useEffect(() => {


    dispatch(loadFavoritesRequest());
  }, []);
  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Breadcrumbs favorite />
      <div className="container-favorites">
        {data.map((item) => (
          <CardProduct {...item} key={item.id} />
        ))}
        {!data.length &&
          <h5>Você não tem nenhum item salvo nos favoritos</h5>
        }
      </div>
    </Container>
  );
}

export default Favorites;
