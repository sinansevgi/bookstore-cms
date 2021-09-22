import React from 'react';
import { PropTypes } from 'prop-types';

const Book = ({ book, deleteFunc }) => (
  <div className="book">
    <div>
      ISBN ID :
      <br />
      {book.id}
    </div>
    <div>
      BOOK NAME :
      <br />
      {book.title}
    </div>
    <div>
      CATEGORY :
      <br />
      {book.category}
    </div>
    <div>
      <button type="submit" onClick={() => { deleteFunc(book); }}>
        Delete Book
      </button>
    </div>
  </div>
);
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteFunc: PropTypes.func.isRequired,

};

export default Book;
