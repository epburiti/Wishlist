import api from './api';

export async function getFavoritesData() {
  const response = await api.get('/favorites');
  return response;
}
export async function newFavorite(id) {
  const response = await api.post('/favorites', {
    id,
  });
  return response;
}

export async function deleteFavorite(favoriteId) {
  const response = await api.delete(`/favorites/${favoriteId}`);
  return response;
}
