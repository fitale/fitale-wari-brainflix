import React, { Component } from "react";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Comments from "./Comments.js";
import Nextvideo from "./Nextvideo.js";

export default class Home extends Component {
  render() {
    return (
      <>
        <Hero heroProp={this.props.state.mainVideo.image} />
        <main id="huge-flex">
          <div id="huge-flex__left">
            <Highlights titleProp={this.props.state.mainVideo} />
            <Comments commentProp={this.props.state.mainVideo.comments} />
          </div>
          <div id="huge-flex__right">
            <Nextvideo videoProp={this.props.state.nextVideo} />
          </div>
        </main>
      </>
    );
  }
}
