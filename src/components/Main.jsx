import Feed from './feed/Feed';
import Header from './header/Header';

const Main = () => {
  return (
    <div className="main">
      <Header text="Home" />
      <Feed />
    </div>
  );
};

export default Main;
