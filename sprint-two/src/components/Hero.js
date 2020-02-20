import React, { Component } from "react";
import videoPlay from "../assets/icons/icon-play.svg";
import fullScreen from "../assets/icons/icon-fullscreen.svg";
import videoVol from "../assets/icons/icon-volume.svg";
export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <video
          poster={this.props.mainVideo.image}
          className="hero__video"
        ></video>
        <div className="hero__container">
          <div className="hero__container--icons">
            <img
              src={videoPlay}
              alt="videoplay"
              className="hero__container--icons--img"
            />
          </div>
          <div className="hero__container--icons flex-grow">
            <p className="hero__container--icons--middle-border"></p>
          </div>
          <div className="hero__container--icons">
            <img
              src={fullScreen}
              alt="fullscreen"
              className="hero__container--icons--img"
            />
            <img
              src={videoVol}
              alt="volume"
              className="hero__container--icons--img"
            />
          </div>
        </div>
      </section>
    );
  }
}
