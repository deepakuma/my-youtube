import React from 'react';
import Comment from './Comment';

const CommentList = ({ comments }) => {
    return comments.map((comment) => (
      <div className="bg-gray-50" key={comment.id}>
        <Comment data={comment} />
        <div className="ml-5">
          <CommentList comments={comment.replies} />
        </div>
      </div>
    ));
  };

export default CommentList;
