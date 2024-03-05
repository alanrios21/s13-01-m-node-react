const VideosMulti = ({ videos, loading }) => {
  return (
    <div className="grid grid-cols-3 min-h-[60vh]  xl:grid-cols-3 md:grid-cols-2  xs:grid-cols-1  gap-4 mb-8 mt-8">
      {videos.map((video, index) => (
        <video
          controls
          key={index}
          src={video.url}
          className="rounded-xl w-96 h-56 object-cover"
        >
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default VideosMulti;
