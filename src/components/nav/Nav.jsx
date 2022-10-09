import React from 'react';
import './Nav.css';
import { AiOutlineHome } from 'react-icons/ai';
import { AiOutlineUser } from 'react-icons/ai';
import { BsBook } from 'react-icons/bs';
import { AiOutlineMessage } from 'react-icons/ai';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { useState } from 'react';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav("#")} className={activeNav === "#" ? 'active' : ""}><AiOutlineHome/></a>
      <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === '#about' ? 'active' : ""}><AiOutlineUser/></a>
      <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === '#portfolio' ? 'active' : ""}><BsBook/></a>
      <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === '#services' ? 'active' : ""}><HiOutlineLightBulb/></a>
      <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === '#contact' ? 'active' : ""}><AiOutlineMessage/></a>
    </nav>
  )
}

export default Nav