import React, { Component } from "react";
import brainflixLogo from "../assets/logo/brainflixlogo.svg";
import userIcon from "../assets/images/user-icon.jpg";
import searchIcon from "../assets/icons/icon-search.svg";
import { Link } from "react-router-dom";
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <Link to="/">
          <div className="header__logo">
            <img
              src={brainflixLogo}
              alt="brainflixlogo"
              className="header__logo--image"
            />
          </div>
        </Link>
        <div className="header__search">
          <img
            src={searchIcon}
            alt="searchicon"
            className="header__search--icon"
          />
          <input
            type="text"
            className="header__search--input"
            placeholder="Search..."
          />
        </div>
        <div className="header__bottom">
          <Link to="/uploads" className="header__bottom--button">
            + UPLOAD
          </Link>
          <div className="header__bottom--image">
            <img src={userIcon} alt="usericon" className="image" />
          </div>
        </div>
      </div>
    );
  }
}
