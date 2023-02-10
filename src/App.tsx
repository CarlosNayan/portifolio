import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/navbar/Navbar';
import { Footer } from './components/footer/Footer';
import Routes from './routes.js'
import './app.css'

function App() {
  return (
    <BrowserRouter>
          
      <div id='page'>

        <Routes/>
        <Navbar />
        <Footer />
      
      </div>

    </BrowserRouter>
  );
}

export default App
