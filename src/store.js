import { configureStore } from '@reduxjs/toolkit';

import tweetReducer from './tweet-reducer/tweet.slice';

export const store = configureStore({
  reducer: {
    tweet: tweetReducer
  }
});
