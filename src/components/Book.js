import React from 'react';
import { PropTypes } from 'prop-types';

const Book = (props) => {
  const { book } = props;
  return (
    <div>
      <h2>
        BOOK NAME :
        {book.title}
      </h2>
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
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
