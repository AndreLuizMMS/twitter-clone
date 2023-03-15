import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';
import CommentsPage from './components/comments-page/CommentsPage';

import { Route, Routes, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './global.scss';

function App() {
  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route path="/comment/:idPost" element={<CommentsPage />} />
          <Route
            path="/"
            element={
              <>
                <Sidebar />
                <Main />
              </>
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
