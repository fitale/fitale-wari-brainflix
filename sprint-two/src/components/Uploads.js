import React, { Component } from "react";
import thumbnail from "../assets/images/video-preview.jpg";
export default class Uploads extends Component {
  render() {
    return (
      <main className="uploads">
        <h3 className="uploads__title">Upload Video</h3>
        <div className="uploads__container">
          <div className="uploads__container--flex">
            <h4 className="title">VIDEO THUMBNAIL</h4>
            <img className="image" alt="thumbnail" src={thumbnail} />
          </div>
          <div className="uploads__container--flex">
            <h4 className="title">TITLE YOUR VIDEO</h4>
            <input className="input" placeholder="Add a title to your video" />
            <h4 className="title">ADD A VIDEO DESCRIPTION</h4>
            <textarea
              className="textarea"
              placeholder="Add a description of your video"
            />
          </div>
          <button className="uploads__container--button-publish">
            PUBLISH
          </button>
          <button className="uploads__container--button-cancel">CANCEL</button>
        </div>
      </main>
    );
  }
}
