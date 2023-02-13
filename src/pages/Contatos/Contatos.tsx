import './Contatos.css'
import Navbar from '../../components/navbar/Navbar';
import {BsLinkedin, BsGithub, BsInstagram, BsWhatsapp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

function Contatos() {
    return (
      <div className='pagecontatos'>
        <Navbar/>
        <div className="flexboxcontatos">
          <h1 className='titleContatos'>Contatos</h1>
          <ul className='buttonsContatos'>
            <a  href="https://github.com/CarlosNayan" target="_blank"><button className='github'> <BsGithub/>  Github</button></a>
            <a  href="https://www.linkedin.com/in/carlos-nayan-505298183/" target="_blank"><button className='linkedin'> <BsLinkedin/> Linkedin</button></a>
            <a href="https://www.instagram.com/carls_nayan/" target="_blank"><button className='instagram'> <BsInstagram/> Instagram</button></a>
            <a href="https://wa.me/+5591991869898" target="_blank"><button className='telefone'> <BsWhatsapp/> Whatsapp</button></a>
            <a href="mailto:carlosnayan@gmail.com" target="_blank"><button className='email'> <MdEmail/> Email</button></a>
          </ul>
        </div>
      </div>
    );
}

export default Contatos