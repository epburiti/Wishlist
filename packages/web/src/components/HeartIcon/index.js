import React, { useEffect, useState } from 'react';

import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import api from '../../services/api';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';

import { Container } from './styles';

function HeartIcon({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector(state => state.Favorites.data);
  const [favorite, setFavorite] = useState(false);
  const [favoritesId, setFavoritesId] = useState();

  useEffect(() => {
    const indexOf = favorites.findIndex((item) => item.id == id);

    if (indexOf >= 0) {
      setFavorite(true);
      setFavoritesId(favorites[indexOf].favoritesId);
    } else {
      setFavoritesId("");
    }
  }, [favorites]);
  async function addToFavorite() {
    try {
      setFavorite(state => true);
      await api.post('/favorites', {
        id
      });
      dispatch(loadFavoritesRequest());

    } catch (error) {
      console.error(error);
      setFavorite(state => false);

      alert("erro ao atualizar favorito, tente novamente...")
    }
  }
  async function removeFromFavorite() {
    console.log(favoritesId)
    try {
      setFavorite(state => false);
      await api.delete('/favorites', {
        data: { favoritesId: favoritesId }
      });
      dispatch(loadFavoritesRequest());

    } catch (error) {
      console.error(error);
      setFavorite(state => true);
      alert("erro ao atualizar favorito, tente novamente...")
    }
  }
  return (
    <Container>
      {
        !favorite && (
          <AiOutlineHeart
            size={20}
            color="black"
            onClick={() => {
              addToFavorite();
            }}
          />
        )}
      {favorite && (
        <AiTwotoneHeart
          size={20}
          color="red"
          onClick={() => {
            removeFromFavorite();
          }}
        />
      )}
    </Container>
  );
}

export default HeartIcon;
