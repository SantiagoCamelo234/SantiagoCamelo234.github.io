import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import './Projects.css'

const Projects = () => {
  
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description: 'Plataforma de comercio electrónico completa con carrito de compras, sistema de pagos y panel de administración.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Proyecto+1',
      github: 'https://github.com/tu-usuario/proyecto-1',
      demo: 'https://demo-proyecto-1.com',
      featured: true
    },
    {
      id: 2,
      title: 'Sistema de Gestión de Hospitales',
      description: 'Aplicación web para gestión de Hospitales, incluyendo autenticacion de usuarios, CRUD, gestion de permisos y generacion de reportes.',
      technologies: ['React', 'JavaScript', 'MongoDB', 'Node.js', 'Express'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Proyecto+2',
      github: 'https://github.com/tu-usuario/proyecto-2',
      demo: 'https://demo-proyecto-2.com',
      featured: false
    },
    {
      id: 3,
      title: 'Gestor de presupuesto',
      description: 'Aplicacion de gestion de presupuesto personal, incluyendo autenticacion de usuarios, CRUD, gestion de presupuesto y generacion de reportes. Todo a traves de la implementacion de un chatbot donde puedes registrar tus gastos.',
      technologies: ['React', 'Python', 'PostgreSQL', 'FastAPI'],
      image: 'https://via.placeholder.com/600x400/6366f1/ffffff?text=Proyecto+3',
      github: 'https://github.com/tu-usuario/proyecto-3',
      demo: 'https://demo-proyecto-3.com',
      featured: false
    },
    {
      id: 4,
      title: 'Proyecto en proceso',
      description: 'Panel de control con visualización de datos y métricas en tiempo real.',
      technologies: ['React', 'D3.js', 'Python'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Proyecto+4',
      github: 'https://github.com/tu-usuario/proyecto-4',
      demo: 'https://demo-proyecto-4.com',
      featured: false
    },
    {
      id: 5,
      title: 'Proyecto en proceso',
      description: 'Panel de control con visualización de datos y métricas en tiempo real.',
      technologies: ['React', 'D3.js', 'Python'],
      image: 'https://via.placeholder.com/600x400/8b5cf6/ffffff?text=Proyecto+4',
      github: 'https://github.com/tu-usuario/proyecto-4',
      demo: 'https://demo-proyecto-4.com',
      featured: false
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="gradient-text">Proyectos</span>
        </h2>
        <p className="section-subtitle">
          Algunos de mis trabajos más destacados
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.featured ? 'featured' : ''}`}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Ver código en GitHub"
                    >
                      <FaGithub />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      aria-label="Ver demo"
                    >
                      <FaExternalLinkAlt />
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects



