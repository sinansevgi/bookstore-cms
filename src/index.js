import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import mainReducer from './reducers';
import App from './components/App';

const initialState = {
  bookList: [
    { title: 'Doctor Thorne', id: Math.floor(Math.random() * 100), category: 'History' },
    { title: 'From the Earth to the Moon', id: Math.floor(Math.random() * 100), category: 'Sci-Fi' },
    { title: 'Resurrection', id: Math.floor(Math.random() * 100), category: 'Action' },
  ],
  filter: 'All',
};

const store = createStore(mainReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
