import React from 'react';

import Header from '../../components/Header';
import Products from '../../components/Products';

import { Container } from './styles';

function Store() {
  return (
    <Container>
      <Header />
      <Products />
    </Container>
  );
}

export default Store;
