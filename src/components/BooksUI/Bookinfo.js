import Buttons from './Buttons';

const Bookinfo = () => (
  <ul className="BookInfo">
    <li style={{ display: 'flex' }}>
      <p style={{ margin: '0' }}>No books to display!</p>
      <Buttons label="Remove" />
    </li>
  </ul>
);

export default Bookinfo;
