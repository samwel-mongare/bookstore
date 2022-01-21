const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const BOOKS_FETCHED = 'bookstore/books/BOOKS_FETCHED';

const initialState = [];

export const bookAdded = (payload) => ({
  type: ADD_BOOK,
  payload,
});

export const bookRemoved = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

export const booksFetched = (payload) => ({
  type: BOOKS_FETCHED,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];

    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
