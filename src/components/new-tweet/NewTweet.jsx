import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { addTweet, addComment } from '../../tweet-reducer/tweet.slice';

import './new-tweet.scss';

const NewTweet = ({ type }) => {
  if (type == 'comment') {
    return <CommentOnTweet />;
  } else {
    return <Post />;
  }
};
export default NewTweet;

const Post = () => {
  const dispatch = useDispatch();
  const [tweet, setTweet] = useState('');

  function postTweet() {
    dispatch(addTweet(tweet));
    setTweet('');
  }

  return (
    <>
      <div className="new-tweet-container">
        <img
          src="https://avatars.githubusercontent.com/u/94117431?v=4"
          className="new-tweet-img"
          alt=""
        />
        <div className="new-tweet">
          <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            className="new-tweet-input"
            placeholder="What's happening"
            value={tweet}
            onChange={e => setTweet(e.target.value)}
          ></textarea>
          <div className="btn-positioning">
            <button className="new-tweet-btn" onClick={postTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

const CommentOnTweet = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const { idPost } = useParams();

  function postComment() {
    dispatch(addComment({ text: text, id: idPost }));
    setText('');
  }

  return (
    <>
      <div className="comment-container">
        <img
          src="https://avatars.githubusercontent.com/u/94117431?v=4"
          className="comment-img"
          alt=""
        />
        <div className="comment">
          <textarea
            name=""
            id=""
            cols={10}
            rows={5}
            className="comment-input"
            placeholder="Tweet your answer"
            value={text}
            onChange={e => setText(e.target.value)}
          ></textarea>
          <div className="btn-positioning">
            <button className="new-tweet-btn" onClick={postComment}>
              Answer
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
