import React from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Book from '../components/Book';

const BooksList = ({ bookList }) => {
  const library = bookList.bookList.map((book) => <Book book={book} key={book.id} />);
  return (
    <div>
      {library}
    </div>
  );
};

BooksList.propTypes = {
  bookList: PropTypes.instanceOf(Object).isRequired,
};

export default connect((state) => ({ bookList: state }))(BooksList);
