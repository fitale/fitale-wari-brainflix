import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nextvideo extends Component {
  render() {
    let html = this.props.sideVideos.map(video => {
      return (
        <Link
          to={`/videos/${video.id}`}
          className="next-video__container"
          key={video.id}
        >
          <img
            src={video.image}
            alt="videoscreenshot"
            className="next-video__container--img"
          />
          <div className="next-video__container--text">
            <h3 className="title">{video.title}</h3>
            <p className="creator">{video.channel}</p>
          </div>
        </Link>
      );
    });
    return (
      <section className="next-video">
        <h3 className="next-video__title">NEXT VIDEO</h3>
        {html}
      </section>
    );
  }
}
