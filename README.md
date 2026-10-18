# Portfolio profesional

Portfolio personal desarrollado con **React + Vite**, CSS3 con variables y sistema de diseño propio.

## 🚀 Inicio rápido

```bash
npm install
npm run dev
```

Abre [http://localhost:5173](http://localhost:5173) en el navegador.

## 📦 Comandos disponibles

| Comando           | Descripción                          |
|-------------------|--------------------------------------|
| `npm run dev`     | Servidor de desarrollo con hot-reload |
| `npm run build`   | Build de producción en `/dist`        |
| `npm run preview` | Previsualizar el build localmente    |

## 📁 Estructura del proyecto

```
portfolio/
├── public/
│   ├── images/
│   │   ├── projects/       ← Imágenes de proyectos (agregar aquí)
│   │   └── ui-ux/          ← Capturas de rediseños UX/UI
│   ├── cv/                 ← CV en PDF (si se desea publicar)
│   └── favicon.svg         ← Favicon provisional
├── src/
│   ├── components/
│   │   ├── layout/         ← Header, Footer, Container
│   │   ├── navigation/     ← MobileMenu
│   │   ├── ui/             ← Button, ProjectCard, SkillCard, SectionHeading, ProjectImage
│   │   └── sections/       ← Hero, FeaturedProjects, Specialties, FeaturedCaseStudy,
│   │                           DesignPortfolio, OtherProjects, About, Contact, CaseStudyPage
│   ├── data/
│   │   ├── profile.js      ← ⭐ Datos personales, contacto y CV
│   │   ├── projects.js     ← ⭐ Todos los proyectos del portfolio
│   │   ├── specialties.js  ← Bloques de especialidades técnicas
│   │   └── designProjects.js ← Casos de estudio UX/UI
│   ├── pages/
│   │   └── NotFoundPage.jsx
│   ├── styles/
│   │   ├── tokens.css      ← Variables CSS del sistema de diseño
│   │   ├── global.css      ← Reset y estilos base
│   │   ├── layout.css      ← Container, grid, secciones
│   │   ├── components.css  ← Botones, tarjetas, badges
│   │   ├── sections.css    ← Estilos de header, hero, secciones
│   │   └── responsive.css  ← Media queries responsive
│   ├── App.jsx             ← Rutas y composición principal
│   └── main.jsx            ← Punto de entrada
├── index.html              ← SEO y meta tags
└── vite.config.js
```

## ✏️ Cómo personalizar el contenido

### 1. Datos personales y contacto

Edita [`src/data/profile.js`](src/data/profile.js):

```js
export const profile = {
  name: 'Tu Nombre',
  email: 'tu@email.com',
  github: 'https://github.com/tuusuario',
  linkedin: 'https://linkedin.com/in/tuusuario',
  cvUrl: '/cv/tu-cv.pdf',   // coloca el PDF en public/cv/
};
```

### 2. Agregar o editar proyectos

Edita [`src/data/projects.js`](src/data/projects.js). Cada proyecto acepta:

```js
{
  id: 'mi-proyecto',
  name: 'Nombre del proyecto',
  description: 'Descripción...',
  image: '/images/projects/mi-proyecto-cover.jpg',
  technologies: ['React', 'Node.js'],
  status: 'published',   // published | in-progress | paused | archived | concept
  caseStudyRoute: '/proyectos/mi-proyecto',
  externalUrl: 'https://...',
  repoUrl: 'https://github.com/...',
}
```

### 3. Añadir imágenes de proyectos

Coloca las imágenes en:
- `public/images/projects/` → portadas de proyectos
- `public/images/ui-ux/` → capturas de rediseños

Y actualiza el campo `image` en `projects.js` o `designProjects.js`.

### 4. Publicar el CV

Copia el PDF a `public/cv/tu-cv.pdf` y actualiza `profile.cvUrl` en `profile.js`.

### 5. Casos de estudio completos

Para añadir contenido a una página de caso de estudio, agrega los campos en `projects.js`:

```js
{
  // ...datos básicos
  context: 'Descripción del contexto y problema...',
  objectives: ['Objetivo 1', 'Objetivo 2'],
  solution: 'Descripción de la solución...',
  learnings: 'Aprendizajes del proyecto...',
}
```

## 🎨 Sistema de diseño

Los tokens de color, tipografía y espaciado están en [`src/styles/tokens.css`](src/styles/tokens.css).

Para cambiar el color de acento:

```css
:root {
  --color-accent: #4f8ef7;     /* Color principal */
  --color-accent-dim: #3a6ed4; /* Versión oscurecida */
}
```

## 🌐 Despliegue en Cloudflare Pages

1. Sube el proyecto a un repositorio de GitHub.
2. Ve a [Cloudflare Pages](https://pages.cloudflare.com) y crea un nuevo proyecto.
3. Conecta el repositorio de GitHub.
4. Configura el build:
   - **Framework preset**: Vite
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Install command**: `npm install`
5. Despliega. El archivo `public/_redirects` ya está configurado para manejar rutas de React Router.

## 📋 Datos pendientes de completar

- [ ] Nombre real en `profile.js`
- [ ] Email de contacto
- [ ] URL de GitHub
- [ ] URL de LinkedIn
- [ ] CV en PDF (en `public/cv/`)
- [ ] Imagen de portada de cada proyecto
- [ ] Descripción de rol en el caso de estudio de TeMiPu
- [ ] Aprendizajes y detalles de cada caso de estudio
- [ ] URL de Play Store de TeMiPu (si se desea mostrar)
- [ ] Prototipos de Figma de los proyectos UX/UI
- [ ] Capturas de pantalla de TeMiPu y otros proyectos
- [ ] Open Graph image (`public/images/og-image.jpg`)
- [ ] Favicon personalizado (`public/favicon.svg` o `.ico`)
- [ ] URL del sitio en `profile.js` y `index.html`

## 🛠️ Tecnologías

- React 18
- Vite 6
- React Router DOM 7
- Lucide React (iconografía)
- CSS3 con variables nativas (sin frameworks CSS)
