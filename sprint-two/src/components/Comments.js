import React, { Component } from "react";
import userIcon from "../assets/images/user-icon.jpg";

export default class Comments extends Component {
  // commentHandler = event => {
  //   console.log("commentHandler is being called");
  //   event.preventDefault();
  //   let comment = {
  //     name: "fitale wari",
  //     comment: event.target.commentInput.value,
  //     date: "02/21/2019"
  //   };
  //   addComment(comment);
  // };
  render() {
    const commentTimestamp = input => {
      let dateObj = new Date(input);
      let date =
        dateObj.getMonth() +
        1 +
        "/" +
        dateObj.getDate() +
        "/" +
        dateObj.getFullYear();
      return date;
    };

    let oldComments = this.props.mainComments.map((comment, i) => {
      let date = commentTimestamp(comment.timestamp);
      return (
        <div key={i} className="comments__old">
          <div className="comments__old--user-img"></div>
          <div className="comments__old--user-content">
            <div className="text">
              <h3 className="text__name">{comment.name}</h3>
              <p className="text__date">{date}</p>
            </div>
            <p className="comment">{comment.comment}</p>
          </div>
        </div>
      );
    });
    return (
      <section className="comments">
        <h3 className="comments__title">Comments</h3>
        <div className="comments__container">
          <img
            src={userIcon}
            alt="usericon"
            className="comments__container--img"
          />
          <div className="comments__container--section">
            <form /**onSubmit={this.commentHandler}*/ className="new-comment">
              <h3 className="new-comment__title">JOIN THE CONVERSATION</h3>
              <textarea
                name="commentInput"
                placeholder="Type your comment here..."
                className="new-comment__textarea"
              ></textarea>
            </form>
            <button className="button">COMMENT</button>
          </div>
        </div>
        {oldComments}
      </section>
    );
  }
}
