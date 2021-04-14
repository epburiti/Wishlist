import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import { formatPrice } from '../../utils/format';
import HeartIcon from '../HeartIcon';
import { Container } from './styles';

function Products() {
  const [products, setProducts] = useState([]);
  async function getData() {
    const { data } = await api.get();
    setProducts(data.products);
  }
  useEffect(() => {
    getData();
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
          <p className="price">{formatPrice(item.price)}</p>
        </div>
      ))}
    </Container>
  );
}

export default Products;
