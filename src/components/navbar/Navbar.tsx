import { Link } from 'react-router-dom'
import {BsFillHouseDoorFill, BsTerminalFill, BsFillInfoSquareFill, BsFillPersonLinesFill}  from 'react-icons/bs'
import './navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
          <Link to='/' className='nav' title='Home'> <BsFillHouseDoorFill className='nav-icon'/></Link> 
          <Link to='/projetos' className='nav' title='Projetos'> <BsTerminalFill className='nav-icon'/> </Link>
          <Link to='/sobre' className='nav' title='Sobre'> <BsFillInfoSquareFill className='nav-icon'/> </Link>
          <Link to='/contatos' className='nav' title='Contatos'> <BsFillPersonLinesFill className='nav-icon'/> </Link>
        </nav>
    )
}

export default Navbar;