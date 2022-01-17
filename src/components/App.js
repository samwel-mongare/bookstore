import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Displaybooks from './Displaybooks';

function App() {
  const fonty = {
    fontSize: '2rem',
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={(
            <div className="letty" style={fonty}>
              < Displaybooks />
            </div>
    )}
        />
        <Route
          path="/Categories"
          element={
            < Displaybooks />
    }
        />
      </Routes>
    </>
  );
}

export default App;
