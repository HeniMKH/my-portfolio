import React from 'react';
import './navbar.css';
import logo from '../../assets/logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <nav className='navbar'>
     <div class="logo"><b>H<span>en</span>g<span>am</span>eh</b></div>
    
     <div class="logo1"><b>Full<span>Sta</span>ck<span>Dev</span>eloper</b></div>
     
    <div className='desktopMenu'>
      <Link className= 'desktopMenuListItem'>Home</Link>
      <Link className= 'desktopMenuListItem'>Projects</Link>
      <Link className= 'desktopMenuListItem'>About me</Link>
      <Link className= 'desktopMenuListItem'>Portfolio</Link>
    </div>
    <button className='desktopMenuBtn'>
        <img src='' alt='' className='desktopMenuImg' />Contact Me</button>
    </nav>
  )
}

export default Navbar