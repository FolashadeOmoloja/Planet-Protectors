import React, {useState} from 'react'
import { NavLink } from "react-router-dom";
import './Nav.css'
import Logo from '../../assets/logo.svg'
import {HiHome} from 'react-icons/hi'
import {GiStarFormation} from 'react-icons/gi'
import {ImPriceTags} from 'react-icons/im'
import {MdRecycling} from 'react-icons/md'
import {MdOutlineContactSupport} from 'react-icons/md'
import {BiLogIn} from 'react-icons/bi'
import {ImCross} from 'react-icons/im'
import {GoThreeBars} from 'react-icons/go'


const Nav = () => {
  const [Menu, showMenu] = useState({
    display: "none"
  })
const [isActivate, setIsActivate] = useState(false)
const handleClick = () =>{
setIsActivate(!isActivate)
}
  const openMenu = () =>{
    showMenu({
      display: 'flex'
    })
  }
  const closeMenu = () =>{
    showMenu({
      display: 'none'
    })
  }
  return (
<nav className='section-container nav'>
  <ul className='align-center'>
    <li className='logo' style={{marginLeft: '100px'}} >
      <img src={Logo} alt=""  />
    </li>
    <li className='logo2' onClick={openMenu} style={{marginLeft: '30px', fontSize: '25px'}}>
      <GoThreeBars/>
    </li>
    <li className='navlinks align-center'>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'>Home</NavLink>
       <a style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} href ='#features'>Features</a>
       <a style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} href ='#pricing'>Pricing</a>
       <a style={{textDecoration: 'none'}} onClick={handleClick}   className={({isActive}) => (isActive ? "active" : '')} href ='#aboutUs'>About Us</a>
       <a style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} href ='#contact'>Contact Us</a>
    </li>
    <li className='login align-center'>
      <NavLink style={{textDecoration: 'none'}}  to ='/login'>Sign in</NavLink>
      <NavLink style={{textDecoration: 'none'}}  to ='/signupas'  className='SignUp align-center button'>Sign Up</NavLink>
    </li>
  </ul>
  <div className='show_menu' style={{...Menu}}>
  <div className='flex flexSpacebtw' style={{fontSize: '18px', width: '100%', fontWeight: '600'}}>
  <li className='logo2' >
      <img src={Logo} alt="" />
    </li>
    <li onClick={closeMenu}>
      <ImCross/>
    </li>
  </div>

       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><HiHome/></span> <span>Home</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><GiStarFormation/></span> <span>Features</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><ImPriceTags/></span> <span>Pricing</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><MdRecycling/></span> <span>About Us</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/home'><span className='navicon'><MdOutlineContactSupport/></span> <span>Contact Us</span></NavLink>
       <NavLink style={{textDecoration: 'none'}}   className={({isActive}) => (isActive ? "active" : '')} to='/profile'><span className='navicon'><BiLogIn/></span> <span>Sign in</span></NavLink>
  </div>

</nav>
  )
}

export default Nav