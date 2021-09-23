import { combineReducers } from 'redux';
import bookReducer from './books';
import filterReducer from './filter';

const mainReducer = combineReducers({
  bookList: bookReducer,
  filter: filterReducer,
});

export default mainReducer;
