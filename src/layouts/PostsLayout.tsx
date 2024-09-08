import React from 'react';
import { Outlet } from 'react-router-dom';

const PostsLayout: React.FC = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default PostsLayout;