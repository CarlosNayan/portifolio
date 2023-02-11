import './Projetos.css'
import Navbar from '../../components/Navbar/Navbar';

function Projetos() {
    return (
      <div className="projetos">
        <Navbar/>
        <div className='titleProjetos'>
          <div className='lineeffect'>
                <div className='letters' >P</div>
                <div className='letters' >o</div>
                <div className='letters' >j</div>
                <div className='letters' >e</div>
                <div className='letters' >t</div>
                <div className='letters' >o</div>
                <div className='letters' >s</div>
          </div>
        </div>
        <br />
        <br />
        <p className='textprojetos'>Em progresso...</p>

      </div>
    );
}

export default Projetos