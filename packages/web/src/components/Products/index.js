import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { loadProductsRequest } from '../../Store/ducks/Products/actions';
import { formatPrice } from '../../utils/format';
import HeartIcon from '../HeartIcon';
import { Container } from './styles';

function Products() {
  const products = useSelector(state => state.Products.data)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProductsRequest());
  }, []);
  useEffect(() => {
    console.log("products: ", products)
  }, [products]);
  return (
    <Container>
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="favorite-icon">
            <HeartIcon />
          </div>
          <img src={item.image} alt={item.title} />
          <p className="title">{item.title}</p>
          <p className="price">{formatPrice(item.price)}</p>
        </div>
      ))}
    </Container>
  );
}

export default Products;
