import React from 'react';

import Header from '../../components/Header';
import Products from '../../components/Products';
import Loader from '../../components/Loader';

import { Container } from './styles';
import { useSelector } from 'react-redux';
import Breadcrumbs from '../../components/Breadcrumbs';

function Favorites() {
  const { loading } = useSelector(state => state.Favorites)
  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Breadcrumbs favorite />
      {/* <Products /> */}
    </Container>
  );
}

export default Favorites;
