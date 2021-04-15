import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { useHistory } from 'react-router';
import SearchInput from '../searchInput';
import { Container } from './styles';

function Header() {
  const history = useHistory();
  return (
    <Container>
      <div className="content">
        <div className="content-title">
          <h5 onClick={
            () => {
              history.push('/')
            }} >MagaNets</h5>
        </div>

        <div className="content-search">
          <ul>
            <li>
              <FaMapMarkerAlt size={10} color="white" /> Cidade: São paulo
            </li>
            <li>
              <FaPhoneAlt size={10} color="white" /> Central de atendimento
            </li>
            <li onClick={
              () => {
                history.push('/favorites')
              }
            }>

              <FaHeart size={10} color="white" /> Lista de desejos
            </li>
          </ul>
          <SearchInput />
        </div>
      </div>
    </Container>
  );
}

export default Header;
