// import Bookinfo from './Bookinfo';
import Bookinput from './Bookinput';
import Booklist from './Booklist';

const Books = () => (
  <div className="booksContainer">
    <Booklist />
    <h2>ADD NEW BOOK</h2>
    <Bookinput />
  </div>
);

export default Books;
