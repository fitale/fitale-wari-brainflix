import React from "react";

import video1 from "../assets/images/video-list-1.jpg";
import video2 from "../assets/images/video-list-2.jpg";
import video3 from "../assets/images/video-list-3.jpg";
import video4 from "../assets/images/video-list-4.jpg";
import video5 from "../assets/images/video-list-5.jpg";
import video6 from "../assets/images/video-list-6.jpg";
import video7 from "../assets/images/video-list-7.jpg";
import video8 from "../assets/images/video-list-8.jpg";

/*
let videoArr = [
  { video1 }, // would I use `${video}` instead?
  { video2 },
  { video3 },
  { video4 },
  { video5 },
  { video6 },
  { video7 }
];
for (let key of videoArr) {
  return `<img videoArr[key] />`;
  console.log(VideoArr[key]);
}
*/
export default function Nextvideo() {
  return (
    <section className="next-video">
      <h3 className="next-video__title">NEXT VIDEO</h3>
      <div className="next-video__container">
        <img
          src={video1}
          alt="videoscreenshot"
          className="next-video__container--img"
        />
        <h3>Become A Travel Pro In One Easy Lesson</h3>
        <p>Scotty Cranmer</p>
      </div>
    </section>
  );
}
