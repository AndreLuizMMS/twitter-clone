const getComments = (postId, comments) => {
  return comments.filter(c => c.postId == postId);
};

export default getComments;
