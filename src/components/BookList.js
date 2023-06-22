import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { FcComments, FcEditImage, FcFullTrash } from 'react-icons/fc';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';
import '../styles/AddBook.css';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

function BookList() {
  const { books, isLoading, errorMsg } = useSelector(
    (state) => state.books || [],
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className="loading">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (errorMsg) {
    return (
      <div className="loading">
        <h1>Failed to fetch ...</h1>
      </div>
    );
  }

  return (
    <div>
      <section className="section">
        <div className="container-main">
          {Object.entries(books).map(([id, book]) => book.map((bookList) => (
            <div className="content" key={id}>
              <div className="aside">
                <div className="aside-left" style={{ flex: 5 }}>
                  <div className="cat">{bookList.category}</div>
                  <div className="title">{bookList.title}</div>
                  <div className="author">{bookList.author}</div>
                  <button
                    type="button"
                    className="remove-btn"
                  >
                    <FcComments />
                    Comments
                  </button>
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => {
                      dispatch(removeBook(id));
                    }}
                  >
                    <FcFullTrash />
                    Remove
                  </button>
                  <button
                    type="button"
                    className="remove-btn"
                  >
                    <FcEditImage />
                    Edit
                  </button>
                </div>
                <div className="aside-center" style={{ flex: 2 }}>

                  <ChapterProgress />

                </div>
                <div className="aside-right" style={{ flex: 3 }}>
                  <ChapterUpdateProgress />
                </div>
              </div>
            </div>
          )))}
        </div>
      </section>

      <hr />
    </div>
  );
}

export default BookList;
