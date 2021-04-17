import api from './api';

export async function getProductsData() {
  const response = await api.get('/products');
  return response;
}
