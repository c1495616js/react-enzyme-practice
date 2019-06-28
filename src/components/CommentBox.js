import React, { Component } from 'react'

export default class CommentBox extends Component {
  state = { comment: '' };

  handleChange = (event) => {
    this.setState({ comment: event.target.value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    // TODO call action creater

    
    this.setState({ comment: ''  });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea onChange={this.handleChange} value={this.state.comment}/>
        <div>
          <button>Submit Comment</button>
        </div>
      </form>
    )
  }
}
