import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import getTweet from '../../utils/getTweetComment';

import Tweet from '../tweet/Tweet';
import TweetsList from '../tweets-list/TweetsList';
import NewTweet from '../new-tweet/NewTweet';
import Header from '../header/Header';

import './tweet-comment.scss';

const TweetComment = () => {
  const { idPost } = useParams();
  const { tweet } = useSelector(state => state);

  const tweetPost = getTweet(tweet, idPost);

  return (
    <div className="comment-tweet">
      <Header text='Tweet'/>
      <Tweet data={tweetPost} />

      <div className="comment-section">
        <NewTweet key={idPost} type="comment" />

        <div className="existing-comments">
          <TweetsList data={tweetPost.comments} />
        </div>
      </div>
    </div>
  );
};

export default TweetComment;
