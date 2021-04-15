import React from 'react';
import { useHistory } from 'react-router';

import { AiFillHome } from "react-icons/ai";
import { Container } from './styles';

function Breadcrumbs({ favorite = false }) {
  const history = useHistory();
  return (
    <Container>
      <ul>
        <li
          onClick={() => {
            history.push('/')
          }}
        >
          {/* <AiFillHome color="black" size={15} />  */}
           Home</li>
        {favorite && <li
          onClick={() => {
            history.push('/favorites')
          }}
        >Favorites</li>}
      </ul>
    </Container>
  );
}

export default Breadcrumbs;
