import { useEffect, useRef } from 'react'
import './Technologies.css'

const Technologies = () => {
 
  const technologies = [
    { name: 'React', percentage: 70, color: '#61dafb', logo: '/tech-logos/react.svg' },
    { name: 'JavaScript', percentage: 85, color: '#f7df1e', logo: '/tech-logos/javascript.svg' },
    { name: 'TypeScript', percentage: 80, color: '#3178c6', logo: '/tech-logos/typescript.svg' },
    { name: 'Node.js', percentage: 85, color: '#339933', logo: '/tech-logos/nodejs.svg' },
    { name: 'Python', percentage: 70, color: '#3776ab', logo: '/tech-logos/python.svg' },
    { name: 'CSS/SCSS', percentage: 80, color: '#1572b6', logo: '/tech-logos/css.svg' },
    { name: 'Git', percentage: 80, color: '#f05032', logo: '/tech-logos/git.svg' },
    { name: 'MongoDB', percentage: 75, color: '#47a248', logo: '/tech-logos/mongodb.svg' },
    { name: 'MySQL', percentage: 75, color: '#00758f', logo: '/tech-logos/mysql.svg' },
    { name: 'PostgreSQL', percentage: 75, color: '#336791', logo: '/tech-logos/postgre.svg' },
    { name: 'Bash', percentage: 75, color: '#3e474a', logo: '/tech-logos/bash.svg' },
    { name: 'Docker', percentage: 50, color: '#0db7ed', logo: '/tech-logos/docker.svg' },
    { name: 'Java', percentage: 50, color: '#f89820', logo: '/tech-logos/java.svg' },
    { name: 'Excel', percentage: 70, color: '#217346', logo: '/tech-logos/excel.svg' },
  ]

  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const bars = entry.target.querySelectorAll('.progress-bar-fill')
            bars.forEach((bar) => {
              const percentage = bar.getAttribute('data-percentage')
              setTimeout(() => {
                bar.style.width = `${percentage}%`
              }, 100)
            })
          }
        })
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="technologies" className="technologies" ref={sectionRef}>
      <div className="technologies-container">
        <h2 className="section-title">
          <span className="gradient-text">Tecnologías</span>
        </h2>
        <p className="section-subtitle">
          Herramientas y tecnologías que domino
        </p>

        <div className="tech-grid">
          {technologies.map((tech, index) => (
            <div key={index} className="tech-card">
              <div className="tech-header">
                <div className="tech-info">
                  <div className="tech-logo-wrapper">
                    <img 
                      src={tech.logo} 
                      alt={`${tech.name} logo`}
                      className="tech-logo"
                      onError={(e) => {
                        // Si el logo no existe, ocultar la imagen
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                  <span className="tech-name">{tech.name}</span>
                </div>
                <span className="tech-percentage">{tech.percentage}%</span>
              </div>
              <div className="progress-bar">
                <div
                  className="progress-bar-fill"
                  data-percentage={tech.percentage}
                  style={{ '--tech-color': tech.color }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies


