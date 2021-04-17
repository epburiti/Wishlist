import React, { useEffect, useState } from 'react';

import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFavorite, newFavorite } from '../../services/favorites';
import { loadFavoritesRequest } from '../../Store/ducks/Favorites/actions';

import { Container, Loader } from './styles';

function HeartIcon({ id }) {
  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.Favorites.data);
  const [favorite, setFavorite] = useState(false);
  const [favoritesId, setFavoritesId] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!favorites) return;
    const indexOf = favorites.findIndex((item) => item.id == id);
    if (indexOf >= 0) {
      setFavorite(true);
      setFavoritesId(favorites[indexOf].favoritesId);
    } else {
      setFavoritesId('');
    }
  }, [favorites]);
  async function addToFavorite() {
    if (id < 0) return;
    setLoading(true);
    try {
      setFavorite(true);
      await newFavorite(id);
      dispatch(loadFavoritesRequest());
    } catch (error) {
      console.error(error);
      setFavorite(false);

      alert('erro ao atualizar favorito, tente novamente...');
    }
    setLoading(false);
  }
  async function removeFromFavorite() {
    if (!favoritesId) return;

    setLoading(true);

    try {
      setFavorite(false);
      await deleteFavorite(favoritesId);
      dispatch(loadFavoritesRequest());
    } catch (error) {
      console.error(error);
      setFavorite(true);
      alert('erro ao atualizar favorito, tente novamente...');
    }
    setLoading(false);
  }
  return (
    <Container>
      {loading ? (
        <div>
          <Loader />
        </div>
      ) : (
        <div>
          {!favorite ? (
            <AiOutlineHeart
              size={20}
              color="black"
              data-testid="HeartIconAdd"
              onClick={() => {
                addToFavorite();
              }}
            />
          ) : (
            <AiTwotoneHeart
              size={20}
              color="red"
              onClick={() => {
                removeFromFavorite();
              }}
            />
          )}
        </div>
      )}
    </Container>
  );
}

export default HeartIcon;
