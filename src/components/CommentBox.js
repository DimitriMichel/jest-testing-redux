import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { saveComment } from '../redux/actions';
import '../sass/main.sass';

class CommentBox extends Component {
  state = { comment: '' };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment: '' });
  };

  onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
      this.props.saveComment(this.state.comment);
      this.setState({ comment: '' });
    }
  };

  render() {
    return (
      <div className="comment-box">
        <form
          className="comment-box-form"
          onSubmit={this.handleFormSubmit}
          onKeyDown={this.onEnterPress}
        >
          <h4>** Add A Comment **</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div className="button-container">
            <button type="submit">Submit Comment</button>
          </div>
        </form>
        <button className="fetch-comments" onClick={this.props.fetchComments}>Fetch Comments</button>
      </div>
    );
  }
}

export default connect(null, actions)(CommentBox);
