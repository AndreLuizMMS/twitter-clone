import { useSelector } from 'react-redux';

import TweetsList from '../tweets-list/TweetsList';
import Contact from '../contact/Contact';
import NewTweet from '../new-tweet/NewTweet';

import './feed.scss';

const Feed = () => {
  const { tweet } = useSelector(state => state);

  return (
    <>
      <div className="container">
        <div className="feed">
          <NewTweet />
          <TweetsList data={tweet} />
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Feed;
