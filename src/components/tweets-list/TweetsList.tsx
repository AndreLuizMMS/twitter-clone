import { useReducer } from 'react';

import { tweetReducer, initialState } from '../new-tweet/tweetReducer';

import Tweet from '../tweet/Tweet';

type data = {
  name?: string;
  tweet?: string | JSX.Element;
  user?: string;
  id?: number;
  avatar?: string;
  likes?: number;
};

const TweetsList = ({ data }: any) => {
  return (
    <div className="">
      {data.map((info: data, i: number) => {
        return <Tweet key={i} data={info} />;
      })}
    </div>
  );
};

export default TweetsList;
