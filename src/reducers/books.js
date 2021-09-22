const BookReducer = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_BOOK':
      return [...state, action.payload];
    case 'REMOVE_BOOK':
      return state.filter((book) => book.title !== action.payload.title);
    default:
      return state;
  }
};
export default BookReducer;
