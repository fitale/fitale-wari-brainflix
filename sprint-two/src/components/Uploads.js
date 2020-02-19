import React, { Component } from "react";
import Header from "./Header";

export default class Uploads extends Component {
  render() {
    return (
      <>
        <Header />
        <h3>Upload Video</h3>
        <h4>VIDEO THUMBNAIL</h4>
        <img alt="thumbnail" />
        <h4>TITLE YOUR VIDEO</h4>
        <input />
        <h4>ADD A VIDEO DESCRIPTION</h4>
        <textarea></textarea>
        <button>PUBLISH</button>
        <button>CANCEL</button>
      </>
    );
  }
}
