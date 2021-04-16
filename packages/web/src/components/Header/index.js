import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import SearchInput from '../SearchInput';
import { Container } from './styles';

function Header() {
  return (
    <Container>
      <div className="content">
        <div className="content-title">
          <h5>
            <Link to="/" data-testid="headerLinkHome">
              MagaNets
            </Link>
          </h5>
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
              <Link to="/favorites" data-testid="headerLinkFavorites">
                <FaHeart size={10} color="white" /> Lista de desejos
              </Link>
            </li>
          </ul>
          <SearchInput />
        </div>
      </div>
    </Container>
  );
}

export default Header;
