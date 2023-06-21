import { createSlice } from '@reduxjs/toolkit';

const generateId = () => `item${Math.random().toString(36).substr(2, 9)}`;

const initialState = [
  {
    item_id: 'item1',
    title: 'The Great Gatsby',
    author: 'John Smith',
    category: 'Fiction',
  },
  {
    item_id: 'item2',
    title: 'Anna Karenina',
    author: 'Leo Tolstoy',
    category: 'Fiction',
  },
  {
    item_id: 'item3',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    category: 'Nonfiction',
  },
];

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      const newBook = {
        item_id: generateId(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
      };
      state.push(newBook);
    },
    removeBook: (state, action) => {
      const bookIndex = state.findIndex((book) => book.item_id === action.payload);
      if (bookIndex !== -1) {
        state.splice(bookIndex, 1);
      }
    },
  },
});

export const { addBook, removeBook } = booksSlice.actions;
export default booksSlice.reducer;
