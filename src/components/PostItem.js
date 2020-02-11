import React from 'react';
import PropTypes from 'prop-types';

function PostItem({ author, date, content, comments }) {
  return (
    <div className="post-item">
      <div className="post-header">
        <img src={author.avatar} className="avatar"/>
        <div className="details">
          <span>{author.name}</span>
          <span>{date}</span>
        </div>
      </div>

      <p className="post-content">{content}</p>

      <div className="post-comments">
        <div className="divider" />
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <img src={comment.author.avatar} className="avatar"/>
            <p>
              <span>{comment.author.name}</span> 
              {comment.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostItem;