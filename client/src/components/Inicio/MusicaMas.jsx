import React, { useRef } from "react";
import music1 from "../../assets/music1.mp3";
import music2 from "../../assets/music2.mp3";
import music3 from "../../assets/music3.mp3";
import music4 from "../../assets/music4.mp3";

const MusicaMas = () => {
  const audios = [music1, music2, music3, music4];

  const audioRefs = useRef([]);

  const handlePlay = (index) => {
    audioRefs.current.forEach((audio, i) => {
      if (i !== index && !audio.paused) {
        audio.pause();
      }
    });
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-8 mt-4">
      {audios.map((audio, index) => (
        <div
          key={index}
          className="flex flex-col items-center gap-4 w-36 m-auto"
        >
          <audio
            controls
            ref={(ref) => (audioRefs.current[index] = ref)}
            onClick={() => handlePlay(index)}
            onPlay={() => handlePlay(index)}
          >
            <source src={audio} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      ))}
    </div>
  );
};

export default MusicaMas;
