import Options from './Options';

import ttLogo from '../../assets/twitterLogo.svg';
import sidebarImages from './sidebarImages';

import './sidebar.scss';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={ttLogo} alt="" className="tt-logo" />
      <div className="nav">
        {sidebarImages.map(({ image, text }, key) => {
          return <Options image={image} text={text} key={key} />;
        })}
      </div>
      <button className='tweeet-btn'>
        Tweet
      </button>
    </div>
  );
};

export default Sidebar;
