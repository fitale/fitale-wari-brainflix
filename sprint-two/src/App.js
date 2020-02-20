import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import axios from "axios";
import Header from "./components/Header.js";
import Uploads from "./components/Uploads.js";
import Home from "./components/Home.js";
// import uuid from "uuid/v1";
import "./styles/main.css";

export default class App extends Component {
  state = {
    sideVideos: [],
    mainVideo: {}
  };

  componentDidMount() {
    const videoId = "1af0jruup5gu";
    axios
      .get(
        "https://project-2-api.herokuapp.com/videos?api_key=ac407f21-6062-412c-8461-029adc5f9d9f"
      )
      .then(response => {
        this.setState({
          sideVideos: response.data.filter(video => video.id !== videoId)
        });
      });

    axios
      .get(
        `https://project-2-api.herokuapp.com/videos/${videoId}?api_key=ac407f21-6062-412c-8461-029adc5f9d9f`
      )
      .then(response =>
        this.setState({
          mainVideo: response.data
        })
      );
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevProps.match.params.videoId !== this.props.match.params.videoId) {
    //   this.setState({
    //     videos: this.state.videos
    //   });
    // }
  }

  render() {
    if (this.state.sideVideos.length === 0) return <h1>loading.</h1>;
    else
      return (
        <Router>
          <Header />
          <Switch>
            <Redirect from="/" to="/home" exact />
            <Route
              path="/home"
              render={props => (
                <Home
                  sideVideos={this.state.sideVideos}
                  mainVideo={this.state.mainVideo}
                  {...props}
                />
              )}
            />
            <Route
              path="/videos/:videoId"
              render={props => (
                <Home
                  mainVideo={this.state.mainVideo}
                  sideVideos={this.state.sideVideos}
                  {...props}
                />
              )}
            />
            <Route path="/uploads" component={Uploads} />
          </Switch>
        </Router>
      );
  }
}
