import Comment from '../comment/Comment';

import './comments-list.scss';

const CommentsList = ({ data }) => {
  const comments = data[0].comments;
  return (
    <div>
      {comments.map((c, i) => (
        <Comment data={c} key={i} />
      ))}
    </div>
  );
};

export default CommentsList;
