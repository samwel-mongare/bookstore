import { useSelector } from 'react-redux';
import Bookinfo from './Bookinfo';

const Booklist = (() => {
  const state = useSelector((state) => state.booksReducer);
  return (
    <ul className="Booklist">
      {state.map((data) => (
        <Bookinfo
          key={data.id}
          title={data.title}
          idx={data.id}
        />
      ))}
    </ul>
  );
});

export default Booklist;
