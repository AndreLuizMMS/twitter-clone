import { tweets } from '../tweets-list/tweets';

type initState = {
  name?: string;
  tweet?: string | JSX.Element;
  user?: string;
  id?: number;
  avatar?: string;
  likes?: number;
};

export const initialState: initState[] = tweets;

export const enum REDUCER_ACTION_TYPE {
  added
}

type reducerActions = {
  type: REDUCER_ACTION_TYPE;
  name?: string;
  tweet?: string;
  id?: number;
  avatar?: string;
  likes?: number;
};

type tweetReducer = (
  tate: typeof initialState,
  action: reducerActions
) => typeof initialState;

export const tweetReducer: tweetReducer = (state, action) => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.added: {
      return [
        {
          tweet: action.tweet,
          name: 'André Luiz',
          user: '@deds',
          likes: 0,
          avatar: 'https://avatars.githubusercontent.com/u/94117431?v=4',
          id: state.length
        },
        ...state
      ];
    }
    default:
      throw new Error(`error at ${action.type}`);
  }
};
