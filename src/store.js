import { configureStore } from '@reduxjs/toolkit';

import tweetReducer from './reducer/tweet-reducer/tweet.slice';
import commentsReducer from './reducer/comments-reducer/comments.slice';

export const store = configureStore({
  reducer: {
    tweet: tweetReducer,
    comments: commentsReducer
  }
});
