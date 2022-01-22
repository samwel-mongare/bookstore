import { useDispatch } from 'react-redux';
import { deleteBook } from '../../redux/books/api';

const Bookinfo = ((props) => {
  const data = props;
  const dispatch = useDispatch();

  const deleteBookFromStore = (e) => {
    dispatch(deleteBook(e.target.id));
  };

  return (
    <li className="book-container">
      <p className="cat">{data.category}</p>
      <p className="titleData">{data.title}</p>
      <p className="author">Ryan Renolds</p>
      <button
        className="remove"
        type="button"
        onClick={deleteBookFromStore}
        id={data.idx}
      >
        Delete
      </button>
    </li>
  );
});

export default Bookinfo;
