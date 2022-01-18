import { useSelector } from 'react-redux';
import Buttons from './Buttons';

const Bookinfo = (() => {
  const state = useSelector((state) => state.books);
  return (
    <ul className="BookInfo">
      {state.map((data) => (
        <li style={{ display: 'flex' }} key={data.id}>
          <p style={{ margin: '0' }}>{data.title}</p>
          <Buttons label="Remove" />
        </li>
      ))}
    </ul>
  );
});

export default Bookinfo;
