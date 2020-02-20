import React, { Component } from "react";
import viewsIcon from "../assets/icons/icon-views.svg";
import likesIcon from "../assets/icons/icon-likes.svg";

export default class Highlights extends Component {
  render() {
    return (
      <section className="highlights">
        <h1 className="highlights__title">{this.props.mainVideo.title}</h1>
        <div className="highlights__flex">
          <div className="highlights__container">
            <h3 className="highlights__container--subtitle">
              {this.props.mainVideo.channel}
            </h3>
            <h3 className="highlights__container--thin-label">
              {this.props.mainVideo.timestamp}
            </h3>
          </div>
          <div className="highlights__container">
            <img
              src={viewsIcon}
              alt="views"
              className="highlights__container--icon"
            />
            <p className="highlights__container--para">
              {this.props.mainVideo.views}
            </p>
            <img
              src={likesIcon}
              alt="likes"
              className="highlights__container--icon"
            ></img>
            <p className="highlights__container--para">
              {this.props.mainVideo.likes}
            </p>
          </div>
        </div>

        <p className="highlights__para">{this.props.mainVideo.description}</p>
      </section>
    );
  }
}
