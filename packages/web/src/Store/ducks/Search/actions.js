import Types from './types';

export const changeSearch = (searchValue) => ({
  type: Types.CHANGE_VALUE,
  searchValue,
});
