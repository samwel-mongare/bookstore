import { useDispatch } from 'react-redux';
import { bookRemoved } from '../../redux/books/books';

const Bookinfo = ((props) => {
  const data = props;
  const dispatch = useDispatch();

  const deleteBookFromStore = (e) => {
    dispatch(bookRemoved(e.target.id));
  };

  return (
    <li
      style={{
        display: 'flex', justifyContent: 'space-between', width: '60vw', alignSelf: 'center',
      }}
    >
      <p style={{ margin: '0' }}>{data.title}</p>
      <button
        className="button"
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
