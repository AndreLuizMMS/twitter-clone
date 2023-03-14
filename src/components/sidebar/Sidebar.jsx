import { Link } from 'react-router-dom';

import Options from './Options';

import pencil from '../../assets/pencil.svg';
import ttLogo from '../../assets/twitterLogo.svg';
import { sidebarImages } from '../../data/sidebarImages';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <Link to="/">
        <img src={ttLogo} alt="" className="tt-logo" />
      </Link>
      <div className="nav">
        {sidebarImages.map(({ image, text }, key) => {
          return <Options image={image} text={text} key={key} />;
        })}
      </div>
      <button className="tweet-btn">
        <span>Tweet</span>
        <img src={pencil} className="pencil" />
      </button>
    </div>
  );
};

export default Sidebar;
