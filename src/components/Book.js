import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ book }) => (
  <div className="book">
    <h3>
      BOOK NAME :
      {book.title}
    </h3>
    <p>
      ISBN ID :
      {book.id}
    </p>
    <p>
      CATEGORY :
      {book.category}
    </p>
  </div>
);
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
