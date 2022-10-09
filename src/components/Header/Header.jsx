import React from 'react'
import './Header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello, I'm </h5>
        <h1>Gonzalo Pereira Dos Santos</h1>
        <h5 className='text-light'>And I'm a Fullstack Web Developer</h5>
        <CTA />
        <HeaderSocials/>
      </div>
    </header>
  )
}

export default Header