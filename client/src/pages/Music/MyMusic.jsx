
import './MyMusic.css'
import ImgMusic from '../../assets/imgMusic.png'
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

const MyMusic = () => {
  return (
    <div className="contenedor-music">
       <div className='title-music'>
          <h1>Tu musica</h1>
       </div>
       <div className='subtitle-music'>
          <h1>Demos</h1>
       </div>
       <div className='img-container'>
          <img src={ImgMusic}></img>
       </div>
       <div className='p-container'>
          <p><PlayCircleIcon className='icon-music'></PlayCircleIcon>225 Reproducciones</p>
       </div>
    </div>
  )
}

export default MyMusic
