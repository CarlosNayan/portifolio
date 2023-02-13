import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home/Home'
import Projetos from './pages/Projetos/Projetos'
import Sobre from './pages/Sobre mim/Sobre'
import Contatos from './pages/Contatos/Contatos'
import { Footer } from './components/footer/Footer'


const rotas = createBrowserRouter([
  {path: "/",element: <Home/>},
  {path: "/projetos",element: <Projetos/>},
  {path: "/sobre",element: <Sobre/>},
  {path: "/contatos",element: <Contatos/>}
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render( 
  <React.StrictMode>
    <div id='page'>
    <RouterProvider router={rotas} />
    <Footer/>
    </div>
  </React.StrictMode>,
)
