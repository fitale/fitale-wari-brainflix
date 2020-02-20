import React from "react";
import Hero from "./Hero.js";
import Highlights from "./Highlights.js";
import Comments from "./Comments.js";
import Nextvideo from "./Nextvideo.js";

export default function Home(props) {
  return (
    <>
      <Hero mainVideo={props.mainVideo} />
      <main id="huge-flex">
        <div id="huge-flex__left">
          <Highlights mainVideo={props.mainVideo} />
          <Comments mainComments={props.mainVideo.comments} />
        </div>
        <div id="huge-flex__right">
          <Nextvideo sideVideos={props.sideVideos} />
        </div>
      </main>
    </>
  );
}
