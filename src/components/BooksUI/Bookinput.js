import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { bookAdded } from '../../redux/books/books';

const Bookinput = (() => {
  const [newBook, createNewBook] = useState({
    title: '',
    author: '',
  });

  const dispatch = useDispatch();

  const onChange = (e) => {
    createNewBook({
      id: uuidv4(),
      title: e.target.value,
      author: '',
    });
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(bookAdded(newBook));
    createNewBook({
      title: '',
    });
  };

  return (

    <form onSubmit={submitBookToStore}>
      <input type="text" placeholder="Enter book name" value={newBook.title} onChange={onChange} />
      <button type="submit">Add</button>
    </form>
  );
});

export default Bookinput;
