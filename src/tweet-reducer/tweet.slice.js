import { createSlice } from '@reduxjs/toolkit';

import avatar from '../assets/tweets-assests/profile1.svg';

import { tweets } from '../data/tweets';

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
        comments: [],
        avatar: 'https://avatars.githubusercontent.com/u/94117431?v=4'
      });
    },
    likeTweet(state, action) {
      state.map(t => {
        if (t.id == action.payload) {
          t.likes = t.likes + 1;
        }
      });
    },
    deslikeTweet(state, action) {
      state.map(t => {
        if (t.id == action.payload) {
          t.likes = t.likes - 1;
        }
      });
    },
    addComment(state, action) {
      state.map(t => {
        if (t.id == action.payload.id) {
          t.comments.push({
            text: action.payload.text,
            user: '@deds',
            name: 'André',
            likes: 0,
            avatar: 'https://avatars.githubusercontent.com/u/94117431?v=4',
            id: t.comments.length
          });
        }
      });
    },
    likeComment(state, action) {
      state.forEach(t => {
        if (t.id == action.payload.postId) {
          t.comments.map(c => {
            if (c.id == action.payload.id) {
              c.likes = c.likes + 1;
            }
          });
        }
      });
    }
  }
});

export const { addTweet, likeTweet, deslikeTweet, addComment, likeComment } =
  tweetSlice.actions;

export default tweetSlice.reducer;
