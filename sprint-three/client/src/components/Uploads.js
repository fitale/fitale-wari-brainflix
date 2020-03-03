import React, { Component } from "react";
import thumbnail from "../assets/images/video-preview.jpg";
import axios from "axios";

export default class Uploads extends Component {
  state = {
    videos: []
  };

  constructor(props) {
    super(props);
    this.title = React.createRef();
    this.description = React.createRef();
    this.eventUpload = this.eventUpload.bind(this);
  }
  eventUpload = event => {
    axios
      .post("http://localhost:5000/api/videos", {
        title: event.target.title.value,
        description: event.target.description.value,
        image: "https://www.fillmurray.com/400/500"
      })
      .then(response => {
        this.setState({
          videos: response.data
        });
      })
      .catch(err => {
        return err;
      });
  };
  render() {
    return (
      <form className="uploads" onSubmit={this.eventUpload}>
        <h3 className="uploads__title">Upload Video</h3>
        <div className="uploads__container">
          <div className="uploads__container--left">
            <h4 className="title">VIDEO THUMBNAIL</h4>
            <img className="image" alt="thumbnail" src={thumbnail} />
          </div>
          <div className="uploads__container--right">
            <div className="video-content">
              <h4 className="title">TITLE YOUR VIDEO</h4>
              <input
                name="title"
                ref={this.title}
                className="input"
                placeholder="Add a title to your video"
                required
              />
              <h4 className="title">ADD A VIDEO DESCRIPTION</h4>
              <textarea
                ref={this.description}
                name="description"
                className="textarea"
                placeholder="Add a description of your video"
                required
              />
              <div className="button">
                <button className="publish">PUBLISH</button>
                <button className="cancel">CANCEL</button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
