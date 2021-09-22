const CREATE_BOOK = (data) => ({
  type: 'CREATE_BOOK',
  payload: data,
});

const REMOVE_BOOK = (data) => ({
  type: 'REMOVE_BOOK',
  payload: data,
});

export {
  CREATE_BOOK,
  REMOVE_BOOK,
};
