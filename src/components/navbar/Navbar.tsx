import { Link } from 'react-router-dom'
import {BsFillHouseDoorFill, BsTerminalFill, BsFillInfoSquareFill, BsFillPersonLinesFill}  from 'react-icons/bs'
import './navbar.css'

const Navbar = () => {
    return(
        <nav className='navbar'>
          <Link to='/' className='nav'> <BsFillHouseDoorFill className='nav-icon'/> </Link> 
          <Link to='/projetos' className='nav'> <BsTerminalFill className='nav-icon'/> </Link>
          <Link to='/sobre' className='nav'> <BsFillInfoSquareFill className='nav-icon'/> </Link>
          <Link to='/contatos' className='nav'> <BsFillPersonLinesFill className='nav-icon'/> </Link>
        </nav>
    )
}

export default Navbar;