import React from 'react';

const BooksForm = () => {
  const categories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const dropdownOptions = categories.map((category) => (
    <option
      key={categories.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));
  return (
    <form action="">
      <input type="text" placeholder="Book Name" />
      <select id="categories" name="categories">
        {dropdownOptions}
      </select>
      <button type="submit">Add Book</button>
    </form>
  );
};

export default BooksForm;
