import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';
import './AddBook.css';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setCategory] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleAuthor = (e) => {
    setAuthor(e.target.value);
  };

  const handleCategory = (e) => {
    setCategory(e.target.value);
  };


  const categories = [
    { value: '', label: 'Category', disabled: true },
    { value: 'Action', label: 'Action' },
    { value: 'History', label: 'History' },
    { value: 'Horror', label: 'Horror' },
    { value: 'Kids', label: 'Kids' },
    { value: 'Learning', label: 'Learning' },
    { value: 'Sci-Fi', label: 'Sci-Fi' },
  ];

  return (
    <div className="container">
      <h2 className="addhead">ADD NEW BOOK</h2>
      <form id="addBook" >
        <div className="formcontrol">
          <input
            type="text"
            className="input-text"
            placeholder="Add Title"
            style={{ flex: 4 }}
            name="title"
            required
            value={title}
            onChange={handleTitle}
          />
          <input
            type="text"
            className="input-text"
            placeholder="Add Author"
            style={{ flex: 3 }}
            required
            value={author}
            onChange={handleAuthor}
          />
          <select
            name="category"
            className="input-select"
            required
            value={category}
            style={{ flex: 2 }}
            onChange={handleCategory}
          >
            {categories.map((category) => (
              <option
                key={category.value}
                value={category.value}
                disabled={category.disabled}
              >
                {category.label}
              </option>
            ))}
          </select>
          <button style={{ flex: 1 }} type="submit">ADD BOOK</button>
        </div>
      </form>
    </div>
  );
};

export default BookForm;
