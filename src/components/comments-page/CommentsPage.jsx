import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import Header from '../header/Header';
import Sidebar from '../sidebar/Sidebar';
import Tweet from '../tweet/Tweet';
import NewTweet from '../new-tweet/NewTweet';
import CommentsList from '../comments-list/CommentsList';

import getTweet from '../../utils/getTweet';
import getComments from '../../utils/getComments';

import './comments-page.scss';

const CommentsPage = () => {
  const { tweet, comments } = useSelector(state => state);

  const { idPost } = useParams();

  const currentTweet = getTweet(tweet, idPost);
  const currentComments = getComments(idPost, comments);

  return (
    <div className="comments-page">
      <Sidebar />
      <div className="comments-main">
        <Header text="Tweet" />
        <Tweet data={currentTweet} />
        <div className="comments-container">
          <NewTweet type="comment" />
          {!!currentComments.length ? <CommentsList data={currentComments} /> : null}
        </div>
      </div>
    </div>
  );
};

export default CommentsPage;
