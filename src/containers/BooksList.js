import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK } from '../actions';

const BooksList = ({ bookList, removeBook }) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const library = bookList.bookList.map((book) => (
    <Book
      book={book}
      key={book.id}
      deleteFunc={handleRemoveBook}
    />
  ));
  return (
    <div>
      {library}
    </div>
  );
};

BooksList.propTypes = {
  bookList: PropTypes.instanceOf(Object).isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ bookList: state }),
  (dispatch) => ({
    removeBook: (book) => {
      dispatch(REMOVE_BOOK(book));
    },
  }),
)(BooksList);
