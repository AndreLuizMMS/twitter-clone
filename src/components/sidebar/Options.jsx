import './sidebar.scss';

const Options = ({ image, text }) => {
  return (
    <div className="nav-option">
      <img src={image} alt="" className="nav-option-img" />
      <span>{text}</span>
    </div>
  );
};

export default Options;
