import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {AiFillCodepenCircle} from 'react-icons/ai'
import {FaFreeCodeCamp} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>
        <a href='https://linkedin.com' target='_blank'><BsLinkedin /></a>
        <a href='https://github.com/gonzapds' target='_blank'><FaGithub /></a>
        <a href='https://codepen.io/gonsito' target='_blank'><AiFillCodepenCircle /></a>
        <a href='https://www.freecodecamp.org/fcc523e4a62-aec3-4ab1-b508-90c27371a66d' target='_blank'><FaFreeCodeCamp /></a>
    </div>
  )
}

export default HeaderSocials