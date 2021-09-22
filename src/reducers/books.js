const BookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.data];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.title !== action.data.title);
    default:
      return state;
  }
};
export default BookReducer;
