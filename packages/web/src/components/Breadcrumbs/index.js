import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';

function Breadcrumbs({ favorite = false }) {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {favorite && (
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        )}
      </ul>
    </Container>
  );
}

export default Breadcrumbs;
