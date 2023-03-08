import TweetsList from '../tweets-list/TweetsList';
import Contact from '../contact/Contact';
import NewTweet from '../new-tweet/NewTweet';

import './feed.scss';

const Feed = () => {
  return (
    <>
      <div className="container">
        <div className="feed">
          <NewTweet />
        </div>

        <Contact />
      </div>
    </>
  );
};

export default Feed;
