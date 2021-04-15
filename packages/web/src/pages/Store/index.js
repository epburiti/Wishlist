import React from 'react';

import Header from '../../components/Header';
import Products from '../../components/Products';
import Loader from '../../components/Loader';

import { Container } from './styles';
import { useSelector } from 'react-redux';

function Store() {
  const { loading } = useSelector(state => state.Products)
  return (
    <Container>
      {loading && <Loader />}
      <Header />
      <Products />
    </Container>
  );
}

export default Store;
