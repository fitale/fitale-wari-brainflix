import React, { Component } from "react";
import video from "../assets/videos/video.mp4";
export default class Hero extends Component {
  render() {
    return (
      <section className="hero">
        <video
          controls
          poster={this.props.mainVideo.image}
          className="hero__video"
        >
          <source src={video} type="video/mp4" />
        </video>
      </section>
    );
  }
}
