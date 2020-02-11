import React, { Component } from "react";
import brainflixLogo from "../assets/logo/brainflixlogo.svg";
import userIcon from "../assets/images/user-icon.jpg";

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header__logo">
          <img
            alt="brainflixlogo"
            className="header__logo--image"
            src={brainflixLogo}
          />
        </div>
        <div className="header__search">
          <input
            type="text"
            className="header__search--input"
            placeholder="Search..."
          />
        </div>
        <div className="header__bottom">
          <div className="header__bottom--button">
            <button className="text">+ UPLOAD</button>
          </div>
          <div className="header__bottom--image">
            <img alt="usericon" className="image" src={userIcon} />
          </div>
        </div>
      </div>
    );
  }
}
