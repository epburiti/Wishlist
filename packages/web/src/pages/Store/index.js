import React from 'react';

import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import Products from '../../components/Products';
import Loader from '../../components/Loader';

import { Container } from './styles';
import Breadcrumbs from '../../components/Breadcrumbs';

function Store() {
  const { loading } = useSelector((state) => state.Products);
  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Breadcrumbs />
      <Products />
    </Container>
  );
}

export default Store;
