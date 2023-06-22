import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook } from '../redux/books/booksSlice';
import '../styles/AddBook.css';

const categories = [
  'Select Category',
  'Action',
  'Dystopian',
  'Fantasy',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
  'Spritual',
  'Romance',
  'Thriller',
  'Realist',
];
function AddBook() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [category, setcategory] = useState('Select category');

  const handleSubmit = async () => {
    if (author !== '' && title !== '') {
      dispatch(
        addBook({
          item_id: uuidv4(),
          title,
          author,
          category,
        }),
      )
        .unwrap()
        .then(() => {
          setTitle('');
          setAuthor('');
        });
    }
  };

  return (
    <>
      <hr />
      <div className="container ">
        <h2 className="addhead">ADD NEW BOOK</h2>
        <div>
          <form id="addBook">
            <div className="formcontrol ">
              <input
                type="text"
                className="input-text "
                placeholder="Book Title"
                required
                style={{ flex: 4 }}
                name="title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
              <input
                type="text"
                className="input-text"
                placeholder="Author Name"
                style={{ flex: 3 }}
                required
                name="author"
                value={author}
                onChange={(e) => {
                  setAuthor(e.target.value);
                }}
              />
              <select
                className="input-select"
                value={category}
                required
                style={{ flex: 2 }}
                onChange={(e) => setcategory(e.target.value)}
              >
                {
          categories.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
              </select>
              <button style={{ flex: 1 }} type="button" onClick={handleSubmit}>
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default AddBook;
