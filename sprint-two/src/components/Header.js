import React, { Component } from "react";
import brainflixLogo from "../assets/logo/brainflixlogo.svg";
import userIcon from "../assets/images/user-icon.jpg";
import searchIcon from "../assets/icons/icon-search.svg";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <Router>
        <div className="header">
          <Link to="/home">
            <div className="header__logo">
              <img
                src={brainflixLogo}
                alt="brainflixlogo"
                className="header__logo--image"
              />
            </div>
          </Link>
          <Switch>
            <Route path="/home" />
          </Switch>
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
            <button className="header__bottom--button">+ UPLOAD</button>

            <div className="header__bottom--image">
              <img src={userIcon} alt="usericon" className="image" />
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
