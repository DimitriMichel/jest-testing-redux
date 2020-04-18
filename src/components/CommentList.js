import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../sass/main.sass';

class CommentList extends Component {
  renderComments = () => {
    return this.props.comments.map((comment) => {
      return <li key={comment}>{comment}</li>;
    });
  };
  render() {
    return (
      <div className='comments-list'>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { comments: state.comments };
};
export default connect(mapStateToProps)(CommentList);
