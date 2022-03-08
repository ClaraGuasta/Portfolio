import React from 'react';


function Header() {
    return (
      // <!-- NAVBAR -->
      <header>
        <div className="header">
          <a className="headerCG" href="#">CG</a>
          <i className="fas fa-bars menu"></i>
          <ul className="navbar__links">
            <li className="navbar__link active" data-ref="home">
              <a href="#home">Home</a>
            </li>
            <li className="navbar__link" data-ref="about">
              <a href="#about">Sobre Mí</a>
            </li>
            <li className="navbar__link" data-ref="skills">
              <a href="#skills">Skills</a>
            </li>
            <li className="navbar__link" data-ref="portfolio">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navbar__link" data-ref="contact">
              <a href="#contact">Contacto</a>
            </li>
          </ul>
            <ul className="linksHeader">
              <li data-ref="home">
                <a href="#home">Home</a>
              </li>
              <li data-ref="about">
                <a href="#about">Sobre Mí</a>
              </li>
              <li data-ref="skills">
                <a href="#skills">Skills</a>
              </li>
              <li data-ref="portfolio">
                <a href="#portfolio">Portfolio</a>
              </li>
              <li data-ref="contact">
                <a href="#contact">Contacto</a>
              </li>
              </ul>
        </div>
      </header>
    );
  }
  
  export default Header;