import React from "react";
import music1 from "../../assets/music1.mp3";
import music2 from "../../assets/music2.mp3";
import music3 from "../../assets/music3.mp3";
import music4 from "../../assets/music4.mp3";

const MusicaMas = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-8 mt-4">
      <div className="flex flex-col items-center gap-4">
        <audio controls className="w-44">
          <source src={music1} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="flex-grow">Un beso - Romeo Paez</p>
      </div>
      <div className="flex  flex-col items-center gap-4">
        <audio controls className="w-44">
          <source src={music2} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="flex-grow"> Con sabor - Linda Palma</p>
      </div>
      <div className="flex  flex-col items-center gap-4">
        <audio controls className="w-44">
          <source src={music3} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="flex-grow">Mas de ti - Humberto Rueda</p>
      </div>
      <div className="flex  flex-col items-center gap-4">
        <audio controls className="w-44">
          <source src={music4} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
        <p className="flex-grow">Todo de ti - Ana Luna</p>
      </div>
    </div>
  );
};

export default MusicaMas;
