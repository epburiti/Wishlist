import Types from './types';

// primeiro parametro é o type do action e o segundo um pay load se tiver
export const loadProductsRequest = (
) => ({
  type: Types.LOAD_PRODUCTS_REQUEST,
});

export const loadProductsSuccess = (object) => ({
  type: Types.LOAD_PRODUCTS_SUCCESS,
  payload: object,
});
export const loadProductsFail = () => ({
  type: Types.LOAD_PRODUCTS_FAIL,
});
