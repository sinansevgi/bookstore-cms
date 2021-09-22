import React, { useState } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { CREATE_BOOK } from '../actions';

const BooksForm = ({ submitBook }) => {
  const [newBook, setNewBook] = useState({
    title: '',
    category: 'Action',
    id: Math.floor(Math.random() * 1000),
  });
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const dropdownOptions = categories.map((category) => (
    <option
      key={categories.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));

  const handleChange = ({ target: { name, value } }) => {
    setNewBook({
      ...newBook,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitBook(newBook);
    setNewBook({
      title: '',
      category: 'Action',
      id: Math.floor(Math.random() * 1000),
    });
    document.getElementById('bookForm').reset();
  };

  return (
    <form action="" id="bookForm">
      <input type="text" name="title" placeholder="Book Name" onChange={handleChange} />
      <select id="categories" name="category" onChange={handleChange}>
        {dropdownOptions}
      </select>
      <button type="submit" onClick={handleSubmit}>Add Book</button>
    </form>
  );
};

BooksForm.propTypes = {
  submitBook: PropTypes.func.isRequired,
};

export default connect(null, (dispatch) => ({
  submitBook: (book) => {
    dispatch(CREATE_BOOK(book));
  },
}))(BooksForm);
