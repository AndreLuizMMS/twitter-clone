import { createSlice } from '@reduxjs/toolkit';

import avatar from '../../assets/tweets-assests/profile1.svg';

import { tweets } from '../../data/tweets';

const initialState = tweets;

const tweetSlice = createSlice({
  name: 'tweet',
  initialState,
  reducers: {
    addTweet: (state, action) => {
      state.unshift({
        text: action.payload,
        user: '@deds',
        name: 'André',
        likes: 0,
        liked: false,
        comments: [],
        avatar: 'https://avatars.githubusercontent.com/u/94117431?v=4',
        id: state.length + 1
      });
    },
    likeTweet(state, action) {
      state.map(t => {
        if (t.id == action.payload) {
          t.likes = t.likes + 1;
          t.liked = true;
        }
      });
    },
    deslikeTweet(state, action) {
      state.map(t => {
        if (t.id == action.payload) {
          t.likes = t.likes - 1;
          t.liked = false;
        }
      });
    }
  }
});

export const { addTweet, likeTweet, deslikeTweet } = tweetSlice.actions;

export default tweetSlice.reducer;
