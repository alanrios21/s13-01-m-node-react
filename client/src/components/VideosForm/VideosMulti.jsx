  import React from 'react';
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

  const VideosMulti = () => {

    return (
    <div className="grid grid-cols-3 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mb-8 mt-8">
        <video controls className='mb-4'>
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
          <video controls className='mb-4 rounded-xl'>
            <source src={video4} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video5} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video6} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video7} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video8} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video9} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <video controls className='mb-4 rounded-xl'>
            <source src={video10} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="flex justify-center mb-4 mt-4">
        </div>  
      </div>
    );
  }

  export default VideosMulti;