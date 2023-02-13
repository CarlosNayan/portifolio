import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import './Sobre.css'
import tec1 from '/assets/tec/1.png'
import tec2 from '/assets/tec/2.png'
import tec3 from '/assets/tec/3.png'
import tec4 from '/assets/tec/4.png'
import tec5 from '/assets/tec/5.png'
import tec6 from '/assets/tec/6.png'
import tec7 from '/assets/tec/7.png'
import tec8 from '/assets/tec/8.png'
import tec9 from '/assets/tec/9.png'
import tec10 from '/assets/tec/10.png'


function Sobre() {
    return (

<div className='pageabout'>
  <Navbar/> 
  <div className="flexboxabout1">
  <div className='titleSobre'>
    <div className='lineeffect'>
              <div className='letters' >S</div>
              <div className='letters' >o</div>
              <div className='letters' >b</div>
              <div className='letters' >r</div>
              <div className='letters' >e</div>
              <div>&nbsp;</div>
              <div className='letters' >m</div>
              <div className='letters' >i</div>
              <div className='letters' >m</div>
              <div>&nbsp;</div>
              <div className='letters' >&</div>
    </div>
    <div className='lineeffect'>
              <div className='letters' >H</div>
              <div className='letters' >a</div>
              <div className='letters' >b</div>
              <div className='letters' >i</div>
              <div className='letters' >l</div>
              <div className='letters' >i</div>
              <div className='letters' >d</div>
              <div className='letters' >a</div>
              <div className='letters' >d</div>
              <div className='letters' >e</div>
              <div className='letters' >s</div>   
    </div>
  </div>
    <br />
    <br />
      <div className='textSobre'>
            <div>Meu nome é Carlos, sou estudante de Gestão em TI e de programação, e tenho 24 anos de idade. Possuo habilidades em HTML, CSS, JS, NodeJS, ExpressJS, Prisma e SQL, tendo mais prática com programação front-end em React. Além disso, sou apaixonado por tecnologia e programação, e busco constantemente ampliar meus conhecimentos e habilidades.</div>
            <br />
            <div>Estou a procura de uma oportunidade para adquirir experiência profissional e desenvolver minha carreira. Acredito que minhas habilidades de aprendizado rápido e comunicação me permitem ser um membro valioso de qualquer equipe.</div>
            <br />
            <div>Estou disponível para trabalhar tanto em regime de emprego efetivo quanto de estágio, e também sou flexível quanto à mudança de cidade para acompanhar a evolução da minha carreira. Além disso, sou capaz de trabalhar tanto presencialmente quanto em regime de home office.</div>
            <br />
            <br />
            <br />
      </div>
  </div>

  <div className='flexboxabout2'>
      <div className='faculdade'>
        <h2>Gestão em Tecnologia da informação</h2>
        <p>Uniasselvi, previsão de término até dezembro <br /> de 2023</p>
      </div>
      <div className='programação'>
        <h2>Desenvolvimento WEB</h2>
        <p>Rocketseat, concluido em 04/01/2023</p>
      </div>
  </div>

  <div className='flexboxabout3'>

        <h3 className='titleTec'>Tecnologias:</h3>
        <div id='boxtec'>

          <div><img src={tec1} alt='javascript' className='tec' /></div>
          <div><img src={tec2} alt='typescript' className='tec' /></div>
          <div><img src={tec4} alt='react' className='tec' /></div>
          <div><img src={tec3} alt='node' className='tec' /></div>
          <div><img src={tec5} alt='expressjs' className='tec' /></div>
          <div><img src={tec6} alt='prisma' className='tec' /></div>
          <div><img src={tec7} alt='css' className='tec' /></div>
          <div><img src={tec8} alt='html' className='tec' /></div>
          <div><img src={tec9} alt='git' className='tec' /></div>
          <div><img src={tec10} alt='sql' className='tec' /></div>

        </div>


  </div>
  

</div>
      
    );
}

export default Sobre