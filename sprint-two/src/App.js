import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from "./components/Header.js";
import Uploads from "./components/Uploads.js";
import Home from "./components/Home.js";

// import uuid from "uuid/v1";
import "./styles/main.css";
import heroImage from "./assets/images/video-list-0.jpg";

// imported images for Nextvideo.js
import video1 from "./assets/images/video-list-1.jpg";
import video2 from "./assets/images/video-list-2.jpg";
import video3 from "./assets/images/video-list-3.jpg";
import video4 from "./assets/images/video-list-4.jpg";
import video5 from "./assets/images/video-list-5.jpg";
import video6 from "./assets/images/video-list-6.jpg";
import video7 from "./assets/images/video-list-7.jpg";
import video8 from "./assets/images/video-list-8.jpg";

export default class App extends Component {
  state = {
    mainVideo: {
      id: "type of <string>",
      title: "BMX Rampage: 2018 Highlights",
      description:
        "On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen.While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title",
      channel: "By Red Cow",
      image: heroImage,
      views: "1,001,023",
      likes: "110,985",
      duration: "type of <string>",
      video: "type of <string>",
      timestamp: "12/18/2018",
      comments: [
        {
          name: "Michael Lyons",
          date: "12/18/2018",
          comment:
            "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of a concert I have EVER witnessed."
        },
        {
          name: "Gary Wong",
          date: "12/18/2018",
          comment:
            "Every time I see him shred I feel so motivated to get off my couch and hop on my board.He’s so talented! I wish I can ride like him one day so I can really enjoy myself!"
        },
        {
          name: "Theodore Duncan",
          date: "11/15/2018",
          comment:
            "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!"
        }
      ]
    },
    nextVideo: [
      {
        img: video1,
        title: "Become A Travel Pro In One Easy Lesson",
        creator: "Todd Welch"
      },
      {
        img: video2,
        title: "Les Houches The Hidden Gem Of The Chamonix",
        creator: "Cornelia Blair"
      },
      {
        img: video3,
        title: "Travel Health Useful Medical Information For",
        creator: "Glen Harper"
      },
      {
        img: video4,
        title: "Cheap Airline Tickets Great Ways To Save",
        creator: "Emily Harper"
      },
      {
        img: video5,
        title: "Take A Romantic Break In A Boutique Hotel",
        creator: "Ethan Owen"
      },
      {
        img: video6,
        title: "Choose The Perfect Accommodations",
        creator: "Lydia Perez"
      },
      {
        img: video7,
        title: "Cruising Destination Ideas",
        creator: "Timothy Austin"
      },
      {
        img: video8,
        title: "Train Travel On Track For Safety",
        creator: "Scotty Cranmer"
      }
    ]
  };

  render() {
    return (
      <Router>
        <Header />
        <Switch>
          <Redirect from="/" to="/home" exact />
          <Route
            path="/home"
            render={props => <Home state={this.state} {...props} />}
          />
          <Route path="/uploads" component={Uploads} />
        </Switch>
      </Router>
    );
  }
}
