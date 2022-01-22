import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Navbar from './Navbar';
import Books from './BooksUI/Books';
import Categories from './CategoriesUI/Categories';

function App() {
  const fonty = {
    fontSize: '2rem',
  };

  return (
    <div className="bookStore">
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={(
              <div className="letty" style={fonty}>
                <Books />
              </div>
    )}
          />
          <Route
            path="/Categories"
            element={
              <Categories />
    }
          />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
