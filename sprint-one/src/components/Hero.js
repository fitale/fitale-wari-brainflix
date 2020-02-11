import React, { Component } from "react";
import heroImage from "../assets/images/video-list-0.jpg";

export default class Hero extends Component {
  render() {
    return (
      <div className="hero">
        <img alt="heroimage" className="hero__image" src={heroImage} />
      </div>
    );
  }
}

// working on hero image
