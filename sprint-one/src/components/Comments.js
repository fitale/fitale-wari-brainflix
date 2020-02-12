import React, { Component } from "react";
import userIcon from "../assets/images/user-icon.jpg";

export default class Comments extends Component {
  render() {
    return (
      <section className="comments">
        <h3 className="comments__title">Comments</h3>
        <div className="comments__container">
          <img
            src={userIcon}
            alt="usericon"
            className="comments__container--img"
          />
          <div className="comments__container--new-comment">
            <h3 className="title">JOIN THE CONVERSATION</h3>
            <textarea
              placeholder="Type your comment here..."
              className="textarea"
            ></textarea>
            <button className="button">COMMENT</button>
          </div>
        </div>
      </section>
    );
  }
}

function displayComment() {}

displayComment();
