import Recat from "react";
import CommentRecord from "./CommentRecord";

const Comments = ({ comments }) => {
  return (
    <ul className="list-unstyled">
      {comments.map((comment) => (
        <li className="mb-1">
          {<CommentRecord comment={comment} />}
        </li>
      ))}
    </ul>
  );
};
export default Comments;
