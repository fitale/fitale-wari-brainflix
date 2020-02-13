import React, { Component } from "react";
import userIcon from "../assets/images/user-icon.jpg";

let comments = [
  {
    name: "Michael Lyons",
    date: "12/18/2018",
    comment:
      "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
  },
  {
    name: "Gary Wong",
    date: "12/18/2018",
    comment:
      "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
  },
  {
    name: "Theodore Duncan",
    date: "11/15/2018",
    comment:
      "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
  }
];
export default class Comments extends Component {
  render() {
    let oldComments = comments.map((comment, i) => {
      return (
        <div key={i} className="comments__old">
          <div className="comments__old--user-img"></div>
          <div className="comments__old--user-content">
            <div className="text">
              <h3 className="text__name">{comment["name"]}</h3>
              <p className="text__date">{comment["date"]}</p>
            </div>
            <p className="comment">{comment["comment"]}</p>
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
            <form className="new-comment">
              <h3 className="new-comment__title">JOIN THE CONVERSATION</h3>
              <textarea
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
