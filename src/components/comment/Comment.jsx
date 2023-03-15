import { useState } from 'react';
import { useDispatch } from 'react-redux';

import {
  likeComment,
  deslikeComment
} from '../../reducer/comments-reducer/comments.slice';

import heart from '../../assets/heart.svg';
import redHeart from '../../assets/redHeart.png';
import comment from '../../assets/comment.svg';
import arrow from '../../assets/arrow.svg';

import './comment.scss';
import { useParams } from 'react-router-dom';

const Comment = ({ data }) => {
  const dispatch = useDispatch();
  const { name, user, id, text, likes, liked } = data;
  const { idPost } = useParams();

  let like = {
    liked: liked ? redHeart : heart,
    class: liked ? 'redHeart' : 'heart'
  };

  function handleLike() {
    if (!liked) {
      dispatch(likeComment({ postId: idPost, commentId: id }));
    } else {
      dispatch(deslikeComment({ postId: idPost, commentId: id }));
    }
  }

  return (
    <div className="container-comment">
      <img
        src="https://avatars.githubusercontent.com/u/94117431?v=4"
        alt=""
        className="comment-avatar"
      />

      <div className="card">
        <div className="title">
          <span className="user-name">{name}</span>
          <span className="user">{user}</span>
        </div>
        <span className="text">{text}</span>

        <div className="reactions">
          <div className="reac-spec">
            <img src={like.liked} className={like.class} onClick={handleLike} />
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

export default Comment;
