import React from 'react'
import './footer.css'
import { FaFacebookSquare } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { IoLogoTwitter } from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#top" className="footer__logo">
        KalBlitz
      </a>

      <ul className="permalinks">
        <li>
          <a href="#top">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="http://facebook.com" target="_blank" rel="noreferrer">
          <FaFacebookSquare />
        </a>
        <a href="http://instagram.com" target="_blank" rel="noreferrer">
          <FiInstagram />
        </a>
        <a href="http://twitter.com" target="_blank" rel="noreferrer">
          <IoLogoTwitter />
        </a>
      </div>
      <div className="footer__copyright">
        <small>&copy; EGATOR Tutorials. ALl rights reserved</small>
      </div>
    </footer>
  )
}

export default Footer
