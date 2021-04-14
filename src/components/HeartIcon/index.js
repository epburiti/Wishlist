import React, { useState } from 'react';

import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { Container } from './styles';

function HeartIcon() {
  const [favorite, setFavorite] = useState(true);
  return (
    <Container>
      {favorite && (
        <AiOutlineHeart
          size={20}
          color="black"
          onClick={() => {
            setFavorite(!favorite);
          }}
        />
      )}
      {!favorite && (
        <AiTwotoneHeart
          size={20}
          color="red"
          onClick={() => {
            setFavorite(!favorite);
          }}
        />
      )}
    </Container>
  );
}

export default HeartIcon;
