import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/logo.png';
import '../style.scss';
import { AuthContext } from '../context/authContext';

export default function NavBar() {
  const { currentUser, login, logout } = useContext(AuthContext);
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <Link to='/'>
            <img src={Logo} alt='logo'/>
          </Link>
        </div>
        <div className="links">
          <Link className="link" to='/?cat=art'>art</Link>
          <Link className="link" to='/?cat=science'>science</Link>
          <Link className="link" to='/?cat=technology'>technology</Link>
          <Link className="link" to='/?cat=design'>design</Link>
          <Link className="link" to='/?cat=food'>food</Link>
          <span>{currentUser?.username}</span>
          {currentUser ? 
              <span onClick={logout}>Logout</span>
            :<Link to='/login'>Login</Link>
            }
          <Link className="link" to='/create-post'>Create</Link>
        </div>
      </div>
    </div>
  )
}
