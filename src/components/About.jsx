import './About.css'

const About = () => {
  // CONFIGURACIÓN - Cambia estos textos
  const aboutData = {
    title: 'Sobre Mí',
    subtitle: 'Desarrollador Full Stack',
    description: `Soy un desarrollador apasionado por crear soluciones innovadoras y eficientes. 
    Me especializo en el desarrollo de aplicaciones web modernas utilizando las últimas tecnologías de JavaScript. 
    Disfruto trabajando en proyectos desafiantes que me permiten crecer profesionalmente y 
    contribuir al éxito de los equipos con los que colaboro.`,
    highlights: [
      'Desarrollo de aplicaciones web escalables',
      'Experiencia en tecnologías modernas',
      'Trabajo en equipo y comunicación efectiva',
      'Enfoque en calidad y mejores prácticas'
    ]
  }

  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h1 className="about-title">
              <span className="gradient-text">{aboutData.title}</span>
            </h1>
            <h2 className="about-subtitle">{aboutData.subtitle}</h2>
            <p className="about-description">{aboutData.description}</p>
            
            <div className="highlights">
              {aboutData.highlights.map((highlight, index) => (
                <div key={index} className="highlight-item">
                  <span className="highlight-icon">✓</span>
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="about-visual">
            <div className="visual-card">
              <div className="card-glow"></div>
              <div className="card-content">
                <div className="code-snippet">
                  <div className="code-line">
                    <span className="code-keyword">const</span>
                    <span className="code-variable"> developer</span>
                    <span> = </span>
                    <span className="code-string">'{'{'}'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  name:</span>
                    <span className="code-string"> 'Ilvar Camelo'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  passion:</span>
                    <span className="code-string"> 'Desarrollo Web'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-property">  status:</span>
                    <span className="code-string"> 'Disponible'</span>
                  </div>
                  <div className="code-line">
                    <span className="code-string">{'}'}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About



