import React, { useState } from 'react';
import DropDown from './Dropwdown';

function Header() {
  const [
    isDropdownOpen,
    setDropdownOpen
  ] = useState(false);

  const handleUserClick = () => setDropdownOpen(!isDropdownOpen)

    return (
      <header>
        <div className="header">
          <a className="headerCG" href="#home">CG</a>
          <button className="button-menu-toggle" onClick={handleUserClick}>
          <i className="fas fa-bars menu"></i>
          </button>
            <ul className="linksHeader">
                <button onClick={() => window.scrollTo(0, 0)}>Home</button>
                <button onClick={() => window.scrollTo(0, 600)}>Sobre Mí</button>
                <button onClick={() => window.scrollTo(0, 1400)}>Experiencia</button >
                <button onClick={() => window.scrollTo(0, 1600)}>Skills</button>
                <button onClick={() => window.scrollTo(0, 2000)}>Portfolio</button>
                <button onClick={() => window.scrollTo(0, 2800)}>Contacto</button >
              </ul>
        </div>
        {isDropdownOpen && <DropDown handleUserClick={handleUserClick} />}
      </header>
    );
  }
  
  export default Header;