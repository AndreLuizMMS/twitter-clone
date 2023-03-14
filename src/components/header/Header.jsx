import sparkle from '../../assets/sparkle.svg';

import './header.scss';

const Header = ({ text }) => {
  return (
    <div className="header">
      <span className="header-txt">{text}</span>
      <img src={sparkle} alt="" className="header-img" />
    </div>
  );
};

export default Header;
