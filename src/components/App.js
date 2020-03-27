import React from 'react';
import CommentBox from './CommentBox';
import CommentList from './CommentList';
import '../sass/main.sass';

const App = () => {
  return (
    <div className="app-container">
      <div className="comment-box-container">
        <CommentBox />
      </div>
      <div className="comment-list-container">
        <CommentList />
      </div>
    </div>
  );
};

export default App;
