import { combineReducers } from 'redux';
import Products from './Products';
import Favorites from './Favorites';

const appReducer = combineReducers({
  Products,
  Favorites
});

export default appReducer;
