import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Uploads from "./components/Uploads.js";
import Header from "./components/Header.js";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <Header />

    <Switch>
      <Redirect from="/" to="/videos/1af0jruup5gu" exact />
      <Route path="/videos/:videoId" component={App} />
      <Route path="/uploads" component={Uploads} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
