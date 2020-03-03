import React, { Component } from "react";
import axios from "axios";
import Home from "./components/Home.js";
import "./styles/main.css";
export default class App extends Component {
  state = {
    sideVideos: [],
    mainVideo: {},
    allVideos: []
  };

  componentDidMount() {
    const videoId = "1af0jruup5gu";
    axios.get(`http://localhost:5000/api/videos/${videoId}`).then(res1 => {
      axios.get("http://localhost:5000/api/videos").then(response => {
        this.setState({
          allVideos: response.data,
          sideVideos: response.data.filter(video => video.id !== videoId),
          mainVideo: res1.data[0]
        });
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      axios
        .get(
          `http://localhost:5000/api/videos/${this.props.match.params.videoId}`
        )
        .then(response =>
          this.setState({
            sideVideos: this.state.allVideos.filter(
              video => video.id !== this.props.match.params.videoId
            ),
            mainVideo: response.data[0]
          })
        );
    }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo
    });
  }

  render() {
    if (this.state.sideVideos.length === 0) {
      return (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <h1>loading...</h1>
        </div>
      );
    } else {
      return (
        <>
          <Home
            mainVideo={this.state.mainVideo}
            sideVideos={this.state.sideVideos}
          />
        </>
      );
    }
  }
}
