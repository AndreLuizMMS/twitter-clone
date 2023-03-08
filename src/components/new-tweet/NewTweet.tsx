import { useReducer, useState } from 'react';

import { REDUCER_ACTION_TYPE, tweetReducer, initialState } from './tweetReducer';

import './new-tweet.scss';
import TweetsList from '../tweets-list/TweetsList';

const NewTweet = () => {
  const [text, setText] = useState('');
  const [state, dispatch] = useReducer(tweetReducer, initialState);

  const postTweet = () => {
    if (text == '') {
      return;
    }
    dispatch({ type: REDUCER_ACTION_TYPE.added, tweet: text });
    setText('');
  };

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
            value={text}
            onChange={e => setText(e.target.value)}
            name=""
            id=""
            cols={10}
            rows={5}
            className="new-tweet-input"
            placeholder="What's happening"
          ></textarea>
          <div className="btn-positioning">
            <button className="new-tweet-btn" onClick={postTweet}>
              Tweet
            </button>
          </div>
        </div>
      </div>
      <TweetsList data={state} />
    </>
  );
};

export default NewTweet;
