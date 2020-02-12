import React, { Component } from "react";
import viewsIcon from "../assets/icons/icon-views.svg";
import likesIcon from "../assets/icons/icon-likes.svg";

export default class Highlights extends Component {
  render() {
    return (
      <section className="highlights">
        <h1 className="highlights__title">BMX Rampage: 2018 Highlights</h1>
        <div className="highlights__flex">
          <div className="highlights__container">
            <h3 className="highlights__container--subtitle">By Red Cow</h3>
            <h3 className="highlights__container--thin-label">12/18/2018</h3>
          </div>
          <div className="highlights__container">
            <img
              src={viewsIcon}
              alt="views"
              className="highlights__container--icon"
            />
            <p className="highlights__container--para">1,001,023 </p>
            <img
              src={likesIcon}
              alt="likes"
              className="highlights__container--icon"
            ></img>
            <p className="highlights__container--para">110,985</p>
          </div>
        </div>

        <p className="highlights__para">
          On a gusty day in Southern Utah, a group of 25 daring mountain bikers
          blew the doors off what is possible on two wheels, unleashing some of
          the biggest moments the sport has ever seen. While mother nature only
          allowed for one full run before the conditions made it impossible to
          ride, that was all that was needed for event veteran Kyle Strait, who
          won the event for the second time -- eight years after his first Red
          Cow Rampage title
        </p>
      </section>
    );
  }
}
