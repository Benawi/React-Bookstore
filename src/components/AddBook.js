import { v4 as uuidv4 } from 'uuid';

const bookGenres = [
  'Fiction',
  'Non-fiction',
  'History',
  'Romance',
  'Science Fiction/Fantasy',
  'Mystery/Thriller',
  'Horror',
  'Young Adult',
  'Dystopian',
  'Realist',
  'Childrens books',
  'Poetry',
];

const AddBook = () => (
  <div className="addBookContainer">
    <h2 className="fontStyle10 fontColor1 mb1">ADD NEW BOOK</h2>
    <form className="formContainer">
      <input className="addBookTitle fontStyle9 fontColor4" type="text" placeholder="Book title" />
      <select className="addBookGenre fontStyle9 fontColor4">
        {
          bookGenres.map((genre) => (
            <option key={uuidv4()} value={genre}>{genre}</option>
          ))
        }
      </select>
      <button type="button" className="addBookBtn appDefaultButton fontStyle4 fontColor5">Add Book</button>
    </form>
  </div>
);

export default AddBook;
