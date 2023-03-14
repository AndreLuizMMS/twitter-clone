import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';
import TweetComment from './components/tweet-comments/TweetComment';

import { Route, Routes, useParams } from 'react-router-dom';

import { useSelector } from 'react-redux';

import './global.scss';

function App() {
  const global = useSelector(state => state);

  return (
    <div className="App">
      <div className="page">
        <Routes>
          <Route
            path="/comment/:idPost"
            element={
              <>
                <Sidebar />
                <TweetComment />
              </>
            }
          />
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
