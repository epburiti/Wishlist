import React from 'react';
import { useHistory } from 'react-router';

import { Container } from './styles';

function Breadcrumbs({ favorite = false }) {
  const history = useHistory();
  return (
    <Container>
      <ul>
        <li>
          <button
            type="button"
            onClick={() => {
              history.push('/');
            }}
          >
            Home
          </button>
          {/* <AiFillHome color="black" size={15} />  */}
        </li>
        {favorite && (
          <li>
            <button
              type="button"
              onClick={() => {
                history.push('/favorites');
              }}
            >
              Favorites
            </button>
          </li>
        )}
      </ul>
    </Container>
  );
}

export default Breadcrumbs;
