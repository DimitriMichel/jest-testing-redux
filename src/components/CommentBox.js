import React, { Component } from 'react';
import '../sass/main.sass';
class CommentBox extends Component {
  state = { comment: '' };
  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  };
  handleFormSubmit = (event) => {
    event.preventDefault();
    //call action creator
    //save comment
    this.setState({ comment: '' });
  };

  onEnterPress = (event) => {
    if (event.keyCode === 13 && event.shiftKey === false) {
      event.preventDefault();
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
            <button type="submit">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CommentBox;
