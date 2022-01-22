import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { deleteBook } from '../../redux/books/api';

const Bookinfo = ((props) => {
  const data = props;
  const dispatch = useDispatch();
  const percentage = 70;

  const deleteBookFromStore = (e) => {
    dispatch(deleteBook(e.target.id));
  };

  return (
    <li className="book-container">
      <div>
        <p className="cat">{data.category}</p>
        <p className="titleData">{data.title}</p>
        <p className="author">Ryan Renolds</p>
        <button className="remove comment" type="button">Comment</button>
        <button
          className="remove"
          type="button"
          onClick={deleteBookFromStore}
          id={data.idx}
        >
          Delete
        </button>
        <button className="remove edit" type="button">Edit</button>
      </div>
      <div className="extra-prop">
        <div className="progressAnalysis">
          <CircularProgressbar
            value={percentage}
            styles={buildStyles({ pathColor: '#0EA5E9', marginRight: '10px' })}
            className="progress-bar"
          />
          <div className="progressPercentV">
            <p className="progressPercent">
              {percentage}
              %
            </p>
            <p className="completedStatus">Completed</p>
          </div>
        </div>
        <div className="updateOne">
          <h2 className="heading2">CURRENT CHAPTER</h2>
          <h3 className="heading3">
            Chapter
            {' '}
            { `${Math.floor(Math.random() * 50)}`}
          </h3>
          <button type="button" className="updatedProgress">Update Progress</button>
        </div>
      </div>
    </li>
  );
});

export default Bookinfo;
