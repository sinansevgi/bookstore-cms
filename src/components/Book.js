import React from 'react';
import { PropTypes } from 'prop-types';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Book = ({ book, deleteFunc }) => {
  const percentage = Math.floor(Math.random() * 100);
  const authorList = [
    'Fyodor Dostoevsky',
    'Dante Alighieri',
    'Lev Tolstoy',
    'Victor Hugo',
    'William Shakespeare',
    ' Johann Wolfgang von Goethe',
    'Miguel de Cervantes y Saavedra',
    'Italo Calvino',
    'Stendhal',
    'Marcel Proust',
  ];
  return (
    <div className="book">
      <div className="book-info">
        <h5>{book.category}</h5>
        <h2>{book.title}</h2>
        <h6>{authorList[Math.floor(Math.random() * 10)]}</h6>
        <div className="book-menu">
          <button className="book-button" type="button">Comments</button>
          <span className="separator" />
          <button
            className="book-button"
            type="submit"
            onClick={() => {
              deleteFunc(book);
            }}
          >
            Remove
          </button>
          <span className="separator" />
          <button className="book-button" type="button">Edit</button>
        </div>

      </div>
      <div className="read-stats">
        <div className="progress">
          <CircularProgressbar value={percentage} />
        </div>
        <div className="progress-info">
          <p>
            {`${percentage}%`}
          </p>
          <p className="completed">Completed</p>
        </div>
      </div>
      <div className="chapter-info">
        <div>
          <p className="chapter-title">CURRENT CHAPTER</p>
          <p className="chapter-name">
            {`Chapter ${Math.floor(percentage / 10)}`}
          </p>
        </div>
        <button className="progress-button" type="button">UPDATE PROGRESS</button>
      </div>
    </div>
  );
};
Book.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
  deleteFunc: PropTypes.func.isRequired,

};

export default Book;
