
import ImgMusic from '../../assets/imgVideo.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import './TuVideo.css'

const TuVideo = () => {
  return (
    <div>
      <div className="contenedor-video">
       <div className='title-video'>
          <h1>Tus videos</h1>
       </div>
       <div className='subtitle-video'>
          <h1>Videos</h1>
       </div>
       <div className='img-container'>
          <img src={ImgMusic}></img>
       </div>
       <div className='p-container'>
          <p><PlayCircleIcon className='icon-video'></PlayCircleIcon>106 Reproducciones</p>
       </div>
    </div>
    </div>
  )
}

export default TuVideo
