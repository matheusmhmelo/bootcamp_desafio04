import React, { Component } from 'react';

import PostItem from './PostItem';
import postsState from '../config/postsState';

class PostList extends Component {
  state = postsState;

  render() {
    const { posts } = this.state;

    return (
      <div className="postlist">
        {posts.map(post => (
          <PostItem key={post.id} {...post} />
        ))}
      </div>
    );
  }
}

export default PostList;
