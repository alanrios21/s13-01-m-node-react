import React, { useRef } from 'react';
import Rockmantico from '../../assets/Rockmantico.mp4';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';
import video4 from '../../assets/video4.mp4';
import video5 from '../../assets/video5.mp4';
import video6 from '../../assets/video6.mp4';
import video7 from '../../assets/video7.mp4';
import video8 from '../../assets/video8.mp4';
import video9 from '../../assets/video9.mp4';
import video10 from '../../assets/video10.mp4';

const DemosMulti = () => {
  const videos = [
    video10,
    video7,
    video6,
    video8,
    video4,
    video9,
    video2,
    video1,
    video3,
    video5,
    Rockmantico
  ];

  const videoRefs = useRef([]);

  const handlePlay = (index) => {
    videoRefs.current.forEach((video, i) => {
      if (i !== index && !video.paused) {
        video.pause();
      }
    });
  };

  return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8 mt-8">
      {videos.map((video, index) => (
        <video
          key={index}
          controls
          className='mb-4 rounded-xl'
          ref={(ref) => videoRefs.current[index] = ref}
          onClick={() => handlePlay(index)}
          onPlay={() => handlePlay(index)}
        >
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
}

export default DemosMulti;