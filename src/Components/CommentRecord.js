import React from "react";

const CommentRecord = ({ comment }) => {
  return (
    <div className="card">
      <div className="card-body">
        <h4 className="card-title">{comment.name}</h4>
        <p className="card-body">{comment.comment}</p>
        <p className="card-body">Rating: {comment.rating}</p>
      </div>
    </div>
  );
};
export default CommentRecord;
