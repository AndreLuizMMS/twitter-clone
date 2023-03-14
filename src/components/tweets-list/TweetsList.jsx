import Tweet from '../tweet/Tweet';

const TweetsList = ({ data }) => {
  return (
    <div className="">
      {data.map((info, i) => {
        return <Tweet key={i} data={info} />;
      })}
    </div>
  );
};

export default TweetsList;
