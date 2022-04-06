import React from "react";

function DropDown(){
    return(
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
    )
}

export default DropDown