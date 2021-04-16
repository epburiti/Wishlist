import reducer, { INITIAL_STATE } from '../../../Store/ducks/Products/index';
import * as Products from '../../../Store/ducks/Products/actions';

describe('Products reducers', () => {
  it('DEFAULT', () => {
    const state = reducer(undefined, {});

    expect(state).toStrictEqual(INITIAL_STATE);
  });
  it('@products/LOAD_PRODUCTS_REQUEST', () => {
    const state = reducer(INITIAL_STATE, Products.loadProductsRequest());

    expect(state).toStrictEqual({
      data: [],
      loading: true,
      error: false,
    });
  });
  it('@products/LOAD_PRODUCTS_SUCCESS', () => {
    const state = reducer(INITIAL_STATE, Products.loadProductsSuccess([]));

    expect(state).toStrictEqual({
      data: [],
      loading: false,
      error: false,
    });
  });
  it('@products/LOAD_PRODUCTS_FAIL', () => {
    const state = reducer(INITIAL_STATE, Products.loadProductsFail());

    expect(state).toStrictEqual({
      data: [],
      loading: false,
      error: true,
    });
  });
});
