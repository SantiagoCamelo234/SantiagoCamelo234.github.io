# Portfolio Personal

Portfolio profesional desarrollado con React y Vite, con diseño oscuro moderno e interfaz intuitiva.

## 🚀 Características

- **Sobre Mí**: Sección personalizada con información sobre ti
- **Tecnologías**: Barras de progreso animadas para cada tecnología
- **Proyectos**: Galería de proyectos con enlaces a GitHub y demos
- **Formulario de Contacto**: Sistema de envío de emails usando EmailJS
- **Enlaces Sociales**: GitHub, LinkedIn y descarga de CV
- **Diseño Responsive**: Adaptado para todos los dispositivos
- **Tema Oscuro**: Interfaz moderna con colores oscuros

## 📦 Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Construye para producción:
```bash
npm run build
```

## ⚙️ Configuración

### 1. Enlaces Sociales (Header.jsx)
Edita los enlaces en `src/components/Header.jsx`:
```javascript
const socialLinks = {
  github: 'https://github.com/tu-usuario',
  linkedin: 'https://linkedin.com/in/tu-perfil',
  cv: '/cv.pdf' // Coloca tu CV en la carpeta public
}
```

### 2. Información Personal (About.jsx)
Edita el contenido en `src/components/About.jsx`:
```javascript
const aboutData = {
  title: 'Sobre Mí',
  subtitle: 'Tu Título',
  description: 'Tu descripción...',
  highlights: [...]
}
```

### 3. Tecnologías (Technologies.jsx)
Edita las tecnologías en `src/components/Technologies.jsx`:
```javascript
const technologies = [
  { name: 'React', percentage: 90, color: '#61dafb' },
  // Agrega más tecnologías...
]
```

### 4. Proyectos (Projects.jsx)
Edita los proyectos en `src/components/Projects.jsx`:
```javascript
const projects = [
  {
    title: 'Tu Proyecto',
    description: 'Descripción...',
    technologies: ['React', 'Node.js'],
    image: 'url-de-imagen',
    github: 'https://github.com/...',
    demo: 'https://demo.com'
  }
]
```

### 5. Formulario de Contacto (Contact.jsx)
Configura EmailJS:
1. Crea una cuenta en [EmailJS](https://www.emailjs.com/)
2. Crea un servicio de email
3. Crea un template
4. Actualiza las credenciales en `src/components/Contact.jsx`:
```javascript
const EMAILJS_CONFIG = {
  serviceId: 'tu_service_id',
  templateId: 'tu_template_id',
  publicKey: 'tu_public_key'
}
```

### 6. Archivo CV
Coloca tu archivo CV en formato PDF en la carpeta `public/` con el nombre `cv.pdf`

## 🎨 Personalización de Colores

Los colores se pueden personalizar en `src/index.css`:
```css
:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #1a1a1a;
  --accent-primary: #6366f1;
  --accent-secondary: #8b5cf6;
  /* ... más colores */
}
```

## 📝 Estructura del Proyecto

```
portfolio/
├── public/
│   └── cv.pdf
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Header.jsx
│   │   ├── Projects.jsx
│   │   └── Technologies.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 🛠️ Tecnologías Utilizadas

- React 18
- Vite
- React Icons
- EmailJS
- CSS3 (Variables CSS, Grid, Flexbox)

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.



