import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Book from '../components/Book';
import { REMOVE_BOOK, CHANGE_FILTER } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

const BooksList = ({
  bookList, removeBook, filter, filterChange,
}) => {
  const handleRemoveBook = (book) => {
    removeBook(book);
  };
  const handleFilterChange = (filter) => {
    filterChange(filter);
  };
  const library = bookList
    .filter((book) => (filter === 'All' ? book : book.category === filter))
    .map((book) => (
      <Book
        book={book}
        key={book.id}
        deleteFunc={handleRemoveBook}
      />
    ));
  return (
    <div>
      {library}
      <CategoryFilter handleFilterChange={handleFilterChange} />
    </div>
  );
};

BooksList.propTypes = {
  bookList: PropTypes.instanceOf(Object).isRequired,
  filter: PropTypes.string.isRequired,
  removeBook: PropTypes.func.isRequired,
  filterChange: PropTypes.func.isRequired,
};

export default connect(
  (state) => ({ bookList: state.bookList, filter: state.filter }),
  (dispatch) => ({
    removeBook: (book) => {
      dispatch(REMOVE_BOOK(book));
    },
    filterChange: (filter) => {
      dispatch(CHANGE_FILTER(filter));
    },
  }),
)(BooksList);
