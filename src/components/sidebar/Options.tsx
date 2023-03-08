type OptionsProps = {
  image: string;
  text: string;
};

const Options = ({ image, text }: OptionsProps) => {
  return (
    <div className="nav-option">
      <img src={image} alt="" className="nav-option-img" />
      <span className="nav-option-txt">{text}</span>
    </div>
  );
};

export default Options;
