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

    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=ac407f21-6062-412c-8461-029adc5f9d9f`
      )
      .then(res1 => {
        axios
          .get(
            "https://project-2-api.herokuapp.com/videos?api_key=ac407f21-6062-412c-8461-029adc5f9d9f"
          )
          .then(response => {
            this.setState({
              allVideos: response.data,
              sideVideos: response.data.filter(video => video.id !== videoId),
              mainVideo: res1.data
            });
          });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
      axios
        .get(
          `https://project-2-api.herokuapp.com/videos/${this.props.match.params.videoId}?api_key=ac407f21-6062-412c-8461-029adc5f9d9f`
        )
        .then(response =>
          this.setState({
            sideVideos: this.state.allVideos.filter(
              video => video.id !== this.props.match.params.videoId
            ),
            mainVideo: response.data
          })
        );
    }
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
