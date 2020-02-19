import React, { Component } from "react";

export default class Uploads extends Component {
  render() {
    return (
      <>
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
