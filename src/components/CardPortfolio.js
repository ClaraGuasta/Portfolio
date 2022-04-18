import React from "react";

function CardPortfolio({ imgUrl, title, text, linkWeb, linkRepo }) {
  return (
    <>
      <div className="portfolio__item">
        <picture>
          <source type="image/jpeg" srcSet={imgUrl} />
          <img className="portfolio__img" alt="portfolio item" />
        </picture>
        <div className="portfolio__description">
          <h3 className="portfolio__description--title">{title}</h3>
          <p className="portfolio__description--text">
           {text}
          </p>
          <div className="buttons__container">
            <a
              className="button"
              href={linkWeb}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-globe-americas"></i> Website
            </a>
            <a
              className="button"
              href={linkRepo}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i> Repository
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardPortfolio;
