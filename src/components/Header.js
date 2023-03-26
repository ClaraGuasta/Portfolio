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
        <div className="header flex justify-between items-center text-aliceBlue bg-black fixed w-full z-5 
        transition-all md:justify-around ">
          <a className="headerCG" href="#home">CG</a>
          <button className="button-menu-toggle" onClick={handleUserClick}>
          <i className="fas fa-bars menu"></i>
          </button>
            <ul className="linksHeader">
                <button onClick={() => window.scrollTo(0, 0)}>Home</button>
                <button onClick={() => window.scrollTo(0, 600)}>Sobre Mí</button>
                <button onClick={() => window.scrollTo(0, 1400)}>Experiencia</button >
                <button onClick={() => window.scrollTo(0, 1850)}>Skills</button>
                <button onClick={() => window.scrollTo(0, 2450)}>Portfolio</button>
                <button onClick={() => window.scrollTo(0, 3250)}>Contacto</button >
              </ul>
        </div>
        {isDropdownOpen && <DropDown handleUserClick={handleUserClick} />}
      </header>
    );
  }
  
  export default Header;