import { combineReducers } from 'redux';
import Products from './Products';
import Favorites from './Favorites';
import Search from './Search';

const appReducer = combineReducers({
  Products,
  Favorites,
  Search
});

export default appReducer;
