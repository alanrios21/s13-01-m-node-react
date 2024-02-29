import React from 'react';
import Rockmantico from '../../assets/Rockmantico.mp4';
import video1 from '../../assets/video1.mp4';
import video2 from '../../assets/video2.mp4';
import video3 from '../../assets/video3.mp4';

const VideosVistos = () => {
  return (
    <div className="grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 gap-4 mb-8">
        <video controls className='mb-4 rounded-xl'>
          <source src={Rockmantico} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className='mb-4 rounded-xl'>
          <source src={video1} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className='mb-4 rounded-xl'>
          <source src={video2} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls className='mb-4 rounded-xl'>
          <source src={video3} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
  </div>
  )
}

export default VideosVistos;