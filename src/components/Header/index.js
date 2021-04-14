import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaHeart, FaSearch } from 'react-icons/fa';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="content">
        <div className="content-title">
          <h5>MagaNets</h5>
        </div>

        <div className="content-search">
          <ul>
            <li>
              <FaMapMarkerAlt size={10} color="white" /> Cidade: São paulo
            </li>
            <li>
              <FaPhoneAlt size={10} color="white" /> Central de atendimento
            </li>
            <li>
              <FaHeart size={10} color="white" /> Lista de desejos
            </li>
          </ul>
          <div className="search">
            <FaSearch size={15} color="black" className="custom-icon" />
            <input type="text" />
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Header;
