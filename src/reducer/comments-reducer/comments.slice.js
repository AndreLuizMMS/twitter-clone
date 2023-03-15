import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const commentSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {
    newComment(state, action) {
      let postId = action.payload.postId;
      let isFirstComment = state.filter(c => c.postId == postId);

      if (!isFirstComment.length) {
        state.push({
          postId: postId,
          comments: [
            {
              text: action.payload.text,
              name: 'André',
              user: '@deds',
              id: 0,
              likes: 0
            }
          ]
        });
      } else {
        state.forEach(com => {
          if (com.postId == postId) {
            com.comments.push({
              text: action.payload.text,
              name: 'André',
              user: '@deds',
              id: com.comments.length,
              likes: 0,
              liked: false
            });
          }
        });
      }
    },
    likeComment(state, action) {
      state.map(c => {
        if (c.postId == action.payload.postId) {
          c.comments.map(com => {
            if (com.id == action.payload.commentId) {
              com.likes = com.likes + 1;
              com.liked = true;
            }
          });
        }
      });
    },
    deslikeComment(state, action) {
      state.map(c => {
        if (c.postId == action.payload.postId) {
          c.comments.map(com => {
            if (com.id == action.payload.commentId) {
              com.likes = com.likes - 1;
              com.liked = false;
            }
          });
        }
      });
    }
  }
});

export const { newComment, likeComment, deslikeComment } = commentSlice.actions;

export default commentSlice.reducer;
