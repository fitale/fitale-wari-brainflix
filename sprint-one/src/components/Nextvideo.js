import React from "react";

export default function Nextvideo({ videoProp }) {
  let html = videoProp.map((object, i) => {
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
