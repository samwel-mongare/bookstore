import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import Bookinfo from './Bookinfo';
import { getBooks } from '../../redux/books/api';

const Booklist = (() => {
  const state = useSelector((state) => state.booksReducer.books);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBooks());
  }, [dispatch]);

  return (
    <ul className="Booklist">
      {state.map((data) => (
        <Bookinfo
          key={data.id}
          title={data.title}
          idx={data.id}
          category={data.category}
        />
      ))}
    </ul>
  );
});

export default Booklist;
