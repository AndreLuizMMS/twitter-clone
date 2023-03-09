import { useReducer, useState } from 'react';

import {
  REDUCER_ACTION_TYPE,
  initialState,
  tweetReducer
} from '../new-tweet/tweetReducer';

import heart from '../../assets/heart.svg';
import liked from '../../assets/liked.png';

import './tweet.scss';

interface TweetProps {
  data: any;
}

const Tweet = ({ data }: TweetProps) => {
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
            <img src={heart} className="likes" />
            <span>{likes}</span>
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
