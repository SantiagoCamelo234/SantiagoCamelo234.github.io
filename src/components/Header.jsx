import { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin, FaDownload } from 'react-icons/fa'
import './Header.css'

const Header = ({ activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  
  const socialLinks = {
    github: 'https://github.com/SantiagoCamelo234',
    linkedin: 'https://www.linkedin.com/in/ilvar-camelo-8b7622284/',
    cv: '/CV_IlvarCamelo.pdf' 
  }

  const navItems = [
    { id: 'about', label: 'Sobre Mí' },
    { id: 'technologies', label: 'Tecnologías' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo" onClick={() => scrollToSection('about')}>
          <span className="logo-text">Ilvar Camelo</span>
        </div>
        
        <nav className="nav">
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="header-social">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="social-icon"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={socialLinks.cv}
            download="CV_IlvarCamelo.pdf"
            className="social-icon download-btn"
            aria-label="Descargar CV"
          >
            <FaDownload />
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header


