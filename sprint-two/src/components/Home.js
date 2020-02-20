import React, { Component } from "react";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Comments from "./Comments.js";
import Nextvideo from "./Nextvideo.js";

export default class Home extends Component {
  render() {
    console.log(this.props.mainVideo);
    return (
      <>
        <Hero mainVideo={this.props.mainVideo} />
        <main id="huge-flex">
          <div id="huge-flex__left">
            <Highlights mainVideo={this.props.mainVideo} />
            {/* <Comments mainVideo={this.props.mainVideo} /> */}
          </div>
          <div id="huge-flex__right">
            <Nextvideo sideVideos={this.props.sideVideos} />
          </div>
        </main>
      </>
    );
  }
}
