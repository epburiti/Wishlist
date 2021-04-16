import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Breadcrumbs({ favorite = false }) {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/" data-testid="linkHome">
            Home
          </Link>
        </li>
        {favorite && (
          <li>
            <Link to="/favorites" data-testid="linkFavorites">
              Favorites
            </Link>
          </li>
        )}
      </ul>
    </Container>
  );
}

export default Breadcrumbs;
