import { combineReducers } from 'redux';
import bookReducer from './books';

const mainReducer = combineReducers({
  bookList: bookReducer,
});

export default mainReducer;
