import React from 'react';
import { formatPrice } from '../../utils/format';
import HeartIcon from '../HeartIcon';
import { Container } from './styles';

function CardProduct({ id, title, image, price }) {
  return (
    <Container>
      <div className="card" key={id}>
        <div className="favorite-icon">
          <HeartIcon id={id} />
        </div>
        <img src={image} alt={title} data-testid="cardImage" />
        <p className="title">{title}</p>
        <p className="price">{formatPrice(price)}</p>
      </div>
    </Container>
  );
}

export default CardProduct;
