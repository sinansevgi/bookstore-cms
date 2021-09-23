import React from 'react';
import { PropTypes } from 'prop-types';

const CategoryFilter = ({ handleFilterChange }) => {
  const categories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  const dropdownOptions = categories.map((category) => (
    <option
      key={categories.indexOf(category)}
      value={category}
    >
      {category}
    </option>
  ));
  const handleChange = (event) => {
    handleFilterChange(event.target.value);
  };
  return (
    <div>
      <select onChange={handleChange}>
        {dropdownOptions}
      </select>
    </div>
  );
};

CategoryFilter.propTypes = {
  handleFilterChange: PropTypes.func.isRequired,
};
export default CategoryFilter;
