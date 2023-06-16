import { v4 as uuidv4 } from 'uuid';
import BookItem from './BookItem';
import BookList from './BookList';

const defaultListOfBooks = [
  { title: 'The Hitchhikers Guide to the Galaxy', author: 'Douglas Adams ', genre: 'Science Fiction ' },
  { title: 'To Kill a Mocking bird - the Benawi', author: 'Harper Lee', genre: 'Fiction' },
  { title: 'The Immortal Life of Henrietta Lacks', author: 'Rebecca Skloot', genre: 'Non-fiction' },
];
const Books = () => (
  <div className="booksContainer">
    {
      defaultListOfBooks.map((obj) => (
        <BookItem key={uuidv4()} author={obj.author} genre={obj.genre} title={obj.title} />
      ))
    }
    <BookList />
  </div>

);

export default Books;
