const CREATE_BOOK = (data) => ({
  type: 'CREATE_BOOK',
  payload: data,
});

const REMOVE_BOOK = (data) => ({
  type: 'REMOVE_BOOK',
  payload: data,
});

const CHANGE_FILTER = (category) => ({
  type: 'CHANGE_FILTER',
  payload: category,
});

export {
  CREATE_BOOK,
  REMOVE_BOOK,
  CHANGE_FILTER,
};
