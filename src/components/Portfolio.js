import React from "react";
import sklibros from '../assets/img/sklibros_.png'
import dashboard from '../assets/img/dashboard.png'

function Portfolio() {
  return (
    // <!-- Portfolio -->
    <section className="portfolio" id="portfolio">
      <div className="container">
        <h2 className="section__title">Portfolio</h2>
        <h3 className="section__subtitle">
          Acá se pueden ver los proyectos en los que trabajé
        </h3>
        <div className="portfolio__grid">
          <div className="portfolio__item">
            <picture>
              <source type="image/jpeg" srcSet={sklibros} />
              <img className="portfolio__img" alt="portfolio item" />
            </picture>
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">Sk Libros</h3>
              <p className="portfolio__description--text">
                E-commerce funcional y responsive de libros.Realizado en el
                marco de Digital House.
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href="http://sklibros.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/ClaraGuasta/grupo_1_SKLibros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>
          <div className="portfolio__item">
            <picture>
              <source type="image/jpeg" srcSet={dashboard} />
              <img className="portfolio__img" alt="portfolio item" />
            </picture>
            <div className="portfolio__description">
              <h3 className="portfolio__description--title">
                Dashboard de Sk Libros
              </h3>
              <p className="portfolio__description--text">
                Dashboard realizado con React, consumiendo la api del proyecto
                Sk Libros
              </p>
              <div className="buttons__container">
                <a
                  className="button"
                  href="http://sklibros.herokuapp.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-globe-americas"></i> Website
                </a>
                <a
                  className="button"
                  href="https://github.com/ClaraGuasta/dashboardSkLibros"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-github"></i> Repository
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
