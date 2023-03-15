import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { likeTweet, deslikeTweet } from '../../reducer/tweet-reducer/tweet.slice';

import heart from '../../assets/heart.svg';
import redHeart from '../../assets/redHeart.png';
import comment from '../../assets/comment.svg';
import arrow from '../../assets/arrow.svg';

import './tweet.scss';
import { useEffect, useState } from 'react';

const Tweet = ({ data }) => {
  const dispatch = useDispatch();

  const { avatar, id, likes, name, text, user, liked } = data;

  let like = {
    liked: liked ? redHeart : heart,
    class: liked ? 'redHeart' : 'heart'
  };

  function handleLikeTweet() {
    if (!liked) {
      dispatch(likeTweet(id));
    } else {
      dispatch(deslikeTweet(id));
    }
  }

  return (
    <div className="tweet-container" key={id}>
      <img src={avatar} className="avatar" alt="" />
      <div className="tweet-info">
        <Link to={`/comment/${id}`} className="link" accessKey={id}>
          <div className="tweet">
            <span className="user-name">{name}</span>
            <span className="user">{user}</span>
            <p className="tweet-txt">{text}</p>
          </div>
        </Link>
        <div className="reactions">
          <div className="reac-spec">
            <img src={like.liked} className={like.class} onClick={handleLikeTweet} />
            <span>{likes}</span>
          </div>
          <div className="reac-spec">
            <img src={arrow} alt="" />
            <span></span>
          </div>
          <div className="reac-spec">
            <img src={comment} alt="" />
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tweet;
