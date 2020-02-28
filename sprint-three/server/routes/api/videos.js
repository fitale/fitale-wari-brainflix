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

console.log("hello");
router.post("/", (req, res) => {
  const newVideo = {
    id: helper.getNewId(),
    title: req.body.title,
    description: req.body.description
  };
  console.log(newVideo);
  if (!newVideo.title || !newVideo.description) {
    return res.status(400).json({
      errorMessage: "Please provide title, description, and image for the video"
    });
  }
  videos.push(newVideo);
  helper.writeJSONFile(videosFile, videos);
  res.json(videos);
});

// router.put("/:id", (req, res) => {
//   const found = videos.some(video => video.id === req.params.id);
//   if (found) {
//     videos.forEach(video => {
//       if (video.id === req.params.id) {
//         video.title = req.video.title ? req.body.title : video.title;
//         video.description = req.video.description
//           ? req.body.description
//           : video.description;
//         video.channel = req.video.channel ? req.video.channel : video.channel;
//         video.image = req.video.image ? req.video.image : video.image;
//       }
//     });
//     helper.writeJSONFile(videosFile, videos);
//     res.json({ msg: "Video updated", videos: videos });
//   } else {
//     res.status(404).json({
//       errorMessage: `Video with ID: ${req.params.id} not found`
//     });
//   }
// });

module.exports = router;
