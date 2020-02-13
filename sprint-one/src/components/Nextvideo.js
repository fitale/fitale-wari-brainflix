import React from "react";
import video1 from "../assets/images/video-list-1.jpg";
import video2 from "../assets/images/video-list-2.jpg";
import video3 from "../assets/images/video-list-3.jpg";
import video4 from "../assets/images/video-list-4.jpg";
import video5 from "../assets/images/video-list-5.jpg";
import video6 from "../assets/images/video-list-6.jpg";
import video7 from "../assets/images/video-list-7.jpg";
import video8 from "../assets/images/video-list-8.jpg";

export default function Nextvideo() {
  let nextVideo = [
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
  ];

  let html = nextVideo.map((object, i) => {
    return (
      <div className="next-video__container" key={i}>
        <img
          src={object["img"]}
          alt="videoscreenshot"
          className="next-video__container--img"
        />
        <div className="next-video__container--text">
          <h3 className="title">{object["title"]}</h3>
          <p className="creator">{object["creator"]}</p>
        </div>
      </div>
    );
  });
  return (
    <section className="next-video">
      <h3 className="next-video__title">NEXT VIDEO</h3>
      {html}
    </section>
  );
}
