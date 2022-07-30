import './index.scss'
import LogoS from '../../images/logo-s.png'
import LogoSubtitle from '../../images/logo_sub.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
  faInstagram,
  faKaggle,
} from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope, faCoffee, faBook, faCode } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
        <img className="sub-logo" src={LogoSubtitle} alt="priyanshu" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faBook} color="#4d4d4e" />
        </NavLink>
        <NavLink 
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
      <ul>
      <li>
          <a
            href="https://leetcode.com/Priyanshu_Arya/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faCode} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.kaggle.com/codoes"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faKaggle} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/priyanshu-arya-934804169/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/priyanshu-arya"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mr_coder.ai/"
            rel="noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a href="https://www.buymeacoffee.com/priyanshuarya" rel="noreferrer" target="_blank">
            <FontAwesomeIcon icon={faCoffee} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
