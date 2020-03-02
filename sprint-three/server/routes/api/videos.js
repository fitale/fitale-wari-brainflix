const express = require("express");
const videosFile = __dirname + "/../../models/videos.json";
const videos = require(videosFile);
const helper = require("../../helper/helper");
const router = express.Router();

router.get("/", (req, res) => {
  const videoList = videos.map(video => {
    return {
      id: video.id,
      title: video.title,
      channel: video.channel,
      image: video.image
    };
  });
  res.json(videoList);
});

router.get("/:videoId", (req, res) => {
  console.log(req.params.videoId);
  const found = videos.some(video => video.id === req.params.videoId);
  if (found) {
    res.json(videos.filter(video => video.id === req.params.videoId));
  } else {
    res.status(404).json({
      errorMessage: `Video with ID: ${req.params.videoId} not found`
    });
  }
});

router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    channel: "Fitale Wari",
    image: req.body.image,
    description: req.body.description,
    views: "345,987",
    likes: "76,588",
    duration: "12:26",
    timestamp: 1545377524000,
    comments: [
      {
        name: "Micheal Lyons",
        comment:
          "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
        id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
        likes: 0,
        timestamp: 1545162149000
      },
      {
        name: "Gary Wong",
        comment:
          "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He’s so talented! I wish I can ride like him one day so I can really enjoy myself!",
        id: "cc6f173d-9e9d-4501-918d-bc11f15a8e14",
        likes: 0,
        timestamp: 1544595784046
      },
      {
        name: "Theodore Duncan",
        comment:
          "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He’s definitely my favorite ever!",
        id: "993f950f-df99-48e7-bd1e-d95003cc98f1",
        likes: 0,
        timestamp: 1542262984046
      }
    ]
  };
  if (!newVideo.title || !newVideo.description || !newVideo.image) {
    return res.status(400).json({
      errorMessage: "Please provide title, description, and image for the video"
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(videos);
});

module.exports = router;
