import Sidebar from './components/sidebar/Sidebar';
import Main from './components/Main';

import './global.scss';

function App() {
  return (
    <div className="App">
      <div className="page">

        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
