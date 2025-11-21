import { useState } from 'react'
import { FaPaperPlane, FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import emailjs from '@emailjs/browser'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)

  
  const EMAILJS_CONFIG = {
    serviceId: 'service_83dlkse',
    templateId: 'template_kc8mxbi',
    publicKey: '8bRQjTLQaYkuvy_ur'
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: '', message: '' })

    
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      
    }

    try {
      const response = await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      )

      console.log('Email enviado exitosamente:', response.status, response.text)

      setStatus({
        type: 'success',
        message: '¡Mensaje enviado con éxito! Te responderé pronto.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('Error completo:', error)
      console.error('Status:', error.status)
      console.error('Text:', error.text)
      
      let errorMessage = 'Hubo un error al enviar el mensaje. '
      


      setStatus({
        type: 'error',
        message: errorMessage
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="gradient-text">Contacto</span>
        </h2>
        <p className="section-subtitle">
          ¿Tienes un proyecto en mente? ¡Hablemos!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <h3>Información de Contacto</h3>
              <p>
                Estoy disponible para proyectos freelance, oportunidades de trabajo
                o simplemente para conectar. No dudes en escribirme.
              </p>
              <div className="contact-details">
                <div className="detail-item">
                  <strong>Email:</strong>
                  <a href="mailto:ilvarcamelo206@gmail.com" className="email-link">
                    ilvarcamelo206@gmail.com
                  </a>
                </div>
                <div className="detail-item">
                  <strong>Disponibilidad:</strong>
                  <span>Tiempo completo</span>
                </div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Nombre</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Tu Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="tu-email@ejemplo.com"
              />
              <small className="form-hint">Necesitamos tu email para poder responderte</small>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Cuéntame sobre tu proyecto u oportunidad de trabajo..."
              ></textarea>
            </div>

            {status.message && (
              <div className={`status-message ${status.type}`}>
                {status.type === 'success' ? <FaCheckCircle /> : <FaExclamationCircle />}
                <span>{status.message}</span>
              </div>
            )}

            <button
              type="submit"
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                'Enviando...'
              ) : (
                <>
                  <span>Enviar Mensaje</span>
                  <FaPaperPlane />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
