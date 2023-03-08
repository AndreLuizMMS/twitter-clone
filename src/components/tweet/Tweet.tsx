import './tweet.scss';
import heart from '../../assets/heart.svg';

//

const Tweet = ({ data }: any) => {
  const { avatar, id, likes, name, tweet, user } = data;

  return (
    <div className="tweet-container" key={id}>
      <img src={avatar} className="avatar" alt="" />
      <div className="tweet-info">
        <div className="tweet">
          <span className="user-name">{name}</span>
          <span className="user">{user}</span>
          <p className="tweet-txt">{tweet}</p>
        </div>
        <div className="reactions">
          <div className="reac-spec">
            <img src={heart} alt="" /> <span className="likes">{likes}</span>
          </div>
          <div className="reac-spec">
            <img src="" alt="" />
          </div>
          <div className="reac-spec">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
