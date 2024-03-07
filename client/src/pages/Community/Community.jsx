import "./Community.css";
import ArtistOne from '../../assets/img-artist01.png'
import ArtistTwo from '../../assets/img-artist02.png'
import ArtistThree from '../../assets/img-artist03.png'
import ArtisFor from '../../assets/img-artist04.png'
import BandasOne from '../../assets/img-banda01.png'
import BandasTwo from '../../assets/img-banda02.png'
import BandasThree from '../../assets/img-banda03.png'
import BandasFor from '../../assets/img-banda04.png'
import BandasFive from '../../assets/img-banda05.png'
import ProjectsOne from '../../assets/img-project01.png'
import ProjectsTwo from '../../assets/img-project02.png'
import ProjectsThree from '../../assets/img-project03.png'
import ProjectsFor from '../../assets/img-project04.png'
import ProjectsFive from '../../assets/img-project05.png'

const Community = () => {
  return (
    <div>
     <div className="container-community">
       <h1 className="title-artist">Conecta con otros artistas</h1>
       <div className="container-img-artists">
            <img src={ArtistOne}></img>
            <img src={ArtistTwo}></img>
            <img src={ArtistThree}></img>
            <img src={ArtisFor}></img>
       </div>
       <h1 className="title-bandas">Bandas</h1>
       <div className="container-img-bandas">
            <img src={BandasOne}></img>
            <img src={BandasTwo}></img>
            <img src={BandasThree}></img>
            <img src={BandasFor}></img>
            <img src={BandasFive}></img>
       </div>
       <h1 className="title-bandas">Projectos musicales</h1>
       <div className="container-img-bandas">
            <img src={ProjectsOne}></img>
            <img src={ProjectsTwo}></img>
            <img src={ProjectsThree}></img>
            <img src={ProjectsFor}></img>
            <img src={ProjectsFive}></img>
       </div>
    </div>
    
    </div>
  )
}

export default Community
