import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const words = ["JUNIOR", "DESARROLLADOR", "FRONT-END", "BACK-END", "FULL-STACK", "JAVASCRIPT", "REACT"];
  const [currentWord, setCurrentWord] = useState(0);
  const [displayWord, setDisplayWord] = useState(words[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextWord = words[(currentWord + 1) % words.length];
      animateWordChange(displayWord, nextWord, setDisplayWord, setCurrentWord, currentWord);
    }, 3000);
    return () => clearInterval(interval);
  }, [currentWord, displayWord, words]);

  return (
    <div className="page-container">
      {/* Fondo animado */}
      <div className="animated-background"></div>

      {/* Barra Superior */}
      <div className="header-bar">
        <div className="role">JR-DEV</div>
        <div className="info">Ingeniería en Informática</div>
      </div>

      {/* Menú vertical con íconos */}
      <div className="vertical-menu">
        <a href="https://www.linkedin.com/in/juanleiton/" target="_blank" rel="noopener noreferrer" className="menu-item">
          <div className="menu-icon">
            <i className="fab fa-linkedin-in"></i>
          </div>
          <div className="menu-card">LinkedIn</div>
        </a>
        <a href="https://github.com/ItsJuanKamilo" target="_blank" rel="noopener noreferrer" className="menu-item">
          <div className="menu-icon">
            <i className="fab fa-github"></i>
          </div>
          <div className="menu-card">GitHub</div>
        </a>
        <a href="/My_Web/CV_JUAN_LEITON.pdf" target="_blank" rel="noopener noreferrer" className="menu-item">
          <div className="menu-icon">
            <i className="fa-regular fa-file-pdf"></i>
          </div>
          <div className="menu-card">CV</div>
        </a>
        <a href="http://wa.me/56953776555" target="_blank" rel="noopener noreferrer" className="menu-item">
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
          Ingeniería en Informática, con experiencia en desarrollo de software, análisis de datos y manejo de bases de datos. 
          Me interesa trabajar con soluciones en la nube usando AWS en lo cual estoy aprendiendo constantemente y tengo buen manejo de GitHub. 
          Además me he dedicado a programar ya sea aplicaciones web como aplicaciones móviles.
        </p>
      </section>

      {/* Barra Inferior de Logos */}
      <div className="footer-bar">
        <div className="logos">
        <img src="/My_Web/logos/html5.png" alt="HTML5" />
          <img src="/My_Web/logos/css3.png" alt="CSS3" />
          <img src="/My_Web/logos/javascript.png" alt="JavaScript" />
          <img src="/My_Web/logos/react.png" alt="React" />
          <img src="/My_Web/logos/nodejs.png" alt="Node.js" />
          <img src="/My_Web/logos/aws.png" alt="AWS" />
          <img src="/My_Web/logos/laravel.png" alt="Laravel" />
          <img src="/My_Web/logos/python.png" alt="Python" />
          <img src="/My_Web/logos/vuejs.png" alt="Vuejs" />
          <img src="/My_Web/logos/postgresql.png" alt="Postgres" />
          <img src="/My_Web/logos/php.png" alt="Php" />
        </div>
      </div>
    </div>
  );
}

function animateWordChange(current, next, setDisplayWord, setCurrentWord, index) {
  const length = current.length;
  let step = 0;

  const interval = setInterval(() => {
    if (step < length) {
      setDisplayWord((prev) => prev.slice(0, -1)); // Elimina una letra desde la derecha
    } else {
      setDisplayWord((prev) => next.slice(0, prev.length + 1)); // Añade letras de la nueva palabra
    }

    step++;
    if (step >= length + next.length) {
      setCurrentWord(index + 1);
      clearInterval(interval);
    }
  }, 100); // Tiempo entre cada paso
}

export default App;
