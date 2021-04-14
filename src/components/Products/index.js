import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import HeartIcon from '../HeartIcon';
import { Container } from './styles';

function Products() {
  const [products, setProducts] = useState([]);
  useEffect(async () => {
    const { data } = await api.get();
    setProducts(data.products);
  }, []);
  return (
    <Container>
      {products.map((item) => (
        <div className="card" key={item.id}>
          <div className="favorite-icon">
            <HeartIcon />
          </div>
          <img src={item.image} alt={item.title} />
          <p className="title">{item.title}</p>
          <p className="price">{item.price}</p>
        </div>
      ))}
    </Container>
  );
}

export default Products;
