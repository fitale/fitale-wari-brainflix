import React from "react";
import Header from "./components/Header.js";
import Hero from "./components/Hero.js";
import "./styles/main.css";
// import uuid from "uuid/v1";
import Highlights from "./components/Highlights.js";
import Comments from "./components/Comments.js";
import Nextvideo from "./components/Nextvideo.js";

export default function App() {
  return (
    <div id="root">
      <Header />
      <Hero />
      <main id="huge-flex">
        <div id="huge-flex__left">
          <Highlights />
          <Comments />
        </div>
        <div id="huge-flex__right">
          <Nextvideo />
        </div>
      </main>
    </div>
  );
}
