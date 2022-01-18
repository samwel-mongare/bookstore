import Bookinfo from './Bookinfo';
import Bookinput from './Bookinput';

const Books = () => (
  <div className="booksContainer">
    <Bookinfo />
    <h2>ADD NEW BOOK</h2>
    <Bookinput />
  </div>
);

export default Books;
