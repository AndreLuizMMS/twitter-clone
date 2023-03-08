import sparkle from '../../assets/sparkle.svg';

import './header.scss';

const Header = () => {
  return (
    <div className="header">
      <span className="header-txt">Home</span>
      <img src={sparkle} alt="" className="header-img" />
    </div>
  );
};

export default Header;
