import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { sendBookToApi } from '../../redux/books/api';

const Bookinput = (() => {
  const [newTitle, createNewTitle] = useState({
    title: '',
  });

  const [newCategory, createNewCategory] = useState({
    category: '',
  });

  const dispatch = useDispatch();

  const titleChange = (e) => {
    createNewTitle({
      [e.target.name]: e.target.value,
    });
  };

  const categoryChange = (e) => {
    createNewCategory({
      [e.target.name]: e.target.value,
    });
  };

  const newBook = {
    id: uuidv4(),
    title: newTitle.title,
    category: newCategory.category,
  };

  const submitBookToStore = (e) => {
    e.preventDefault();
    dispatch(sendBookToApi(newBook));
    createNewCategory({ category: '' });
    createNewTitle({ title: '' });
  };

  return (

    <form onSubmit={submitBookToStore} className="inputForm">
      <h2 className="Title">ADD NEW BOOK</h2>
      <input name="title" type="text" placeholder="Enter book name" value={newTitle.title} onChange={titleChange} className="Lesson-Pane2 titling" />
      <select name="category" onChange={categoryChange} value={newCategory.category} id="myCategory" placeholder="Category" className="Lesson-Pane2">
        <option value="">Category</option>
        <option value="Action">Action</option>
        <option value="Horror">Horror</option>
        <option value="Science Fiction">Science Fiction</option>
        <option value="Economy">Economy</option>
        <option value="Comedy">Comedy</option>
      </select>
      <button type="submit" className="submit">Add Book</button>
    </form>
  );
});

export default Bookinput;
