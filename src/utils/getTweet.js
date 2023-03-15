const getTweet = (tweets, id) => {
  return tweets.filter(t => t.id == id)[0];
};
export default getTweet;
