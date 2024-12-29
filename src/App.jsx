import React from "react";
import useWordAnimation from "./useWordAnimation";
import "./App.css";

function App() {
  const words = [
    "JUNIOR",
    "DESARROLLADOR",
    "FRONT-END",
    "BACK-END",
    "FULL-STACK",
    "JAVASCRIPT",
    "REACT",
  ];

  const displayWord = useWordAnimation(words);

  return (
    <div className="page-container">
      {/* Fondo animado */}
      <div className="animated-background"></div>

      {/* Barra Superior */}
      <div className="header-bar">
        <div className="role">JR-DEV</div>
        <img src="/logos/logo.png" alt="Logo" className="logo" />
      </div>

      {/* Menú vertical con íconos */}
      <div className="vertical-menu">
        <a
          href="https://www.linkedin.com/in/juanleiton/"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <div className="menu-icon">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="menu-card">LinkedIn</div>
        </a>
        <a
          href="https://github.com/ItsJuanKamilo"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <div className="menu-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="menu-card">GitHub</div>
        </a>
        <a
          href="/CV_JUAN_LEITON.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <div className="menu-icon">
            <i className="fa-regular fa-file-pdf"></i>
          </div>
          <div className="menu-card">CV</div>
        </a>
        <a
          href="http://wa.me/56953776555"
          target="_blank"
          rel="noopener noreferrer"
          className="menu-item"
        >
          <div className="menu-icon">
            <i className="fab fa-whatsapp"></i>
          </div>
          <div className="menu-card">WhatsApp</div>
        </a>
      </div>

      {/* Contenido principal */}
      <main className="main-content">
        <h1 className="name">JUAN LEITON</h1>
        <h2 className="dynamic-text">
          <span className="word-placeholder">{displayWord}</span>
        </h2>
      </main>

      {/* Sección de descripción */}
      <section className="description-section">
        <p className="description">
          Ingeniería en Informática, con experiencia en desarrollo de software,
          análisis de datos y manejo de bases de datos. Me interesa trabajar con
          soluciones en la nube usando AWS en lo cual estoy aprendiendo
          constantemente. Además me he dedicado a programar ya sea aplicaciones
          web como aplicaciones móviles.
        </p>
      </section>

      {/* Barra Inferior de Logos */}
      <div className="footer-bar">
        <div className="logos">
          <img src="/logos/html5.png" alt="HTML5" />
          <img src="/logos/css3.png" alt="CSS3" />
          <img src="/logos/javascript.png" alt="JavaScript" />
          <img src="/logos/react.png" alt="React" />
          <img src="/logos/nodejs.png" alt="Node.js" />
          <img src="/logos/aws.png" alt="AWS" />
          <img src="/logos/laravel.png" alt="Laravel" />
          <img src="/logos/python.png" alt="Python" />
          <img src="/logos/vuejs.png" alt="Vue.js" />
          <img src="/logos/postgresql.png" alt="PostgreSQL" />
          <img src="/logos/php.png" alt="PHP" />
        </div>
      </div>

      {/* Footer con texto */}
      <footer className="footer">
        <p>© 2024 Juan Leiton. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
