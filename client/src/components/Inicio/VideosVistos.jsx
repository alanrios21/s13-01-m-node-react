import React, { useRef } from "react";
import video3 from "../../assets/video3.mp4";
import video4 from "../../assets/video4.mp4";
import video6 from "../../assets/video6.mp4";
import video8 from "../../assets/video8.mp4";

const VideosVistos = () => {
  const videos = [video6, video4, video3, video8];

  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="grid grid-cols-4 xl:grid-cols-4 md:grid-cols-2  xs:grid-cols-1  gap-4 mb-8 mt-8">
      {videos.map((video, index) => (
        <video
          key={index}
          controls
          className="mb-4 rounded-xl"
          ref={(ref) => (videoRefs.current[index] = ref)}
          onClick={() => handlePlay(index)}
          onPlay={() => handlePlay(index)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideosVistos;
