import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>Gonzalo Pereira Dos Santos</a>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#technologies'>Technologies</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer_copyright">
        <small>&copy; Gonzalo Pereira Dos Santos. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer