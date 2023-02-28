import astronauta from '/assets/astronauta.png'
import Navbar from '../../components/navbar/Navbar';
import Typewriter from 'typewriter-effect';
import './Home.css'



function Home() {
  return (    
    <div className='pagehome'>

     <Navbar/> 
      <div className='flexboxhome1' >
        <p className='titlehome' >
          <div className='lineeffect' >
            <div className='letters' >O</div>
            <div className='letters' >l</div>
            <div className='letters' >á</div>
            <div className='letters' >!</div>
          </div>
          <div className='lineeffect'>
            <div className='letters' >S</div>
            <div className='letters' >o</div>
            <div className='letters' >u</div>
            <div>&nbsp;</div>
            <div className='letters' >C</div>
            <div className='letters' >a</div>
            <div className='letters' >r</div>
            <div className='letters' >l</div>
            <div className='letters' >o</div>
            <div className='letters' >s</div>
            <div className='letters' >,</div>
          </div>
          <div className='lineeffect'>
            <div className='letters' >d</div>
            <div className='letters' >e</div>
            <div className='letters' >s</div>
            <div className='letters' >e</div>
            <div className='letters' >n</div>
            <div className='letters' >v</div>
            <div className='letters' >o</div>
            <div className='letters' >l</div>
            <div className='letters' >v</div>
            <div className='letters' >e</div>
            <div className='letters' >d</div>
            <div className='letters' >o</div>
            <div className='letters' >r</div>
            <div>&nbsp;</div>
            <div className='letters' >w</div>
            <div className='letters' >e</div>
            <div className='letters' >b</div>
            <div className='letters' >.</div>
          </div>
          </p>
        <p className='texthome'>I'm 
        <Typewriter 
        options={{
          strings: ['Front-end React developer.', 'Back-end Node.js developer.'],
          autoStart: true,
          loop: true,
        }}/> 
        </p>
      </div>

      <div className='flexboxhome2'>
        <img src={astronauta} alt="" className='astronauta' />
      </div>
        
    </div>
  );
}

export default Home