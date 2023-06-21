import { FcFullTrash } from 'react-icons/fc';
import { useSelector, useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import './AddBook.css';
import ChapterProgress from './ChapterProgress';
import ChapterUpdateProgress from './ChapterUpdateProgress';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  return (
    <section className="section">
      <div className="container-main">
        {books.map((book) => (
          <div className="content" key={book.item_id}>
            <div className="aside">
              <div className="aside-left" style={{ flex: 5 }}>
                <div className="cat">{book.title}</div>
                <div className="title">{book.author}</div>
                <div className="author">{book.category}</div>

              </div>
              <div className="aside-center" style={{ flex: 2 }}>

                <ChapterProgress />

              </div>
              <div className="aside-right" style={{ flex: 3 }}>
                <ChapterUpdateProgress />
              </div>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </section>

  );
};

export default BooksList;
