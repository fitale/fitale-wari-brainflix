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
      <Highlights />
      <Comments />
      <Nextvideo />
    </div>
  );
}
